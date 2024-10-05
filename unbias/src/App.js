import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from "./MyNavbar";
import Home from './Home';
import Login from './Login';
import MyFooter from "./Footer";
import "./index.css";
import { ClerkProvider } from '@clerk/clerk-react';
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import './Login.css';

// Clerk publishable key
const PUBLISHABLE_KEY = "pk_test_a2Vlbi1tYXJsaW4tMzQuY2xlcmsuYWNjb3VudHMuZGV2JA"

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

function App() {
  return (
    <div className="App">
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <header>

      {/* Display welcome page here when user clicks on Unbias.com */}
      <SignedOut>  
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
      </SignedOut>

      {/* The user will be taken to the main page after they sign-in */}
      <SignedIn>
        <UserButton />
        <BrowserRouter>
          <MyNavbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
          </Routes>
          <MyFooter />
        </BrowserRouter>
      </SignedIn>
      </header>
      </ClerkProvider>
    </div>
  );
}

export default App;
