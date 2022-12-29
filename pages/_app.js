import Footer from "../Components/Header/Footer";
import "../styles/globals.css";
import * as React from "react";
import AuthProvider from "../Context/AuthProvider";
import { NextUIProvider } from "@nextui-org/react";
import Header from "../Components/Header/Header";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}
