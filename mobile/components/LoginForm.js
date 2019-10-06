import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Platform } from 'react-native'

export default class LoginForm extends Component {
    render() {
        return (
            <View>
                <TextInput style={styles.input} 
                placeholder="Your email" 
                placeholderTextColor="#FFF"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={this.props.email}
                onChangeText={(email) => this.props.handleChange("email", email)}>
                    </TextInput> 

                <TextInput style={styles.input} 
                placeholder="Password" 
                placeholderTextColor="#FFF"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                value={this.props.password}
                onChangeText={(pw) => this.props.handleChange("password", pw)}>
                    </TextInput> 
                

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Create account?</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input:{
        height: 40,
        backgroundColor: "#8793a6",
        padding: 10,
        color: "#FFF",
        marginBottom: 10

    },
    button:{
        backgroundColor: "#ABCB37",
        paddingVertical: 15,
        marginVertical: 10

    },
    buttonText:{
        textAlign: "center",
        fontSize: 23,
        color: "#000",
        fontWeight: "200",
        fontFamily: Platform.OS === "android" ? "sans-serif-light": undefined
    }
});
