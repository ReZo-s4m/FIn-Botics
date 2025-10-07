# 💰 FinBotics — Smart Finance Management Platform

### 🌐 Live Demo  
👉 [https://fin-botics-three.vercel.app/](https://fin-botics-three.vercel.app/)

---

## 🚀 Overview

**FinBotics** is a modern full-stack web application for managing personal finances efficiently.  
Track income, expenses, budgets, and accounts — all in a secure dashboard.  
Built with **Next.js**, **Prisma**, and **PostgreSQL**, FinBotics provides real-time insights and a seamless user experience.

---

## 📊 Dashboard

- Central hub for users to manage finances.
- Overview of:
  - Financial information
  - Account balances
  - Recent transactions & spending trends

---

## 🏦 Account Management

- Create, update, and manage accounts:
  - Name, type (Current/Savings), initial balance, currency
  - Set a **default account** for streamlined recording

---

## 💸 Transaction Management

- Add, edit, delete income/expense transactions
- Each transaction includes:
  - Type, amount, date, description, category, associated account

---

## 🗂️ Categories & Budgets

- Predefined or custom categories (Salary, Housing, Food, Travel)
- Create budgets (Daily, Weekly, Monthly, Yearly)
- Track progress visually

---

## ✨ Core Features

- 🔐 **Authentication** via Clerk
- 💸 **Transactions** (CRUD)
- 📊 **Dashboard** (real-time summaries)
- 🏦 **Accounts** (multi-account management)
- 🎯 **Budgets** (category-based)
- 📁 **Categories** (predefined/custom)
- ⚡ **Analytics** (visual charts)

---

## 🌟 Bonus Features

- ⚙️ **API Pagination** for large datasets
- 🔄 **Real-Time Updates**
- 📈 **Data Visualization**

---

## 🧠 Tech Stack

| Layer | Technologies |
|--------|--------------|
| **Frontend** | Next.js, React, Tailwind CSS |
| **Backend** | Node.js, Prisma ORM |
| **Database** | PostgreSQL |
| **Auth & Security** | Clerk, Arcjet |
| **AI / APIs** | Gemini API, Resend |
| **Hosting** | Vercel |

---

## ⚙️ Full Setup & Running the Project

### 1️⃣ Install Dependencies
```bash
npm install

```

### Step 2: Start the Development Server

Open Terminal 1:

```bash
npm run dev
```

### Step 3: Start Inngest Dev

Open Terminal 2:

```bash
npx inngest-cli@latest dev
```

### Environment Variables (`.env`)

```env
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=
```
