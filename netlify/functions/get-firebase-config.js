// Netlify Function to securely provide Firebase configuration
// This keeps your API keys private on the server side

exports.handler = async (event, context) => {
  // Enable CORS for browser requests
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Get Firebase config from environment variables
    const firebaseConfig = {
      apiKey: process.env.VITE_FIREBASE_API_KEY,
      authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.VITE_FIREBASE_APP_ID,
      measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID
    };

    // Also return collection names
    const collections = {
      roadmapSteps: "roadmapSteps",
      toolkitItems: "toolkitItems",
      lessons: "lessons",
      detailedLessons: "detailedLessons"
    };

    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firebaseConfig,
        collections,
        firebaseRulesUrl: `https://console.firebase.google.com/project/${process.env.VITE_FIREBASE_PROJECT_ID}/firestore/rules`
      })
    };

  } catch (error) {
    console.error('Error in get-firebase-config:', error);
    
    return {
      statusCode: 500,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        error: 'Failed to load Firebase configuration',
        message: error.message
      })
    };
  }
};
