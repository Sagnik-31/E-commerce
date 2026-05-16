# 🛒 ShopVerse – MERN Stack E-Commerce Application

## 📌 Project Overview

ShopVerse is a full-stack MERN-based E-Commerce web application developed using React.js, Node.js, Express.js, and MongoDB. The application provides a modern online shopping experience with secure authentication, product management, OTP-based password recovery, two-factor authentication, order management, and responsive UI design.

The project follows a modular MERN architecture and uses REST APIs for communication between frontend and backend.

---

# 🚀 Tech Stack

## Frontend

* React.js
* JavaScript (ES6+)
* CSS
* React Router DOM
* Axios

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose
* MongoDB Compass

## Authentication & Security

* JWT (JSON Web Token)
* bcrypt
* OTP Verification
* Two-Factor Authentication (2FA)

## Email Service

* Nodemailer
* Gmail App Password

## Development Tools

* VS Code
* Git & GitHub
* npm
* Postman

---

# ✨ Features

## Authentication Features

* User Signup
* User Login
* JWT Authentication
* Password Hashing using bcrypt
* Forgot Password with OTP Email Verification
* Password Reset Flow
* Two-Factor Authentication (2FA)
* Protected Routes

## Product Features

* Dynamic Product Fetching from MongoDB
* Product Details Page
* Product Pagination
* Search & Filtering
* Wishlist Functionality

## User Features

* User Profile Dashboard
* Change Password
* Delete Account
* Order History
* Persistent Login using localStorage

## Backend Features

* RESTful API Architecture
* Modular Folder Structure
* MongoDB Integration
* Middleware-based Authorization
* Error Handling
* API Debug Logging

---

# 📂 Project Structure

```bash
E-commerce/
│
├── Backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── Frontend/src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   └── App.jsx
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```bash
git clone <repository-link>
```

---

## 2. Install Backend Dependencies

```bash
cd Backend
npm install
```

---

## 3. Install Frontend Dependencies

```bash
cd Frontend
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file inside Backend folder.

```env
PORT=5001
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

---

# ▶️ Running the Project

## Start Backend

```bash
cd Backend
node server.js
```

---

## Start Frontend

```bash
cd Frontend
npm run dev
```

---

# 🗄️ MongoDB Collections

## users

Stores:

* Name
* Email
* Password (hashed)
* OTP
* OTP Expiry
* Created Date

## products

Stores:

* Product Name
* Price
* Category
* Image
* Description
* Ratings

## orders

Stores:

* User ID
* Ordered Products
* Total Price
* Order Date
* Order Status

---

# 🔄 API Architecture

The frontend communicates with backend using Axios and REST APIs.

## API Groups

### Authentication APIs

* POST /api/auth/register
* POST /api/auth/login
* POST /api/auth/forgot-password
* POST /api/auth/verify-otp
* POST /api/auth/reset-password
* POST /api/auth/verify-login-otp

### Product APIs

* GET /api/products
* GET /api/products/:id

### User APIs

* GET /api/user/profile
* PUT /api/user/change-password
* DELETE /api/user/delete-account

### Order APIs

* POST /api/orders
* GET /api/orders/my-orders

---

# 🔒 Authentication Workflow

## Signup

1. User enters details.
2. Password gets hashed using bcrypt.
3. User data stored in MongoDB.
4. JWT token generated.

## Login

1. User enters credentials.
2. Backend compares password using bcrypt.compare().
3. JWT token generated.
4. User authenticated.

## Forgot Password

1. User enters email.
2. OTP generated and stored in MongoDB.
3. OTP sent via Nodemailer.
4. User verifies OTP.
5. Password updated securely.

## Two-Factor Authentication (2FA)

1. User logs in with email/password.
2. Login OTP sent to email.
3. OTP verification required.
4. Access granted after verification.

---

# 📄 Pagination Logic

Pagination is implemented using MongoDB:

```js
.skip((page - 1) * limit)
.limit(limit)
```

Benefits:

* Faster loading
* Better performance
* Scalable product management

---

# 🔮 Future Enhancements

* Payment Gateway Integration
* AI-based Product Recommendations
* Live Notifications
* Admin Dashboard
* Product Reviews & Ratings
* Real-time Order Tracking
* Cloud Deployment
* Advanced Security & Validation

---

# 👨‍💻 Developer

Developed by Sagnik Ghosh.
