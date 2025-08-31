// Firebase Configuration Example
// Copy this file to config.js and fill in your real values
// IMPORTANT: config.js is in .gitignore to keep your API keys secret

export const firebaseConfig = {
    // Replace these with your actual Firebase project values
    apiKey: "YOUR_API_KEY_HERE", // Get this from Firebase Console > Project Settings > General > Your Apps
    authDomain: "your-project.firebaseapp.com", // Your project ID + .firebaseapp.com
    projectId: "your-project-id", // Your Firebase project ID
    storageBucket: "your-project.appspot.com", // Your project ID + .appspot.com
    messagingSenderId: "123456789", // Your Firebase messaging sender ID
    appId: "1:123456789:web:abcdef123456", // Your Firebase app ID
    measurementId: "G-XXXXXXXXXX" // Your Firebase measurement ID
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
