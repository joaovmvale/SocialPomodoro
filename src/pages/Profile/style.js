import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        width: Dimensions.get("window").width,
        marginBottom: "20%",
    },
    name: {
        fontSize: 20,
        color: "#000",
        marginLeft: "5%",
    },
    body: {
        marginBottom: "10%",
        width: Dimensions.get("window").width,
    },
    label: {
        fontSize: 20,
        color: "#000",
        marginLeft: "5%",
        marginBottom: "5%",
    },
    button: {
        marginTop: "5%",
        width: "80%",
        height: "10%",
        justifyContent: "center",
        padding: 10,
        borderRadius: 5,
    },
});

export default Style;