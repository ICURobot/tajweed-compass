# 🚀 Deployment Guide

## **🔐 Security First - Never Commit API Keys!**

Your Firebase API keys are now completely protected. Here's how to deploy safely:

## **📋 Pre-Deployment Steps:**

### **1. Customize Your Production Config:**
Edit `config.production.js` and replace the placeholders with your real values:

```javascript
export const firebaseConfig = {
    apiKey: "AIzaSyAUrT-0tL_wj275YGQyRhyGYmWWTGs0BSM", // Your real API key
    authDomain: "tajweed-compass.firebaseapp.com", // Your real domain
    projectId: "tajweed-compass", // Your real project ID
    storageBucket: "tajweed-compass.appspot.com", // Your real storage bucket
    messagingSenderId: "81035085376", // Your real sender ID
    appId: "1:81035085376:web:c03f7018074f95124981a5", // Your real app ID
    measurementId: "G-MN26V7G16H" // Your real measurement ID
};
```

### **2. Verify .gitignore Protection:**
Make sure these files are NEVER committed:
- ✅ `config.js` (local development)
- ✅ `.env` (environment variables)
- ✅ `.env.local` (local environment)
- ✅ `.env.production` (production environment)

## **🚀 Deployment Options:**

### **Option A: Manual Deployment (Recommended)**
1. **Customize** `config.production.js` with real values
2. **Upload files** to your hosting service
3. **Never commit** the customized version to GitHub

### **Option B: Build Process**
1. **Keep** `config.production.js` as template
2. **Use build tools** to inject real values during deployment
3. **Deploy** the built version

### **Option C: Environment Variables (Advanced)**
1. **Set environment variables** on your hosting service
2. **Modify code** to read from environment
3. **Deploy** with secure configuration

## **🔧 Current Setup:**

- ✅ **`config.js`** - Local development (protected by .gitignore)
- ✅ **`config.production.js`** - Deployment template (safe to commit)
- ✅ **`.gitignore`** - Protects all sensitive files
- ✅ **`index.html`** - Imports from production config

## **📝 Deployment Checklist:**

- [ ] Customize `config.production.js` with real Firebase values
- [ ] Test locally to ensure Firebase connects
- [ ] Upload files to hosting service
- [ ] Verify lessons load in production
- [ ] **NEVER commit** the customized config file

## **🆘 Troubleshooting:**

### **"Firebase not initialized" Error:**
- Check `config.production.js` has real values
- Verify Firebase project is active
- Check browser console for specific errors

### **"Lessons not loading" Error:**
- Verify Firebase connection works
- Check Firebase collections have data
- Verify Firebase Security Rules allow read access

## **💡 Pro Tips:**

1. **Keep a backup** of your real Firebase config locally
2. **Use different Firebase projects** for development vs production
3. **Monitor Firebase usage** in your console
4. **Set up proper Security Rules** in Firebase

---

**Remember**: Your API keys are safe as long as you never commit the customized `config.production.js` file to GitHub!
