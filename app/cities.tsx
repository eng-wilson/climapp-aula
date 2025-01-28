import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import citiesData from "../data/cities.json";

const Cities = () => {
  console.log(citiesData);

  return (
    <LinearGradient colors={["#00457d", "#05051f"]} style={style.container}>
      {citiesData.map((city) => (
        <View style={style.listItem}>
          <Text style={style.cityName}>{city.city}</Text>
        </View>
      ))}
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 16,
  },
  listItem: {
    height: 63,
    width: "100%",
    backgroundColor: "rgba(255,255,255, 0.15)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  cityName: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
  },
});

export default Cities;
