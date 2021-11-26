import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Alert,
  TouchableOpacity
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";


let customFonts = {
  "Comic-sans": require("../assets/fonts/comici.ttf"),
};
export default class Entertainment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
   // Alert.alert(this.state.fontsLoaded);
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style = {styles.appTitleTextContainer}>
          <Text style = {styles.appTitleText}>Entertainment</Text>
          </View>
          <TouchableOpacity styles = {styles.cardContainer}>
            <Image source = {require('../assets/entertainment1.jpg')}></Image>
          </TouchableOpacity>
          <Text style = {styles.newsTitle}>
            Spiderman No Way Home Rumors
          </Text>
          <TouchableOpacity style = {styles.cardContainer}>
            <Image source = {require('../assets/entertainment2.png')}></Image>
          </TouchableOpacity>
          <Text style = {styles.newsTitle}>
            Marvel Eternals Rumors
          </Text>
        </View>
      );
    }
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
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
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
