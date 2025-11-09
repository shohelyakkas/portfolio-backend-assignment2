# Assignment 3 - Submission Instructions

## Part 1: Push Code to GitHub

### Step 1: Check Git Status
```bash
git status
```
This shows all modified and new files.

### Step 2: Stage All Changes
```bash
git add .
```
This stages all changes for commit.

### Step 3: Create a Commit
```bash
git commit -m "Assignment 3: MERN Stack Portfolio with Authentication

- Implemented JWT authentication (signin/signout)
- Created SignUp/SignIn forms with state management
- Added CRUD operations for Projects, Qualifications, Contacts
- Implemented user profile management
- Added protected routes with Admin/User roles
- Created MERN Skeleton UI design
- Integrated frontend with backend APIs

Student: Shohely Akkas
Student ID: 301257632"
```

### Step 4: Push to GitHub
```bash
git push origin main
```

**If you get an error about upstream:**
```bash
git push -u origin main
```

### Step 5: Verify on GitHub
1. Go to your GitHub repository in a browser
2. Check that all files are uploaded
3. Copy the repository URL (e.g., `https://github.com/yourusername/MyPortfolio`)

---

## Part 2: Create Word Document with Snapshots

### What Screenshots to Take:

#### 1. **Home Page / Navigation**
- Take screenshot showing the MERN Skeleton navigation bar
- Show: 🏠 MERN Skeleton, USERS, SIGN UP, SIGN IN

#### 2. **Sign Up Page**
- Screenshot of the Sign Up form
- Fill in: Name, Email, Password
- Show the form before submitting

#### 3. **Sign Up Success Modal**
- Screenshot showing "New Account successfully created" modal
- Show the "SIGN IN" button

#### 4. **Sign In Page**
- Screenshot of the Sign In form
- Show Email and Password fields

#### 5. **Users List Page**
- Click on "USERS" in navigation
- Screenshot showing list of all users with avatars
- Show the arrows (→) next to each user

#### 6. **User Profile Page** (After Signin)
- Screenshot showing:
  - User avatar
  - Name and email
  - Joined date
  - Edit (✏️) and Delete (🗑️) buttons

#### 7. **Edit Profile Page**
- Click the pencil icon
- Screenshot showing the edit form
- Show Name, Email (read-only), Password fields

#### 8. **Delete Account Confirmation**
- Click the trash icon
- Screenshot showing "Delete Account" modal
- Show "CANCEL" and "CONFIRM" buttons

#### 9. **Admin Panel** (If logged in as admin)
- Screenshot showing Admin Panel tabs
- Show: Contacts, Projects, Qualifications tabs
- Show the data table with Delete buttons

#### 10. **Contact Form**
- Screenshot of contact form
- Show: Name, Email, Message fields

#### 11. **Project Form**
- Screenshot of project creation form
- Show all fields: Title, Description, Technologies, etc.

#### 12. **Education/Qualification Form**
- Screenshot of education form
- Show: Institution, Degree, Field of Study, etc.

#### 13. **MongoDB Database**
- Open MongoDB Compass or MongoDB Atlas
- Screenshot showing:
  - Users collection with data
  - Projects collection
  - Qualifications collection
  - Contacts collection

#### 14. **Backend Running**
- Screenshot of terminal showing:
  ```
  Server running at http://localhost:3000
  Connected to the database!
  ```

#### 15. **Frontend Running**
- Screenshot of terminal showing:
  ```
  VITE v7.1.5 ready in XXX ms
  Local: http://localhost:5173/
  ```

---

### Word Document Template Structure:

