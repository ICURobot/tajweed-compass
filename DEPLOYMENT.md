# 🚀 Deployment Guide

## **🔐 Security First - Never Commit API Keys!**

Your Firebase API keys are now completely protected. Here's how to deploy safely:

## **📋 Pre-Deployment Steps:**

### **1. Customize Your Production Config:**
Edit `config.production.js` and replace the placeholders with your real values:

```javascript
export const firebaseConfig = {
    apiKey: "YOUR_ACTUAL_API_KEY_HERE", // Replace with your real API key
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com", // Replace with your real domain
    projectId: "YOUR_PROJECT_ID", // Replace with your real project ID
    storageBucket: "YOUR_PROJECT_ID.appspot.com", // Replace with your real storage bucket
    messagingSenderId: "YOUR_SENDER_ID", // Replace with your real sender ID
    appId: "YOUR_APP_ID", // Replace with your real app ID
    measurementId: "YOUR_MEASUREMENT_ID" // Replace with your real measurement ID
};
```

### **2. Verify .gitignore Protection:**
Make sure these files are NEVER committed:
- ✅ `config.js` (local development)
- ✅ `.env` (environment variables)
- ✅ `.env.local` (local environment)
- ✅ `.env.production` (production environment)
- ✅ `DEPLOYMENT.md` (contains sensitive examples)

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
