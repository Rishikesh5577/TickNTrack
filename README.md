# TickNTrack 🛍️

A modern, full-stack e-commerce platform for premium shoes and watches. Built with React and Node.js, featuring a responsive design, secure authentication, and seamless shopping experience.

🌐 **Live Demo:** [https://tickntrack-1.onrender.com/](https://tickntrack-1.onrender.com/)  
📦 **Repository:** [https://github.com/Rishikesh5577/TickNTrack.git](https://github.com/Rishikesh5577/TickNTrack.git)

![TickNTrack](https://img.shields.io/badge/TickNTrack-E-Commerce-blue)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-8.19.2-47A248?logo=mongodb)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Project](#-running-the-project)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🛒 E-Commerce Features
- **Product Catalog**: Browse shoes and watches by category and subcategory
- **Product Search**: Real-time search functionality with instant results
- **Product Details**: Detailed product pages with images, specifications, and reviews
- **Shopping Cart**: Add to cart, update quantities, and manage items
- **Wishlist**: Save favorite products for later
- **Order Management**: Track orders and view order history
- **Payment Integration**: Secure payment processing with Razorpay

### 👤 User Features
- **Authentication**: 
  - Email/Password login
  - OTP-based login (via SMS)
  - Google OAuth integration
- **User Profile**: Manage personal information and addresses
- **Address Management**: Multiple shipping addresses
- **Order History**: View past orders and track current orders

### 🎨 UI/UX Features
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI**: Beautiful, intuitive interface with Tailwind CSS
- **Hero Slider**: Dynamic banner carousel on homepage
- **Category Showcase**: Premium product collections display
- **Featured Products**: Trending products section
- **Mobile Navigation**: Bottom navigation bar for mobile devices

### 🔐 Admin Features
- **Admin Dashboard**: Comprehensive admin panel
- **Product Management**: Add, edit, and delete products
- **Order Management**: View and manage all orders
- **Address Management**: Manage customer addresses
- **User Management**: Admin user controls

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - UI library
- **React Router DOM 7.9.4** - Routing
- **Vite** - Build tool and dev server
- **Tailwind CSS 4.1.16** - Styling
- **Lucide React** - Icons
- **React Icons** - Additional icons

### Backend
- **Node.js 18+** - Runtime environment
- **Express 5.1.0** - Web framework
- **MongoDB 8.19.2** - Database (via Mongoose)
- **JWT** - Authentication tokens
- **Passport.js** - Authentication middleware
- **Razorpay** - Payment gateway
- **Fast2SMS** - OTP service
- **Nodemailer** - Email service

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas)
- **Git**

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Rishikesh5577/TickNTrack.git
cd TickNTrack
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

## 🔐 Environment Variables

### Frontend Environment Variables

Create a `.env` file in the `frontend` directory:

```env
# Backend API URL
VITE_BACKEND_URL=http://localhost:5000

# Backend Base URL (for OAuth)
VITE_BACKEND_BASE=http://localhost:5000

# OTP Server URL (if separate server)
VITE_OTP_SERVER_URL=http://localhost:4000
```

### Backend Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/tickntrack
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/tickntrack

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# OTP Service (Fast2SMS)
FAST2SMS_API_KEY=your_fast2sms_api_key

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback

# Razorpay (Payment Gateway)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

## ▶️ Running the Project

### Development Mode

#### Start Backend Server

```bash
cd backend
npm run dev
```

The backend server will run on `http://localhost:5000`

#### Start Frontend Development Server

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173`

### Production Build

#### Build Frontend

```bash
cd frontend
npm run build
```

The build output will be in the `frontend/dist` directory.

#### Start Backend in Production

```bash
cd backend
npm start
```

## 📁 Project Structure

```
TickNTrack/
├── frontend/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ProductList.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   └── ...
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── ...
│   │   ├── context/          # React Context
│   │   │   └── CartContext.jsx
│   │   ├── router/          # Routing configuration
│   │   │   └── Router.jsx
│   │   ├── services/         # API services
│   │   │   └── api.js
│   │   └── utils/            # Utility functions
│   │       └── api.js
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/              # Configuration files
│   │   ├── DataBaseConnection.js
│   │   └── passport.js
│   ├── controllers/         # Route controllers
│   │   ├── auth.controller.js
│   │   ├── product.controller.js
│   │   ├── order.controller.js
│   │   └── ...
│   ├── middleware/          # Custom middleware
│   │   ├── auth.js
│   │   └── admin.js
│   ├── models/              # MongoDB models
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── ...
│   ├── routes/              # API routes
│   │   ├── auth.routes.js
│   │   ├── product.routes.js
│   │   └── ...
│   ├── scripts/             # Utility scripts
│   ├── index.js             # Entry point
│   └── package.json
│
└── README.md
```

## 🌐 Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Set Environment Variables** in your hosting platform:
   ```
   VITE_BACKEND_URL=https://your-backend-url.com
   VITE_BACKEND_BASE=https://your-backend-url.com
   ```

2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`

### Backend Deployment (Render/Railway/Heroku)

1. **Set Environment Variables**:
   ```
   PORT=5000
   NODE_ENV=production
   MONGODB_URI=your_mongodb_connection_string
   FRONTEND_URL=https://your-frontend-url.com
   JWT_SECRET=your_jwt_secret
   ```

2. **Start Command**: `node index.js`

### Important Notes

- **CORS**: Ensure `FRONTEND_URL` in backend matches your deployed frontend URL
- **Environment Variables**: Vite requires `VITE_` prefix for frontend variables
- **Build Time**: Environment variables are injected at build time for frontend

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `POST /api/auth/send-otp` - Send OTP for phone login
- `POST /api/auth/verify-otp` - Verify OTP
- `GET /api/auth/google` - Google OAuth login

### Product Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products?category=...` - Filter by category
- `GET /api/products?subcategory=...` - Filter by subcategory

### Cart Endpoints

- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove item from cart

### Order Endpoints

- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- Rishikesh5577 - [GitHub](https://github.com/Rishikesh5577)

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Express](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Vite](https://vitejs.dev/) - Build tool

## 📞 Support

For support, open an issue in the repository.

---

**Made with ❤️ for premium shopping experience**

