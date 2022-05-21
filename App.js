// import React, {useState} from 'react';
// import {View, Text, StyleSheet, Button} from 'react-native';
// import {AsyncStorage} from 'react-native';
// //import AsyncStorage from "@react-native-async-storage/async-storage"

// export default function App() {
//   const [data, setData] = useState('');
//   const add = async () => {
//     try {
//       await AsyncStorage.setItem('note', 'Todays task');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const get = async () => {
//     try {
//       const value = await AsyncStorage.getItem('note');
//       if (value != null) {
//         setData(value);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.textStyle}>{data}</Text>

//       <View style={styles.button}>
//         <Button title={'add'} onPress={add}></Button>{' '}
//       </View>

//       <View style={styles.button}>
//         <Button title={'get'} onPress={get}></Button>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   textStyle: {
//     fontSize: 40,
//     marginBottom: 30
//   },
//   button: {
//     margin: 20,
//     width: 250
//   },
// });


import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorage} from 'react-native'

export default function App(){
  const [data,setData] =useState("")
  const add= async()=>{
    try {
      await AsyncStorage.setItem('note',"Todays task")
    } catch (error) {
      console.error(error);
    }
  }

  const get= async()=>{
    try {
      const value = await AsyncStorage.getItem('note');
      if(value!= null){
        setData(value);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.textStyle}>
       {data}
      </Text>
      <View style={styles.button}>
        <Button title={"add"} onPress={add}></Button>
      </View>
      <View style={styles.button}>
        <Button title={"get"} onPress={get}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  textStyle:{
    fontSize:40,
    marginBottom:30
  },
  button:{
    margin:20,
    width:250
  }
})