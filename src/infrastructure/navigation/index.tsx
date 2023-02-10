import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app.navigator";
import AccountNavigator from "./authentication.navigator";

import { UserContext } from "../../contexts/user.context";

const Navigator = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <NavigationContainer>
      {currentUser ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