```
COMP229 - Assignment 3
Portfolio Application with MERN Stack

Student Name: Shohely Akkas
Student ID: 301257632
Date: [Current Date]

GitHub Repository: [Your GitHub URL]

-----------------------------------
SCREENSHOTS
-----------------------------------

1. HOME PAGE - NAVIGATION BAR
[Paste screenshot here]
Description: Shows MERN Skeleton navigation with links

2. SIGN UP FORM
[Paste screenshot here]
Description: User registration form with Name, Email, Password

3. SIGN UP SUCCESS MODAL
[Paste screenshot here]
Description: Confirmation modal after successful signup

4. SIGN IN FORM
[Paste screenshot here]
Description: User login form

5. USERS LIST
[Paste screenshot here]
Description: List of all registered users

6. USER PROFILE
[Paste screenshot here]
Description: Profile page showing user details and actions

7. EDIT PROFILE
[Paste screenshot here]
Description: Form to edit user information

8. DELETE ACCOUNT CONFIRMATION
[Paste screenshot here]
Description: Modal confirming account deletion

9. ADMIN PANEL
[Paste screenshot here]
Description: Admin dashboard with CRUD operations

10. CONTACT FORM
[Paste screenshot here]
Description: Contact message submission form

11. PROJECT FORM
[Paste screenshot here]
Description: Form to add new projects

12. EDUCATION FORM
[Paste screenshot here]
Description: Form to add qualifications

13. MONGODB - USERS COLLECTION
[Paste screenshot here]
Description: Database showing user documents

14. MONGODB - PROJECTS COLLECTION
[Paste screenshot here]
Description: Database showing project documents

15. BACKEND TERMINAL
[Paste screenshot here]
Description: Server running and connected to database

16. FRONTEND TERMINAL
[Paste screenshot here]
Description: Vite development server running

-----------------------------------
FEATURES IMPLEMENTED
-----------------------------------

✅ Backend Authentication
   - POST /auth/signin
   - GET /auth/signout
   - JWT token implementation
   - Protected routes

✅ Frontend Forms
   - SignUp form with state management
   - SignIn form with state management
   - Contact form
   - Project form
   - Education/Qualification form

✅ CRUD Operations
   - Contacts: Create, Read, Delete
   - Projects: Create, Read, Update, Delete
   - Qualifications: Create, Read, Update, Delete
   - Users: Create, Read, Update, Delete

✅ Authentication & Authorization
   - User and Admin roles
   - Protected routes
   - Role-based access control
   - Admin can perform CRUD
   - Users can only view/read

✅ API Integration
   - Axios for HTTP requests
   - JWT token in headers
   - Error handling
   - Success/error messages

✅ Additional Features
   - MERN Skeleton UI design
   - User profile management
   - Users list page
   - Modal confirmations
   - Responsive design

-----------------------------------
END OF DOCUMENT
-----------------------------------
```

---

## How to Create the Word Document:

### Step 1: Open Microsoft Word
- Create a new blank document

### Step 2: Add Title and Header Information
```
COMP229 - Assignment 3
Portfolio Application with MERN Stack

Student Name: Shohely Akkas
Student ID: 301257632
Date: November 9, 2024

GitHub Repository: [Paste your GitHub URL here]
```

### Step 3: Take Screenshots
1. **Windows**: Press `Windows + Shift + S` to open Snipping Tool
2. **Mac**: Press `Cmd + Shift + 4`
3. Select the area you want to capture
4. Paste into Word document (Ctrl+V or Cmd+V)

### Step 4: Label Each Screenshot
- Add a heading above each screenshot
- Add a brief description below

### Step 5: Save the Document
- Save as: `Assignment3_ShohelyAkkas_301257632.docx`

---

## Final Checklist Before Submission:

### ✅ GitHub
- [ ] All code pushed to GitHub
- [ ] Repository is public or shared with instructor
- [ ] README.md updated (optional but good)
- [ ] No node_modules in repository (.gitignore working)

### ✅ Word Document
- [ ] All 15-16 screenshots included
- [ ] Each screenshot labeled and described
- [ ] GitHub link included
- [ ] Student name and ID on document
- [ ] Document saved with proper naming

### ✅ Zip File
- [ ] Create a zip file of the project folder
- [ ] **EXCLUDE node_modules folder** (important!)
- [ ] Name: `Assignment3_ShohelyAkkas_301257632.zip`

### How to Create Zip (Excluding node_modules):
1. Create a new folder: `Assignment3_Submit`
2. Copy everything EXCEPT `node_modules` and `client/node_modules`
3. Right-click the folder → Send to → Compressed (zipped) folder

**Or use command line:**
```bash
# Create a zip excluding node_modules
git archive -o Assignment3_ShohelyAkkas_301257632.zip HEAD
```

---

## Submission Files:

1. **Assignment3_ShohelyAkkas_301257632.zip** (Project files without node_modules)
2. **Assignment3_ShohelyAkkas_301257632.docx** (Word document with screenshots)
3. **GitHub Repository Link** (in the Word document and submission form)

---

## Tips:

1. **Test everything before taking screenshots**
   - Make sure app is running
   - Create test users and data
   - Login as both regular user and admin

2. **Create an Admin User in MongoDB**
   ```javascript
   {
     "name": "Admin User",
     "email": "admin@example.com",
     "password": "admin123",  // Will be hashed
     "role": "admin"
   }
   ```

3. **Make screenshots clear**
   - Use full screen
   - Zoom if needed
   - Show relevant parts of the interface

4. **Double-check everything**
   - GitHub link works
   - All screenshots are clear
   - Zip file size is reasonable (should be < 10MB without node_modules)

---

Good luck with your submission! 🎉
