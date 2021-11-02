import "react-native-gesture-handler";

import React from "react";

import { AuthProvider } from "./src/components/contexts/auth";

import Index from "./src/components/routes/index";

export default function App() {
  return (
    <AuthProvider>
      <Index />
    </AuthProvider>
  );
}
