import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Button,
} from "react-native";
import { colors } from "../Styles/Global";

const Item = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.todoContainer}>
          <Text style={styles.text}>{item}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Button
            title="Cerrar Modal"
            onPress={() => setModalVisible(false)}
          ></Button>
        </View>
      </Modal>
    </>
  );
};

export default Item;

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: colors.primary,
    padding: 10,
    fontSize: 14,
    margin: 10,
    borderRadius: 12,
  },
  text: { fontSize: 18 },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000080",
    margin: 30,
  },
});
