import React, { Component, useState } from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, Image,Button, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isModalVisible: false
    }
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor: "#160D0E"}}>
        <ScrollView style={{flex: 1, backgroundColor: "white", marginHorizontal:5, marginTop: 5, marginBottom:5, borderBottomLeftRadius: 30,borderBottomRightRadius: 30}}>
          <View style={{flexDirection:"row", justifyContent:"space-between", paddingVertical:25, marginHorizontal: 10}}>
            <Icon name="left" size={25}/>
            <View style={{flexDirection:"row"}}>
              <Icon name="search1" size={25} style={{marginRight: 20}}/>
              <Icon name="bells" size={25}/>
            </View>
          </View>
          <Text style={{fontSize: 30, fontWeight: "bold", marginLeft: 15}}>Recipies</Text>
          <View style={{flexDirection: "row", justifyContent: "space-around"}}>
            <View style={{margin: 15,width:70, borderColor: "grey", borderWidth: 1, borderRadius: 40, alignItems: "center"}}>
              <View style={{borderWidth: 1, borderRadius: 30, padding: 8, margin: 10, alignItems:"center", borderColor: "grey"}}><Icon name="find" size={30}/></View>
              <Text style={{fontWeight:"bold", marginBottom: 10}}>All</Text>
            </View>
            <View style={{margin: 15,width:70, borderColor: "grey", borderWidth: 1, borderRadius: 40, alignItems: "center"}}>
              <View style={{borderWidth: 1, borderRadius: 30, padding: 8, margin: 10, alignItems:"center", borderColor: "grey"}}><Icon name="apple1" size={30}/></View>
              <Text style={{fontWeight:"bold", marginBottom: 10}}>Apple</Text>
            </View>
            <View style={{margin: 15,width:70, borderColor: "grey", borderWidth: 1, borderRadius: 40, alignItems: "center"}}>
              <View style={{borderWidth: 1, borderRadius: 30, padding: 8, margin: 10, alignItems:"center"}}><Icon2 name="pizza" size={30}/></View>
              <Text style={{fontWeight:"bold", marginBottom: 10}}>Pizza</Text>
            </View>
            <View style={{margin: 15,width:70, borderColor: "grey", borderWidth: 1, borderRadius: 40, alignItems: "center", backgroundColor: "#E6BC41"}}>
              <View style={{borderWidth: 1, borderRadius: 30, padding: 8, margin: 10, alignItems:"center",borderColor: "grey", backgroundColor: "white"}}><Icon2 name="bread-slice" size={30}/></View>
              <Text style={{fontWeight:"bold", marginBottom: 10}}>Bread</Text>
            </View>
          </View>
          <View style={{margin:10}}>
            <Image source={require("./images/pane.jpg")} style={{width: 300, height:200,alignSelf:"center",borderRadius: 30}}/>
            <Text style={{fontWeight: "bold", fontSize: 30, marginHorizontal: 25}}>Bread</Text>
            <Text style={{fontWeight: "bold", fontSize: 15, marginHorizontal: 25, color: "grey"}}>by Omar Said</Text>
          </View>
        </ScrollView>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent:"space-evenly"}}>
          <Text style={{color:"white", fontWeight: "bold", fontSize: 15}}>Favourite Recipies</Text>
          <TouchableOpacity style={{backgroundColor: "#E6BC41", alignItems: "center", paddingHorizontal: 40, paddingVertical: 14, borderRadius:15, marginVertical: 10, marginLeft: 70}}>
              <Text style={{color: "black", fontWeight: "bold"}}> View </Text>
          </TouchableOpacity>
        </View>
      </View>
      

      // <View style={{flex: 1, backgroundColor: "#E6BC41"}}>
      //   <ImageBackground source={require("./images/spices_hero.jpg")} style={{flex: 1, resizeMode: "cover", justifyContent: "center", margin: 5,}}>
      //     <View style={styles.overlay} pointerEvents="none"/>
      //     <Image source={require("./images/logo.png")} style={{width: 80, height: 80,borderRadius: 40, alignSelf: "center"}}/>
      //     <Text style={{color: "white", fontWeight: "bold", fontSize: 20, textAlign: "center"}}>Hunggie</Text>
      //     <View style={{alignSelf: "center", position: "absolute", bottom: 0}}>
      //       <Text style={{color: "white", fontWeight: "bold", fontSize: 30, textAlign: "center"}}>Learn Amazing{"\n"}Recipies</Text>
      //       <TouchableOpacity onPress={this.toggleModal} style={{backgroundColor: "#E6BC41", alignItems: "center", justifyContent: "space-evenly", padding: 15, marginHorizontal: 27, flexDirection: "row", marginVertical: 30, borderRadius:15}}>
      //         <Text style={{color: "black", fontWeight: "bold"}}> Continue </Text>
      //         <Icon name="doubleright" size={15} color="black" />
      //       </TouchableOpacity>
      //     </View>
      //   </ImageBackground>

      //   <Modal isVisible={this.state.isModalVisible}>
      //     <View style={{height: 300}}>
      //       <Text>Hello!</Text>

      //       <Button title="Hide modal" onPress={this.toggleModal} />
      //     </View>
      //   </Modal>
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)'
  }
})