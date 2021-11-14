
import React, { useState } from 'react';
import Logo from './Logo.jpg';
import 'react-phone-number-input/style.css'
import {CSVLink}  from 'react-csv';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import RNPickerSelect from "react-native-picker-select";
// import SMS API

import {
  View,

  Button,
  TextInput,
  StyleSheet,
  Text, } from 'react-native';

 const items=[ 
  { label: "A  +ve", value: "A+", color: 'red', },
  { label: "A  -ve", value: "A-", color: 'red', },  
  { label: "B  +ve", value: "B+", color: 'red', },
  { label: "B  -ve", value: "B-", color: 'red', }, 
  { label: "O  +ve", value: "O+", color: 'red', },
  { label: "O  -ve", value: "O-", color: 'red', },   
  { label: "AB  +ve", value: "AB+", color: 'red', },
  { label: "AB  -ve", value: "AB-", color: 'red', }  
 ]  
 
export default class SignUp extends React.Component<any,any> {
  [x: string]: any;
  constructor(props:any){
    super(props)
    this.state = {
      username: '', hospital_name: '', zip_code: '', phone_number: '', blood_type: '',
    }
  }

  onChangeText = (key: string, val: string) => {
    this.setState({ [key]: val })
  }

  _signUp() {
    const username = this.state.username;
    const zip_code = this.state.zip_code;
    const hospital_name = this.state.hospital_name;
    const phone_number = this.state.phone_number;
    const blood_type = this.state.blood_type;

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
      console.log('Requester Name:', username)
      console.log('Hospital Name:', hospital_name)
      console.log('Phone #:', phone_number)
      console.log('Blood_Type:', blood_type)
      console.log('Zip Code:', zip_code)      
      } catch (err) {
        console.log('error in REQUEST action: ', err)
      }
  }
  
  render() {  
    return (

      <View style={styles.container}>

        <Text style={styles.head}>
            '150ml Blood to save 2 Lives'
          {'\n'}
        </Text> 

        <TextInput
          style={styles.input}
          placeholder='Requester Name'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(text) => this.setState({username: text})}
          value={this.state.username}
        />
        
        <div style={{display: 'inline-block',}}>
        <PhoneInput
          inputStyle= {{width: 350,
                        height: 55,
                        backgroundColor: '#42A5F5',
                        margin: 10,
                        paddingLeft: 30,
                        color: 'white',
                        borderRadius: 14,
                        fontSize: 18, }}
                        buttonStyle={{ borderRadius: '5px 0 0 5px' }}
                        dropdownStyle={{ width: '300px' }}
                        placeholder = "Phone#"
            enableAreaCodes      
            value={this.state.phone_number}
            onChange={phone_number => this.setState({phone_number})}
        />
        </div>
        <TextInput
          style={styles.input}
          placeholder='Hospital Name'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(text) => this.setState({hospital_name: text})}
          value={this.state.hospital_name}
        />
        <TextInput
          style={styles.input}
          placeholder='Hospital Zip Code to Donate'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(text) => this.setState({zip_code: text})}
          value={this.state.zip_code}
          maxLength={6}
        />
      <div style={{width:350, borderColor:'#0f0'}}>
      <Text> Blood Type needed... </Text>  
      <RNPickerSelect 
          placeholder={{ label: "Select the Blood Type...",}}    
          onValueChange={(text)=> this.setState({blood_type:text})}
          value={this.state.blood_type}
          items={items}     
          style={pickerSelectStyles}   
        />
        </div>
        <Button        
                title='Request'
                color="#841584"
                onPress={()=>this._signUp()}
        /> 
       <Text style={styles.paragraph}>
            This app is designed to help mothers who lose blood during childbirth. The authorized personnel at the health care facility can use 
            this app to contact blood donors and blood banks by sending an alert message indicating the type of blood required and the facility's contact information. 
            The app was inspired primarily in an effort to reduce the maternal mortality rates.
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
    alignItems: 'center',
    backgroundColor: 'white'
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
