import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../store/auth-context";

const DATABASE_URL = process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL;

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");
  const authContext = useContext(AuthContext);
  const authToken = authContext.token;
  useEffect(() => {
    axios
      .get(`${DATABASE_URL}/message.json?auth=${authToken}`)
      .then((response) => {
        setFetchedMessage(response.data);
      });
  }, [authToken]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
