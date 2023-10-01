import { useState } from 'react';
import {Text, StyleSheet, View, Image, Button, ScrollView} from 'react-native'

export default function App() {

  const info = require('./info.json')

  const [click,setClick] = useState('')

  const clicked = (Specialty : string) => {
    setClick(Specialty)
  }

  return (
          <ScrollView style = {{margin:20}}>
            <Text style = {styleAppText.titleText}>KHBEESHERS DEN</Text>
            <Image source = {{ uri: 'http://192.168.8.1/res/icon_signal_03.png', }} style={{width: 200, height: 200}}></Image>
            <Text style = {styleAppText.titleText}>After Picture</Text>
            { click ? <Specialty name = {click} changeSpecialty = {clicked} info ={info["Specialty"][click]}></Specialty> :       <><Button onPress={() => clicked('SII')} title = 'SII'></Button>
                              <Button onPress={() => clicked('SII')} title = 'SII'></Button>
                              <Button onPress={() => clicked('SII')} title = 'SII'></Button></>
             }

          </ScrollView>
      )
};

const styleAppText = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

type SpecialtyProps = {
  name: string,
  changeSpecialty : (Specialty : string) => void
  info: any
}

const Specialty = (props: SpecialtyProps) => {
  return <ScrollView>
    <Text style = {styleAppText.titleText} >{props.name}</Text>
    <Button onPress={ () => props.changeSpecialty('')} title = 'Go back to Specialty change'></Button>
    <Course info = {props.info["Course"]}></Course>
  </ScrollView>
}

type CourseProps = {
  info: any
}

const Course = (props: CourseProps) => {
  return <ScrollView>
        <View style = {{flex: 1, flexDirection:'row'}}>   
               <View style={{flex: 1, backgroundColor: 'red'}}><Button title = "Lectures"></Button></View>
               <View style={{flex: 2, backgroundColor: 'darkorange'}}><Button title = "ProblemSession"></Button></View>
               <View style={{flex: 3, backgroundColor: 'green'}}><Button title = "PracticalSession"></Button></View>
          </View>   
          <View>
            </View> 
  </ScrollView>
}