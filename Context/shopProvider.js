import { collection, getDocs, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db, auth } from "../Firebase/config";
import { getAuth } from "firebase/auth";

export const Shop = createContext();

const ShopProvider = ({ children }) => {
  //const [cookieUser, setCookieUser] = useState("");
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [cart, setCart] = useState([]);
  const [ordenes, setOrdenes] = useState([]);
  const [userLogueado, setUserLogueado] = useState(null);

  const cargarUsuario = () => {
    const auth = getAuth();
    const userEmail = auth.currentUser.email;
    setUserLogueado(userEmail);
  };

  const cargarProductos = async () => {
    const queryCollecton = query(collection(db, "productos"));
    const querySnapshot = await getDocs(queryCollecton);
    const productos = [];
    querySnapshot.forEach((doc) => {
      const producto = { id: doc.id, ...doc.data() };
      productos.push(producto);
    });
    setProductos([...productos]);
  };

  const cargarCategorias = async () => {
    const queryCollectonCAtegories = query(collection(db, "categories"));
    const querySnapshotCategories = await getDocs(queryCollectonCAtegories);
    const categorias = [];
    querySnapshotCategories.forEach((doc) => {
      const categoria = { id: doc.id, ...doc.data() };
      categorias.push(categoria);
    });
    setCategorias([...categorias]);
  };

  const cargarOrdenes = async () => {
    const auth = getAuth();
    const userEmail = auth.currentUser.email;

    const queryCollectonOrders = query(collection(db, "orders"));
    const querySnapshotOrders = await getDocs(queryCollectonOrders);
    const ordenes = [];
    querySnapshotOrders.forEach((doc) => {
      if (doc.data().buyer.user === userEmail) {
        const orden = { id: doc.id, ...doc.data() };
        ordenes.push(orden);
      }
    });
    setOrdenes([...ordenes]);
  };

  useEffect(() => {
    //Funcion IFE
    /*(async () => {
      //console.log("ShopProvider");
      const queryCollecton = query(collection(db, "productos"));
      const querySnapshot = await getDocs(queryCollecton);
      const productos = [];
      querySnapshot.forEach((doc) => {
        const producto = { id: doc.id, ...doc.data() };
        productos.push(producto);
      });
      setProductos(productos);
    })();*/

    //cargarUsuario();
    cargarProductos();
    cargarCategorias();
    //cargarOrdenes();
  }, []);

  console.log("productos", productos);
  console.log("categorias", categorias);

  //FUNCIONES
  const addCart = (product, quantityToAdd) => {
    const producto = isInCart(product);
    console.log(producto);
    if (producto) {
      producto.quantity += quantityToAdd;
      const cartFiltrado = cart.filter(
        (elemento) => elemento.id !== producto.id
      );
      cartFiltrado.push(producto);
      setCart(cartFiltrado);
    } else {
      //Se agrega un nuevo objeto al carrito
      setCart([...cart, { ...product, quantity: quantityToAdd }]);
    }
  };

  //Función auxiliar que determina si el producto está o no en el cart
  const isInCart = (producto) => {
    return cart.find((elemento) => elemento.id === producto.id);
  };

  const sumaTotal = () => {
    const suma = cart.reduce(
      (acc, item) => (acc += item.price * item.quantity),
      0
    );
    return suma;
  };

  const conteoItems = () => {
    const suma = cart.reduce((acc, item) => (acc += item.quantity), 0);
    return suma;
  };

  const removeItem = (id) => {
    const auxCart = cart.filter((item) => item.id !== id);
    setCart(auxCart);
  };

  return (
    <Shop.Provider
      value={{
        productos: productos,
        categories: categorias,
        addCart: addCart,
        cart: cart,
        sumaTotal,
        conteoItems,
        removeItem,
        cargarUsuario,
        cargarOrdenes,
        ordenes,
      }}
    >
      {children}
    </Shop.Provider>
  );
};

export default ShopProvider;
