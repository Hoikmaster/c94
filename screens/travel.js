import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class Travel extends Component {
  render() {
    return (
      <View style={styles.container}>
       <SafeAreaView style={styles.droidSafeArea} />
       <View style = {styles.appTitleTextContainer}>
        <Text style = {styles.appTitleText}>Travel</Text>
       </View>
        <TouchableOpacity style={styles.cardContainer}>
          <Image source={require("../assets/travel1.jpg")} style={styles.iconImage}></Image>
          <Text style = {styles.newsTitle}>
            Rising Airline Prices
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <Image source={require("../assets/travel2.jpg")} style={styles.iconImage}></Image>
          <Text style = {styles.newsTitle}>
            Top 10 Places to Visit in Texas Now!!!
          </Text>
        </TouchableOpacity>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.07,
    justifyContent: "center",
    flexDirection: "row"
  },
  appTitleText: {
    color: "green",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.93,
    justifyContent : 'center',
    alignItems : 'center'
  },
  newsTitle :{
    color : 'orange',
    flexDirection : 'row',
    fontWeight : "bold",
    fontSize : RFValue(15),
  }
});
