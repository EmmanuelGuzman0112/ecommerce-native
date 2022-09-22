import { StyleSheet } from "react-native";

/* export const colors = {
  primary: "#256D85",
  primaryLight: "#395B64",
  secondary: "#A5C9CA",
  secondaryLight: "#E7F6F2",
  red: "#ff6c3e",
}; */

export const colors = {
  primary: "#002B5B",
  primaryLight: "#2B4865",
  secondary: "#256D85",
  secondaryLight: "#8FE3CF",
  red: "#ff6c3e",
};

export const stylesGlobales = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 10,
    backgroundColor: colors.primaryLight,
  },
  buttonPrimary: {
    backgroundColor: colors.primaryLight,
    padding: 10,
    //smarginTop: 20,
    borderRadius: 10,
    fontWeight: "bold",
  },
  link: {
    padding: 10,
    marginTop: 10,
    textDecorationLine: "underline",
  },
  textInput: {
    width: "80%",
    height: 40,
    borderColor: colors.primary,
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
  },
  tituloAutenticacion: {
    fontSize: 30,
    color: colors.primary,
    fontWeight: "bold",
    marginTop: 10,
  },
  loading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
    marginTop: 10,
    textAlign: "center",
  },
});
