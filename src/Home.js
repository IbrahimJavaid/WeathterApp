import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar
} from "react-native";
import React, { useState } from "react";
import { deviceHeight, deviceWidht } from "./Dimensions";
import Icon from "react-native-vector-icons/Ionicons";
import Cards from "./Cards";


const Home = (props) => {
  const [city, setCity] = useState("");

  const cities = [
    {
      name: "New Delhi",
      image: require("../assets/images/image3.jpg"),
    },
    {
      name: "New York",
      image: require("../assets/images/image4.jpg"),
    },
    {
      name: "London",
      image: require("../assets/images/image5.jpg"),
    },
    {
      name: "San Francisco",
      image: require("../assets/images/image6.jpg"),
    },
    {
      name: "New Jersey",
      image: require("../assets/images/image7.jpg"),
    },
  ];
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/image2.jpg")}
        style={{ height: deviceHeight, width: deviceWidht }}
        imageStyle={{ opacity: 0.6, backgroundColor: "black" }}
      />
      <View
        style={{
          position: "absolute",
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: deviceWidht - 20,
          }}
        >
          <Icon name="menu" size={46} color="white" />
          <Image
            source={require("../assets/images/user.jpg")}
            style={{ height: 46, width: 46, borderRadius: 50 }}
          />
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 100 }}>
          <Text style={{ fontSize: 40, color: "white" }}>Hello Ibee.</Text>
          <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
            Search the City by the name
          </Text>
          <View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "white",
                marginTop: 10,
                paddingHorizontal: 10,
              }}
              onPress={() => props.navigation.navigate("Details",{name:city})}
            >
              <TextInput
                value={city}
                onChangeText={(val) => setCity(val)}
                placeholder="Search City"
                placeholderTextColor="white"
                style={{ paddingHorizontal: 10, color: "white", fontSize: 16 }}
              />
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 25,
              paddingHorizontal: 10,
              marginTop: 220,
              marginBottom: 20,
            }}
          >
            My location
          </Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({ item }) => (
              <Cards name={item.name} image={item.image} navigation={props.navigation}/>
            )}
          />
        </View>
      </View>
      <StatusBar/>
    </View>
  );
};

export default Home;
