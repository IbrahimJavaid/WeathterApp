import { View, Text, ImageBackground, Image, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { deviceHeight, deviceWidht } from "./Dimensions";
import Icon from "react-native-vector-icons/Ionicons";
import { API_KEY } from "./Constant";

export default function Details(props) {
  const [data, setData] = useState();
  const { name } = props.route.params;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  const Data = ({ title, value }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "gray", fontSize: 22 }}>{title}</Text>
        <Text style={{ color: "white", fontSize: 22 }}>{value}</Text>
      </View>
    );
  };

  return (
    <View>
      <ImageBackground
        source={require("../assets/images/image1.jpg")}
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
        {data ? (
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: deviceHeight - 100,
            }}
          >
            <View>
              <Text style={{ fontSize: 40, color: "white" }}>{name}</Text>
              <Text style={{ fontSize: 22, color: "white",textAlign:'center' }}>
                {data["weather"][0]["main"]}
              </Text>
            </View>
            <Text style={{ fontSize: 64, color: "white" }}>
              {(data["main"]["temp"] - 273).toFixed(2)}&deg; C
            </Text>
            <View>
              <Text style={{ color: "white", fontSize: 22,marginBottom:16 }}>
                Weathe Details
              </Text>
              <View style={{ width: deviceWidht - 60 }}>
                <Data value={data["wind"]["speed"]} title="Wind" />
                <Data value={data["main"]["pressure"]} title="Pressure" />
                <Data value={`${data["main"]["humidity"]}%`} title="Humidity" />
                <Data value={data["visibility"]} title="Visibility" />
              </View>
            </View>
          </View>
        ) : null}
      </View>

      {/* <StatusBar /> */}
    </View>
  );
}
