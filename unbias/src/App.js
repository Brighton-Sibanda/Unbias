import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
  throw new Error("Missing Publishable Key");
}

function App() {
  return (
    <div className="App">
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <BrowserRouter>
          <header>
            <SignedOut>
              <Login />
            </SignedOut>

            <SignedIn>
              <UserButton />
              <MyNavbar />
              <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<Home />} />
              </Routes>
              <MyFooter />
            </SignedIn>
          </header>
        </BrowserRouter>
      </ClerkProvider>
    </div>
  );
}

export default App;
