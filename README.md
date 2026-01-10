# 🏆 AuctionGallery

**AuctionGallery** is a modern, responsive React web application built as a **course assignment**.  
The goal of this project is to demonstrate practical understanding of **React fundamentals**, **component-based architecture**, **state management**, and **responsive UI design**.

Users can browse auction items, add them to a favorites (watchlist), and see the total bid value of their selected items.

---

## 📚 Assignment Overview

This project was developed as part of the Programming Hero course to practice:

- React component structure
- Props and state management
- Conditional rendering
- Array methods (`map`, `reduce`)
- UI composition with Tailwind CSS
- User interaction handling

---

## ✨ Features

### 🛍️ Browse Auctions
- Displays auction items in a responsive grid
- Each item includes an image, title, current bid price, and time remaining

### ❤️ Favorites (Watchlist)
- Add items to a favorites sidebar using the heart icon
- Prevents duplicate additions
- Remove items instantly using the ❌ button
- Automatically calculates the **total bid amount**

### 🔔 Notifications
- Real-time feedback using **react-toastify**
- Success and error messages for user actions

### 📱 Responsive Design
- Fully responsive layout using **Tailwind CSS** and **DaisyUI*

---

## 🛠️ Tech Stack

- **Frontend Framework:** React.js  
- **Styling:** Tailwind CSS  
- **UI Components:** DaisyUI  
- **Icons:** React Icons (`react-icons/io`, `react-icons/io5`)  
- **Notifications:** React Toastify  
- **Data Handling:** Fetch API (local JSON data)

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Banner/
│   │   └── Banner.jsx       # Hero section
│   ├── Footer/
│   │   └── Footer.jsx       # Footer component
│   ├── Header/
│   │   └── Header.jsx       # Navigation bar
│   ├── Item/
│   │   └── Item.jsx         # Single auction item card
│   └── Items/
│       └── Items.jsx        # Data fetching, grid, and sidebar logic
├── App.jsx                  # Main layout & shared state
├── index.css                # Tailwind directives
└── main.jsx                 # Application entry point
