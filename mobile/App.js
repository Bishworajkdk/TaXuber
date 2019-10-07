import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Driver from "./screens/Driver";
import Passenger from "./screens/Passenger";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDriver: false,
      isPassenger: false
    };
  }

  componentDidMount() {}

  render() {
    if (this.state.isDriver) {
      return <Driver />;
    }

    if (this.state.isPassenger) {
      return <Passenger />;
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.setState({ isDriver: true })}
          style={[styles.choiceContainer, {borderWidth: 1}]}>
          <Text style={styles.choiceText}>I'm a driver</Text>
          <Image
            source={require("./images/driver.png")}
            style={styles.selectionImage}
          />
          </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.setState({ isPassenger: true })}
          style={styles.choiceContainer}
        >
          <Text style={styles.choiceText}>I'm a passenger</Text>
          <Image
            source={require("./images/passenger.png")}
            style={styles.selectionImageP}
          />
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3A3743"
  },
  choiceText: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: "200",
    color: "#FFF",
    fontFamily: Platform.OS === "android" ? "sans-serif-light" : undefined
  },
  choiceContainer: {
    flex: 1,
    borderColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  selectionImage: {
    height: 150,
    width: 200
  },
  selectionImageP: {
    height: 150,
    width: 100
    
  }

});