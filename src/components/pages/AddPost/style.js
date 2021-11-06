import { StyleSheet, Dimensions } from "react-native";

const Styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
  },
  profileContainer: {
    flexDirection: "row",
    marginBottom: "10%",
    width: "100%",
  },
  profileAvatar: {
    marginLeft: "5%",
  },
  profileName: {
    fontSize: 20,
    marginLeft: "2.5%",
    textAlignVertical: "center",
    color: "#000",
  },
  postDescription: {
    width: "90%",
    height: "30%",
    padding: 10,
    fontSize: 16,
    borderColor: "black",
    borderWidth: 1,
    textAlignVertical: "top",
  },
  imageContainer: {
    flexDirection: "row",
    marginTop: "5%",
    width: "100%",
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
  buttonsContainer: {
    width: "100%",
    paddingRight: "15%",
    paddingLeft: "15%",
    marginTop: "10%",
  },
  button: {
    backgroundColor: "#0DB9AF",
  },
});

export default Styles;
