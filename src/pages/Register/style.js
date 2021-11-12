import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    width: "100%",
    height: "100%",
  },
  containerCentralizer: {
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "black",
    marginLeft: "-45%",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "75%",
    backgroundColor: "#fff",
    height: 40,
    marginBottom: 10,
    padding: 10,
    color: "black",
    borderRadius: 3
  },
  button: {
    backgroundColor: "#1abc9c",
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    height: 50,
    borderRadius: 5,
    marginTop: 30,
    marginLeft: "35%",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginLeft: "-10%",
  },
  postImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "black",
    backgroundColor: "white",
  },
  postImageText: {
    fontSize: 15,
    textAlignVertical: "center",
    color: "#000",
    marginLeft: "2.5%",
  },
});

export default Styles;
