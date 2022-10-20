import {
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import { Text, View } from "../components/Themed";
import { LogoImag } from "../assets/images/icon3.png";
import { useState } from "react";
import { useToast } from "react-native-toast-notifications";
const initialAuth = {
  userName: "",
  password: "",
};
export default function TabOneScreen({ navigation }) {
  const toast = useToast();
  const [loginData, setLoginData] = useState(initialAuth);
  const submitAuth = () => {
    if (loginData.userName === "") {
      getSnackbar("Username is required", "warning");
    } else if (loginData.password === "") {
      getSnackbar("Password is required", "warning");
    } else {
      navigation.navigate("Home", { AuthDetails: loginData });
    }
  };
  const getSnackbar = (message, color) => {
    toast.hideAll();
    toast.hideAll();
    toast.show(message, {
      type: color,
      placement: "bottom",
      duration: 4000,
      offset: 30,
      animationType: "slide-in",
    });
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          marginBottom: 100,
        }}
      >
        <Text style={styles.faisal_log}>Ecommerse</Text>
      </View>

      {/* <Image style={styles.image} source="../assets/images/splash.png" /> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="User Name."
          placeholderTextColor="#003f5c"
          onChangeText={(e) => setLoginData({ ...loginData, userName: e })}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          onChangeText={(e) => setLoginData({ ...loginData, password: e })}
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          submitAuth();
        }}
        style={styles.loginBtn}
      >
        <Text
          // onPress={() => navigation.navigate("Home")}
          style={styles.loginText}
        >
          LOGIN
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 100,
  },

  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "70%",
    borderColor: "gray",
    borderWidth: 1,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  faisal_log: {
    fontSize: 40,
    padding: 10,
    fontWeight: "bold",
    color: "skyblue",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
