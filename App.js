import "react-native-gesture-handler";

import React from "react";

import { AuthProvider } from "./src/contexts/auth";

import Index from "./src/routes/index";

export default function App() {
  return (
    <AuthProvider>
      <Index />
    </AuthProvider>
  );
}
