import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495e",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    backgroundColor: "#fff",
    height: 50,
    marginBottom: 10,
    padding: 10,
    color: "black",
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
});

export default Styles;
