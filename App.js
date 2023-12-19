import {View, Text, StyleSheet} from "react-native" 

export default function App(){
  return (
    <View style = {styles.container}>
      <View style = {styles.darkmode}>
        <Text style = {styles.darkmodeText}>Style Inheritance<Text style = {styles.boldText}> In Bold</Text></Text>
      </View>
     <View style = {[styles.box,styles.bluebg,styles.iosBoxShadow]}>
      <Text style = {{borderRadius:2, backgroundColor:'white'}}>Blue Box</Text> 
      {/* borderRadius to text component apply only to Android */}
     </View>
     <View style = {[styles.box,styles.greenbg,styles.androidBoxShadow]}>
      <Text>Green Box</Text>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex : 1, backgroundColor: "plum", padding:60},
  darkmode: {
    backgroundColor: "black",
  },
  darkmodeText: {
    color: "white",
  },
  boldText: {
    fontWeight : "bold",
  },
  box: {
    height: 250,
    width:250,
    //padding:20,
    paddingHorizontal :10,
    paddingVertical:20,
    marginHorizontal:10,
    marginVertical:10,
    borderWidth:2,
    borderColor:'black',
    borderRadius:5,
   // borderStyle: "dashed", // Solid is default
  },
  bluebg: {
    backgroundColor:"purple",
   
  },
  greenbg: {
    backgroundColor:"green",
   
  },
  iosBoxShadow: {
    shadowColor : "#333333",
    shadowOffset:{
      height: 6,
      width: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius:4,
  },
  androidBoxShadow: {

  elevation:20,
  }
})