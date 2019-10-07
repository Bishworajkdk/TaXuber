import React, { Component } from 'react'
import { Text, StyleSheet, View, Platform } from 'react-native'
import LoginForm from "../components/LoginForm";

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state ={
            email:"",
            password:"",
            errorMessage:""
        };
        //need to bind handlechange
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(name, value){
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}> TaXuber </Text>
                <LoginForm  email={this.state.email} 
                password={this.state.password} 
                handleChange={this.handleChange}/>

                <Image source={require("../images/taxi.jpg")} style ={styles.logo} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#3A3743"
    },
    headerText:{
       fontSize: 44,
       color: "#C1D760",
       textAlign: "center",
       marginTop: 30,
       fontFamily: Platform.OS === "android" ? "sans-serif-light" :undefined,
       fontWeight: "200" 
    },
    logo:{
        height: 300,
        width: 300,
        alignSelf: "center" 
    }
});
 