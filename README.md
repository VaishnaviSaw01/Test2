# React Test – Week 2

This repository contains **three independent React mini projects** built using **Vite + React**.  
Each project focuses on a specific concept such as API handling, state management, and dynamic UI updates.

---

## 📁 Project Structure

Test2/
├── problem1/ # Cat Fact Widget
├── problem2/ # GitHub User Search
└── problem3/ # Dynamic Product Dashboard


Each folder is a **separate React application**.

---

## 🐱 Problem 1: Cat Fact Widget

**Description:**  
A simple widget that fetches and displays random cat facts using an external API.

**Features:**
- Fetches data from a public API
- Button to load a new fact without page reload
- Clean and centered UI

**API Used:**  
https://catfact.ninja/fact

---

## 🔍 Problem 2: GitHub User Search

**Description:**  
Search for a GitHub username and display profile details along with the latest repositories.

**Features:**
- Search input with Enter key handling
- Displays avatar, bio, and follower count
- Fetches latest 5 repositories
- Proper 404 error handling

**APIs Used:**
- https://api.github.com/users/{username}
- https://api.github.com/users/{username}/repos

---

## 🛒 Problem 3: Dynamic Product Dashboard

**Description:**  
A product list with cart functionality that updates the total price in real time.

**Features:**
- Product table with Add/Remove cart toggle
- Real-time total price calculation
- UI matched to the provided reference design
- State management using React hooks

---

## 🚀 How to Run Any Project

1. Open terminal and navigate to the project folder:
   ```
   cd problem1   # or problem2 / problem3

2. Install dependencies:
   ```
   npm install

3. Start development server:
   ```
   npm run dev

4. Open browser at:
   ```
   http://localhost:5173

## 🛠️ Technologies Used
    React
    Vite
    JavaScript (ES6+)
    HTML & CSS

## ✅ Status
    All problems are fully implemented and working as per the test instructions.
