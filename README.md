# 🧭 Tajweed Compass

A beautiful, family-oriented web application for learning the rules of Tajweed (Quran recitation) with a step-by-step roadmap and comprehensive toolkit.

## 🚀 Features

- **9-Step Learning Roadmap** - Progressive learning structure
- **Interactive Lessons** - Modal popups and detailed pages
- **The Toolkit** - Quick reference materials and cheatsheets
- **Responsive Design** - Works on all devices
- **Firebase Integration** - Real-time content management
- **Modern UI** - Built with React and Tailwind CSS

## 🔐 Security Setup

This app uses a secure configuration system to protect your Firebase API keys.

### **Files Created:**
- `config.js` - **SECRET** - Contains your real Firebase config (never commit this!)
- `config.example.js` - **SAFE** - Template showing the structure
- `.gitignore` - Ensures sensitive files are never committed

## 📋 Setup Instructions

### **1. Get Your Firebase Configuration**

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project (the one with your Tajweed content)
3. Click the gear icon ⚙️ → "Project settings"
4. Scroll to "Your apps" section
5. Click on your web app (or create one)
6. Copy the configuration object

### **2. Configure Your App**

1. **Copy the example config:**
   ```bash
   cp config.example.js config.js
   ```

2. **Edit `config.js`** with your real Firebase values:
   ```javascript
   export const firebaseConfig = {
       apiKey: "AIzaSy...", // Your actual API key
       authDomain: "your-project.firebaseapp.com",
       projectId: "your-project-id",
       storageBucket: "your-project.appspot.com",
       messagingSenderId: "123456789",
       appId: "1:123456789:web:abcdef123456",
       measurementId: "G-XXXXXXXXXX"
   };
   ```

3. **Customize collection names** if they differ from defaults:
   ```javascript
   export const collections = {
       roadmapSteps: "your_roadmap_collection",
       toolkitItems: "your_toolkit_collection",
       lessons: "your_lessons_collection",
       detailedLessons: "your_detailed_lessons_collection"
   };
   ```

### **3. Firebase Security Rules**

Set up proper security rules in your Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all users (for public content)
    match /{document=**} {
      allow read: if true;
      allow write: if false; // No one can write
    }
  }
}
```

### **4. Run Locally**

```bash
# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

## 🗂️ Firebase Collections Structure

Your Firebase should have these collections:

### **`roadmapSteps`**
```javascript
{
  id: "step1",
  title: "Foundation",
  description: "Learn the basics of Tajweed",
  order: 1,
  lessons: ["Lesson 1", "Lesson 2", "Lesson 3"]
}
```

### **`toolkitItems`**
```javascript
{
  id: "letters",
  title: "Arabic Letters",
  type: "letterChart",
  content: "ا,ب,ت,ث,ج,ح,خ",
  helperText: "These are the basic letters",
  order: 1
}
```

### **`lessons`**
```javascript
{
  id: "step1_foundation",
  title: "Foundation Lesson",
  content: "<h1>Welcome to Tajweed</h1><p>Start here...</p>"
}
```

### **`detailedLessons`**
```javascript
{
  id: "step1_foundation_details",
  title: "Complete Foundation Guide",
  content: "<h1>Complete Foundation</h1><p>Full lesson content...</p>"
}
```

## 🔧 Development

### **Adding New Content**
1. Add data to your Firebase collections
2. The app automatically fetches and displays new content
3. No code changes needed for content updates

### **Customizing the App**
- **Styling**: Modify Tailwind classes in the HTML
- **Components**: Edit the React components in the script section
- **Firebase**: Update the `firebaseUtils` functions

## 🚨 Important Security Notes

- ✅ **`config.js` is in `.gitignore`** - Never commit this file
- ✅ **Firebase API keys are public by design** - Security comes from Rules
- ✅ **Set up proper Firebase Security Rules** - This is where security happens
- ✅ **Monitor Firebase usage** - Check your console regularly

## 🆘 Troubleshooting

### **"Firebase not initialized" Error**
- Check your `config.js` file has correct values
- Verify your Firebase project is active
- Check browser console for specific error messages

### **"Collection not found" Error**
- Verify collection names in Firebase match your `config.js`
- Check Firebase Security Rules allow read access
- Ensure collections have documents

### **Content Not Loading**
- Check browser console for Firebase errors
- Verify your Firebase collections have data
- Check network tab for failed requests

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (not supported)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is dedicated to making Tajweed education accessible to every family.

---

**Need Help?** Check the Firebase Console for detailed error logs and usage analytics.
