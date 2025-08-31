// Example Firebase Configuration
// This file shows the structure without real values
// Copy this to config.js and fill in your actual Firebase details

export const firebaseConfig = {
    apiKey: "YOUR_ACTUAL_API_KEY_HERE",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
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
