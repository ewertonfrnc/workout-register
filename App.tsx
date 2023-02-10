import React from "react";
import { NativeBaseProvider } from "native-base";

import { SafeAreaContainer } from "./src/components/utility/safe-area.component";

import Navigator from "./src/infrastructure/navigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaContainer>
        <Navigator />
      </SafeAreaContainer>
    </NativeBaseProvider>
  );
}
