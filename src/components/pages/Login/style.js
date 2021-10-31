import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495e",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "70%",
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#1abc9c",
    width: "40%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    margin: 5,
  },
  forgotPassword: {
    backgroundColor: "transparent",
    width: "60%",
    height: 20,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLabel: {
    color: "white",
    fontSize: 12,
    textDecorationLine: "underline",
  },
});

export default Styles;
