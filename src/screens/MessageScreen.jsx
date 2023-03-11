import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import getMatchedUserInfo from "../firebase/functions/getMatchedUserInfo";
import { UserLoginContex } from "../context/UserDataContext";
import { useRoute } from "@react-navigation/core";
import SenderMessage from "../components/SenderMessage";
import ReceiverMessage from "../components/ReceiverMessage";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import { db } from "../firebase/credentials";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import theme from "../theme";

const { colors } = theme;

export default function MessageScreen() {
  const navigation = useNavigation();
  const { userData } = useContext(UserLoginContex);
  const { params } = useRoute();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const { matchDetails } = params;

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "Matches", matchDetails.id, "Messages"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) =>
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          )
      ),
    [matchDetails, db]
  );

  const sendMessage = () => {
    if (!input.trim()) {
      return;
    }
    addDoc(collection(db, "Matches", matchDetails.id, "Messages"), {
      timestamp: serverTimestamp(),
      userId: userData.id,
      name: userData.userName,
      image: userData.image,
      message: input,
    });
    setInput("");
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 60,
          justifyContent: "center",
          backgroundColor: `${colors.primary}`,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.75,
          shadowRadius: 5,
          elevation: 5,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginLeft: 20,
            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
          <Image
            source={{
              uri: getMatchedUserInfo(matchDetails.users, userData.id).image,
            }}
            style={styles.image}
          />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 24,
              fontWeight: "500",
              color: "#091D5C",
            }}
          >
            {getMatchedUserInfo(matchDetails.users, userData.id).userName}
          </Text>
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList
            data={messages}
            inverted={-1}
            styles={{
              paddingLeft: 6,
              paddingBottom: 50,
            }}
            keyExtractor={(item) => item.id}
            renderItem={({ item: message }) =>
              message.userId === userData.id ? (
                <SenderMessage key={messages.id} message={message} />
              ) : (
                <ReceiverMessage key={messages.id} message={message} />
              )
            }
          />
        </TouchableWithoutFeedback>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Manda tu mensaje..."
            onChangeText={setInput}
            onSubmitEditing={sendMessage}
            value={input}
          />
          <TouchableOpacity
            style={[
              styles.sendButton,
              input.length === 0
                ? styles.disabledSendButton
                : styles.enabledSendButton,
            ]}
            onPress={sendMessage}
            disabled={input.length === 0}
          >
            <Feather
              name="send"
              size={20}
              color={input.length === 0 ? "#FFF" : "#84FFFF"}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginHorizontal: 20,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "white",
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  enabledSendButton: {
    backgroundColor: "#091D5C",
    color: "#091D5C",
  },
  disabledSendButton: {
    backgroundColor: "gray",
    color: "gray",
  },
});
