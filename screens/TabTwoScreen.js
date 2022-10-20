import { Button, StyleSheet, ActivityIndicator } from "react-native";

import { Text, View } from "../components/Themed";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import { useEffect, useState } from "react";

const LeftContent = (props) => <Avatar.Icon {...props} icon="image" />;
const lock = (props) => <Avatar.Icon onC {...props} icon="lock" />;
export default function TabTwoScreen({ navigation, route }) {
  const auth = route.params.AuthDetails;
  const [getApiData, setGetApiData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getDataFromApi();
  }, []);
  const getDataFromApi = () => {
    fetch(
      "https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json"
    )
      .then((response) => response.json())
      .then((json) => setGetApiData(json))
      .catch((error) => console.error(error))
      .finally(() => console.log("error"));
  };
  return (
    <View style={{ flexDirection: "column", flex: 6 }}>
      <View
        style={{
          marginTop: 40,
          padding: 10,
          flexDirection: "row",
          backgroundColor: "black",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ flex: 1, fontSize: 16, color: "white" }}>
          {route.name}
        </Text>
        <Text style={{ fontSize: 16, color: "white" }}>{auth.userName}</Text>

        <Text
          style={{ color: "red", marginLeft: 10 }}
          onPress={() => navigation.navigate("Root")}
        >
          Login Out
        </Text>
      </View>
      {/* {loading ? (
        <ActivityIndicator size="large" />
      ) : ( */}
      <View>
        {getApiData?.articles.map((item, index) => {
          return (
            <Card key={item.id}>
              <Card.Title title={item?.title} left={LeftContent} />

              <Card.Cover source={{ uri: `https://picsum.photos/${index} ` }} />
            </Card>
          );
        })}
      </View>
      {/* )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",

    justifyContent: "center",
  },
  textInput: {
    fontSize: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
