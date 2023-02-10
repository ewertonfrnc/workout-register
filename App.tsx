import React from "react";
import { NativeBaseProvider } from "native-base";

import { SafeAreaContainer } from "./src/components/utility/safe-area.component";

import { UserProvider } from "./src/contexts/user.context";

import Navigator from "./src/infrastructure/navigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <UserProvider>
        <SafeAreaContainer>
          <Navigator />
        </SafeAreaContainer>
      </UserProvider>
    </NativeBaseProvider>
  );
}
