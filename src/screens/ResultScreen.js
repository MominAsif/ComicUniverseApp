import React from "react";
import { Text, StyleSheet, View, Button, Image, FlatList, TouchableOpacity, ImageBackground} from "react-native";
import bg from '../../assets/comicbg.gif'


const ResultScreen = (props) => {
  const results = props.navigation.getParam("results");
  const name = props.navigation.getParam("name")

  return (
    <View style = {styles.root}>

      <ImageBackground
      imageStyle={styles.backgroundImage}
      source= {bg}
      resizeMode='cover'
    />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style = {styles.text} >Name: {item.name}</Text>
            <TouchableOpacity activeOpacity={0.5} onPress = {function(){props.navigation.navigate("DetailScreen", {item: item})}}>
            <Image source={{ uri: item.image.original_url }}
            style={styles.image}  />
           </TouchableOpacity>
          </View>
        )}
      />
      
    </View>
  );
  
};


const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  image: {
    height: 300,
    width: 390,
    justifyContent: "center",
    resizeMode: "contain"
  },
  backgroundImage: {
    flex: 1, 
    width: 500, 
    height: 900, 
    resizeMode: 'cover',
  },
  text:{
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    padding: 10
  },
});

export default ResultScreen;