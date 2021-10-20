
import React, { useState } from 'react';
import RNPickerSelect from "react-native-picker-select";
import Logo from './Logo.jpg';
import { CSVLink } from 'react-csv';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text, } from 'react-native';

export default class SignUp extends React.Component {

  state = {
    username: '', hospital_name: '', zip_code: '', phone_number: '', blood_type: '',
  }

  
  onChangeText = (key: string, val: string) => {
    this.setState({ [key]: val })
  }

  signUp = async () => {
    
    const { username, zip_code, hospital_name, phone_number, blood_type } = this.state
    const data = {username, zip_code, hospital_name, phone_number, blood_type}
    const cols = [
      { label: "Name", key: "username" },
      { label: "Zip Code", key: "zip_code" },
      { label: "Hospital Name", key: "hospital_name" },
      { label: "Phone Number", key: "phone_number" },
      { label: "Blood Type", key: "blood_type" }
    ];

    try {
      console.log('user successfully requested!: ')
      // save the data in the form to a csv file 
      console.log('Requester Name', username)
      console.log('Hospital Name', hospital_name)
      console.log('Phone #', phone_number)
      console.log('blood_type', blood_type)
      console.log('Zip Code', zip_code)

      const writeFileP = require("write-file-p");
 
      // Write a text file
      writeFileP(`${__dirname}/request.txt`, {data}, (err: any, data: any) => {
          console.log(err || data);
      });

      } catch (err) {
        console.log('error in REQUEST action: ', err)
      }
  }

  render() {  
    return (
      <View style={styles.container}>
        <img src={Logo} />
        <Text style={styles.head}>
           150ml Blood to save 2 Lives
          {'\n'}
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Requester Name'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)} 
        />
        <TextInput
          style={styles.input}
          placeholder='Hospital Name'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('hospital_name', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Hospital Zip Code to Donate'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('zip_code', val)}
        />
          {'\n'}
        <RNPickerSelect 
          placeholder={{ label: "Select the Blood Type needed", 
                         value: null, color: 'white', 
                         backgroundColor: '#42A5F5'}}             
          onValueChange={(blood_type: any) => blood_type}
          style={pickerSelectStyles}
          items={[ 
            { label: "A  +ve", value: "A+", color: 'red', },
            { label: "A  -ve", value: "A-", color: 'red', },  
            { label: "B  +ve", value: "B+", color: 'red', },
            { label: "B  -ve", value: "B-", color: 'red', }, 
            { label: "O  +ve", value: "O+", color: 'red', },
            { label: "O  -ve", value: "O-", color: 'red', },   
            { label: "AB  +ve", value: "AB+", color: 'red', },
            { label: "AB  -ve", value: "AB-", color: 'red', }  
          ]}
         
        />
        {'\n'}
        <div> 

           <Button        
              title='Request'
              color="#841584"
              onPress={this.signUp}
          />          

       </div>
        <Text style={styles.paragraph}>
            This app is designed for mothers undergoing labor, 
             who do not have the access to blood. With the control of a 
             doctor or someone who has the app downloaded, a message will be 
             sent immediately to areas nearby as well as existing Blood Banks 
             with a request for blood supply.
          {'\n'}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  paragraph: {
    margin: 24,
    fontSize: 16,
    textAlign: 'left',
    fontStyle: 'italic',
  },
  head: {
    margin: 24,
    fontSize: 16,
    textAlign: 'left',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: 10,
    backgroundColor: '#42A5F5',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#42A5F5',
    borderRadius: 4,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    width: 10,
    backgroundColor: '#42A5F5',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: '#42A5F5',
    borderRadius: 8,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

