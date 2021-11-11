import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerCentralizer:{

    width: '80%',
    justifyContent: "center",
    alignItems: "center",

  },
  title: {
    width: '90%',
    fontSize: 30,
    color: "black",
    marginBottom: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    backgroundColor: "#fff",
    height: 50,
    marginBottom: 10,
    padding: 10,
    color: "black",
    borderRadius: 3
  },
  button: {
    backgroundColor: "#1abc9c",
    width: 130,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 30,
    marginLeft: 'auto'
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginLeft: "-30%",
  },
  postImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "black",
    backgroundColor: "white",
    marginLeft: "5%",
  },
  postImageText: {
    fontSize: 15,
    textAlignVertical: "center",
    color: "#000",
    marginLeft: "2.5%",
  },
});

export default Styles;
