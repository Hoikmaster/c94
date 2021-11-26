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

export default class RecentStories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style = {styles.appTitleTextContainer}>
        <Text style = {styles.appTitleText}>Recent Stories</Text>
        </View>
        <TouchableOpacity style = {styles.cardContainer}>
          <Image source={require("../assets/recentStories1.jpg")}></Image>
          <Text style = {styles.newsTitle}>
            The Coffee Wars of Europe
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.cardContainer}>
          <Image source={require("../assets/recentStories2.jpg")}></Image>
          <Text style = {styles.newsTitle}>
            The Global Chip Shortage
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row",
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
  },
  cardContainer: {
    flex: 0.93,
    justifyContent : 'center',
    alignItems : 'center'
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },
  newsTitle :{
    color : 'orange',
    flexDirection : 'row',
    fontWeight : "bold",
    fontSize : RFValue(15),
  }
});
