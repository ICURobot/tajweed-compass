# 🚀 Firebase Content Manager Setup

## **🎯 What This Gives You:**

Direct control over your Tajweed Compass content from the command line! No more manual Firebase Console editing.

## **📋 Setup Steps:**

### **1. Install Node.js (if you don't have it):**
- Download from [nodejs.org](https://nodejs.org/)
- Install the LTS version

### **2. Install Dependencies:**
```bash
npm install
```

### **3. Test the Connection:**
```bash
node firebase-manager.js list-lessons
```

## **🔥 Available Commands:**

### **📚 Lesson Management:**
```bash
# List all lessons
node firebase-manager.js list-lessons

# Update a lesson title
node firebase-manager.js update-lesson step1_foundation title "New Title"

# Update lesson content
node firebase-manager.js update-lesson step1_foundation content "<h1>New Content</h1>"

# Add a new lesson
node firebase-manager.js add-lesson new_lesson "Lesson Title" "Lesson content here"

# Delete a lesson
node firebase-manager.js delete-lesson lesson_id
```

### **🗺️ Roadmap Management:**
```bash
# List all roadmap steps
node firebase-manager.js list-roadmap

# Update a roadmap step
node firebase-manager.js update-roadmap step1 title "New Step Title"
node firebase-manager.js update-roadmap step1 description "New description"
```

## **💡 Example Usage:**

### **Change a Lesson Title:**
```bash
node firebase-manager.js update-lesson step1_foundation title "Complete Foundation Guide"
```

### **Update Lesson Content:**
```bash
node firebase-manager.js update-lesson step1_foundation content "<h1>Welcome to Tajweed</h1><p>This is the updated content...</p>"
```

### **Add a New Lesson:**
```bash
node firebase-manager.js add-lesson advanced_rules "Advanced Rules" "<h1>Advanced Tajweed Rules</h1><p>Learn the complex rules...</p>"
```

## **🔒 Security:**

- ✅ **Service account credentials** are embedded in the script
- ✅ **All files are protected** by .gitignore
- ✅ **Never commit** these files to GitHub
- ✅ **Keep credentials secure** on your local machine

## **🚨 Important Notes:**

1. **Never share** the `firebase-manager.js` file
2. **Keep your credentials** secure
3. **Test commands** on small changes first
4. **Backup important content** before major changes

## **🆘 Troubleshooting:**

### **"Module not found" Error:**
```bash
npm install
```

### **"Permission denied" Error:**
Check your Firebase Security Rules allow write access

### **"Document not found" Error:**
Use `list-lessons` or `list-roadmap` to see available IDs

---

**You now have full control over your Tajweed content!** 🎉
