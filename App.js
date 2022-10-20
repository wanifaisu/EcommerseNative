import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ToastProvider } from "react-native-toast-notifications";
import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import { useColorScheme } from "react-native";

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ToastProvider successColor="#5bbb4f">
          <Navigation colorScheme={colorScheme} />
        </ToastProvider>
        {/* <StatusBar /> */}
      </SafeAreaProvider>
    );
  }
}
