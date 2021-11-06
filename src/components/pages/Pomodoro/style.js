import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  progressBarContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
  },
  buttonsStart: {
    marginTop: 20,
    margin: 5,
    width: 150,
    backgroundColor: "#0DB9AF",
    elevation: 0,
  },
  buttonReset: {
    marginTop: 20,
    margin: 5,
    width: 150,
    backgroundColor: "#DC3545",
    elevation: 0,
  },
  text: {
    color: "#000000",
    fontSize: 30,
  },
  sliderText: {
    color: "#000000",
    fontSize: 15,
  },
});

export default Styles;

// #621648
// #881648
// #bd2047
// #fa1427
// #ff7b41
