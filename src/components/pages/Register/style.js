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
    color: "white",
    marginLeft: "2.5%",
  },
});

export default Styles;
