import { useContext } from "react";
import { Text, View, Button } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";

import Ionicons from "@expo/vector-icons/Ionicons";

import ExercisesNavigator from "./exercices.navigator";

function SettingsScreen() {
  const { setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
      <Button onPress={signOutHandler}>Encerrar sessão</Button>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          flex: 0.08,
          backgroundColor: "#171717",
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          color: "#FFFFFF",
          fontWeight: "bold",
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={ExercisesNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name={"fitness"} size={32} color={"#FFFFFF"} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name={"settings"} size={32} color={"#FFFFFF"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
