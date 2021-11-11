import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  containerCentralizer:{
    width: '70%',
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    width: '100%',
    textAlign: 'center',
    color: "black",
    marginBottom: 50,
  },
  input: {
    width: "100%",
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#fff",
  },
  buttons:{
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },  
  button: {
    backgroundColor: "#1abc9c",
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    margin: 5,
    marginLeft: 'auto'
  },
  text:{
    color: 'black',
    marginTop: 90
  },
  forgotPassword: {
    color: 'black',
    marginRight: 40,
    fontSize: 14
  },
  buttonLabel: {
    color: "white",
    fontSize: 12,
    textDecorationLine: "underline",
  },
});

export default Styles;
