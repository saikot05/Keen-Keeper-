# 📅 KeenKeeper — Keep Your Friendships Alive

> A friendship management web app that helps you stay connected with the people who matter most.

---

## 📖 Description

KeenKeeper is a responsive web application designed to help you track and maintain your friendships. It reminds you when it's time to reach out, logs your interactions, and gives you a visual overview of your social health — so no friendship ever slips through the cracks.

---

## 🛠️ Technologies Used

- **React.js** — Component-based UI framework
- **React Router DOM** — Client-side routing and navigation
- **Recharts** — Chart library for the Analytics/Stats page
- **Tailwind CSS** — Utility-first CSS framework for responsive design
- ** React Toastify** — Toast notifications
- **JSON** — Local data source for friend profiles

---

## ✨ Key Features

### 1. 👫 Friend Card Dashboard
Browse all your friends at a glance in a responsive 4-column grid. Each card displays the friend's photo, name, days since last contact, tags, and a color-coded status badge (`overdue`, `almost due`, or `on-track`). Click any card to visit their detailed profile page.

### 2. 📞 Quick Check-In & Timeline Logging
From a friend's detail page, log interactions instantly using the **Call**, **Text**, or **Video** buttons. Each click automatically creates a timestamped entry on the Timeline page and triggers a toast notification — keeping your interaction history always up to date.

### 3. 📊 Friendship Analytics
The Stats page features a **Pie Chart** (powered by Recharts) that visualizes the breakdown of your interactions by type — Call, Text, and Video — giving you a clear picture of how you're staying in touch.

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Banner, summary cards, and all friend cards |
| Friend Detail | `/friends/:id` | Full profile, stats, goals, and quick check-in |
| Timeline | `/timeline` | Full history of all logged interactions |
| Stats | `/stats` | Friendship analytics with pie chart |
| 404 | `*` | Custom not-found page for invalid routes |

---
