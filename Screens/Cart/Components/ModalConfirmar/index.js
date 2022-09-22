import {
  addDoc,
  collection,
  doc,
  getDoc,
  writeBatch,
} from "firebase/firestore";
import { useContext, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Loading from "../../../../Components/Loading";
import { Shop } from "../../../../Context/shopProvider";
import { db, auth } from "../../../../Firebase/config";

const ModalConfirmar = ({ modalVisible, handleVisibleModal }) => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [loggingCheckout, setLoggingCheckout] = useState(false);
  const [checkoutText, setCheckoutText] = useState("");
  const { cart } = useContext(Shop);

  const handlePurcharse = () => {
    if (nombre === "" || direccion === "") {
      return;
    }

    console.log("authEMA", auth);
    const orderGenerada = {
      buyer: {
        user: auth.currentUser.email,
        nombre: nombre,
        direccion: direccion,
      },
      items: cart,
      total: 500,
      createdAt: new Date().toLocaleString(),
    };

    //Primer paso: abrir un batch
    const batch = writeBatch(db); //ver en qué level colocarlo

    //Array auxiliar que me define si hay productos fuera de stock
    const outOfStock = [];

    //Chequear el stock del producto en nuestra db y restarlo a la cantidad, si corresponde
    cart.forEach((prod) => {
      setLoggingCheckout(true);
      getDoc(doc(db, "productos", prod.id)).then((documentSnapshot) => {
        if (documentSnapshot.data().stock >= prod.quantity) {
          batch.update(doc(db, "productos", documentSnapshot.id), {
            stock: documentSnapshot.data().stock - prod.quantity,
          });
        } else {
          outOfStock.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        }
        console.log(outOfStock);

        if (outOfStock.length === 0) {
          addDoc(collection(db, "orders"), orderGenerada)
            .then(({ id }) => {
              batch.commit().then(() => {
                setCheckoutText("Se genero la order con id: " + id);
                setTimeout(() => {
                  handleVisibleModal();
                }, 3000);
              });
            })
            .catch((err) => {
              setCheckoutText(`Error: ${err.message}`);
            });
        } else {
          let mensaje = "";
          for (const producto of outOfStock) {
            mensaje += `${producto.nombre} `;
          }
          alert(`Productos fuera de stock: ${mensaje}`);
        }

        setLoggingCheckout(false);
      });
    });
  };

  return (
    <Modal
      animationType="slide"
      transparency={true}
      visible={modalVisible}
      onRequestClose={() => handleVisibleModal()}
    >
      <View style={styles.modalParent}>
        <TextInput
          placeholder="Ingresar nombre"
          onChangeText={setNombre}
          value={nombre}
        ></TextInput>
        <TextInput
          placeholder="Ingresar direccion"
          onChangeText={setDireccion}
          value={direccion}
        ></TextInput>

        <Text>¿Quieres confirmar la compra?</Text>

        <TouchableOpacity
          onPress={() => handleVisibleModal()}
          style={styles.btnCancelar}
        >
          <Text>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handlePurcharse()}
          style={styles.btnConfirmar}
        >
          <Text>Confirmar</Text>
        </TouchableOpacity>

        {loggingCheckout && <Loading />}

        {!loggingCheckout && <Text>{checkoutText}</Text>}
      </View>
    </Modal>
  );
};

export default ModalConfirmar;

const styles = StyleSheet.create({
  modalParent: { flex: 1, justifyContent: "center", alignItems: "center" },
  btnCancelar: {
    backgroundColor: "red",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btnConfirmar: {
    backgroundColor: "green",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
