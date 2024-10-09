import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MyNavbar from "./MyNavbar";
import Home from './Home';
import Login from './Login';
import MyFooter from "./Footer";
import "./index.css";
import { ClerkProvider } from '@clerk/clerk-react';
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import './Login.css';
import About from './About';
import Input from './Input';
import 'bootstrap/dist/css/bootstrap.min.css';


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

					<SignedOut>
						<Login />
					</SignedOut>

					<SignedIn>
						<MyNavbar />
						<Routes>
							<Route path="/" element={<Navigate replace to="/home" />} />
							<Route path="/home" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/input" element={<Input />} />
						</Routes>
						<MyFooter />
					</SignedIn>


				</BrowserRouter>
			</ClerkProvider>
		</div>
	);
}

export default App;
