import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";

const CityDetails = () => {
  const searchParams = useLocalSearchParams();

  console.log(searchParams);

  return <View />;
};

export default CityDetails;
