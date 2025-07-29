

-----

# Project Documentation

## Features

### Core Functionality

#### Authentication

  - Secure user authentication is handled using **Clerk**.
  - Ensures user data is protected and associated with the correct account.
  - When a user logs in for the first time, their information is saved in the database.

#### Landing Page

  - High-level overview of the application.
  - Showcases:
      - Key statistics
      - Core features (advanced analytics, receipt scanning)
      - Simplified guide on how to use the platform.

#### Dashboard

  - Central hub for users to manage their finances.
  - Provides a summary of:
      - Financial information
      - Account balances
      - Recent transactions.

#### Account Management

  - Manage financial accounts:
      - Create new accounts (name, type - Current/Savings, initial balance, currency).
      - Update existing accounts.
      - Set a default account for streamlined transaction recording.

#### Transaction Management

  - Core feature for tracking income and expenses:
      - Create new transactions
      - List existing transactions
      - Edit transaction details
      - Delete records
  - Each transaction includes:
      - Type (income/expense)
      - Amount
      - Date
      - Description
      - Category
      - Associated account

#### Transaction Listing

  - Transactions displayed in an organized list sorted by date.
  - Date ranges can be specified for review.

#### Adding Transactions

  - Add income/expense transactions easily:
      - Amount
      - Date
      - Category
      - Description

#### Filtering

  - Filter transactions by:
      - Category
      - Date range

#### Categories

  - Predefined transaction categories for better analysis:
      - Examples: Salary, Housing, Food
      - Each category includes:
          - Name
          - Type (income/expense)
          - Color
          - Icon

#### Budgets

  - Create budgets for different categories.
  - Define budgets for various periods:
      - Daily, Weekly, Monthly, Yearly
  - Helps in effective financial planning.

#### Data Serialization

  - Converts data from database (Decimal type) to front-end friendly formats (JavaScript numbers).

-----

## Advanced Features & Requirements

  - **Income/Expense Entry via Web App**: User-friendly web interface for adding financial records.
  - **Time-Range Based Listing**: Fetch all transactions within a specified time range.
  - **Graphical Reports**: Insightful visual analytics:
      - **Expenses by Category** – Visualize spending distribution.
      - **Expenses by Date** – Track spending trends.
  - **Receipt Extraction**: Upload receipts (images or PDFs) for OCR-based transaction data extraction.

-----

## Bonus Features

 
  - **API Pagination**: Efficient transaction list handling for large datasets.


-----

## Data Model

### Users

  - `ID`, `Clerk User ID`, `email`, `name`, `image URL`

### Accounts

  - `ID`, `name`, `type`, `balance`, `currency`, `isDefault`, `userId`

### Transactions

  - `ID`, `type`, `amount`, `description`, `date`, `category`, `receipt URL`, `isRecurring`, `recurringInterval`, `nextRecurringDate`, `status`, `userId`, `accountId`

### Budgets

  - `ID`, `amount`, `currency`, `period`, `startDate`, `endDate`, `userId`, `categoryId`

### Categories

  - `ID`, `name`, `type`, `color`, `icon`, `userId`

-----

## Technologies

  - **Frontend**: Next.js, React
  - **Backend**: Node.js, Next.js API routes
  - **Database**: PostgreSQL, Prisma
  - **Authentication**: Clerk

-----



## Setup & Running the Project

### Step 1: Install Dependencies

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

##Live Link
https://type-finance.vercel.app/
