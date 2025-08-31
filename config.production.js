// Production Firebase Configuration
// This file reads from Netlify environment variables for security
// Set these in your Netlify dashboard under Site settings > Environment variables

// For Netlify, you'll need to set these environment variables:
// VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, etc.

export const firebaseConfig = {
    apiKey: "YOUR_API_KEY", // Set VITE_FIREBASE_API_KEY in Netlify
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com", // Set VITE_FIREBASE_AUTH_DOMAIN in Netlify
    projectId: "YOUR_PROJECT_ID", // Set VITE_FIREBASE_PROJECT_ID in Netlify
    storageBucket: "YOUR_PROJECT_ID.appspot.com", // Set VITE_FIREBASE_STORAGE_BUCKET in Netlify
    messagingSenderId: "YOUR_SENDER_ID", // Set VITE_FIREBASE_MESSAGING_SENDER_ID in Netlify
    appId: "YOUR_APP_ID", // Set VITE_FIREBASE_APP_ID in Netlify
    measurementId: "YOUR_MEASUREMENT_ID" // Set VITE_FIREBASE_MEASUREMENT_ID in Netlify
};

// Firebase Security Rules URL (for reference)
export const firebaseRulesUrl = "https://console.firebase.google.com/project/YOUR_PROJECT_ID/firestore/rules";

// Collection names (customize these to match your Firebase structure)
export const collections = {
    roadmapSteps: "roadmapSteps",
    toolkitItems: "toolkitItems", 
    lessons: "lessons",
    detailedLessons: "detailedLessons"
};
