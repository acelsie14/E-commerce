# E-Commerce Application

A full-stack e-commerce application built with **React Native (Expo)** for the mobile frontend and **Node.js, Express, MongoDB, and Mongoose** for the backend.

The application is being developed to provide a complete shopping experience, including user authentication, product browsing, product management, cart functionality, and order management.

## 🚀 Tech Stack

### Frontend

- **React Native** — Mobile application framework
- **Expo** — React Native development platform
- **JavaScript / TypeScript** — Application development
- **React Navigation** — Navigation between screens

### Backend

- **Node.js** — JavaScript runtime
- **Express.js** — Backend REST API framework
- **MongoDB** — NoSQL database
- **Mongoose** — MongoDB object modeling library

### Authentication & Services

- **Firebase Authentication** — Planned for email verification and potentially other authentication features
- **Firebase** — May be used for verifying user email addresses

## 📱 Features

The following features are planned or currently under development:

### User Features

- User registration
- User login and logout
- Email verification
- User profile
- Password management
- Browse products
- Search products
- View product details
- Add products to cart
- Update cart quantities
- Remove products from cart
- Checkout
- View orders
- View order details

### Admin Features

Planned administrative functionality may include:

- Add products
- Edit products
- Delete products
- Manage product categories
- Manage inventory
- View orders
- Update order status
- Manage users

## 🏗️ Project Structure

The project is divided into two main parts:

```text
ecommerce-app/
│
├── frontend/
│   ├── app/
│   ├── assets/
│   ├── components/
│   ├── screens/
│   ├── services/
│   └── ...
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

> The exact folder structure may change as the application develops.

## ⚙️ Getting Started

### Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm or yarn
- [Expo CLI](https://docs.expo.dev/)
- MongoDB
- Git

If Firebase authentication is enabled, you will also need a Firebase project.

---

# 🖥️ Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

If Firebase is used for authentication or email verification, add the required Firebase configuration as well.

Start the development server:

```bash
npm run dev
```

Or, if a development script has not been configured:

```bash
npm start
```

The backend API should then be available at:

```text
http://localhost:5000
```

---

# 📱 Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install the dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```

You can then run the application using:

- Android Emulator
- iOS Simulator
- Expo Go
- A physical mobile device

---

# 🔐 Authentication

Authentication is planned as part of the application.

The application may use **Firebase Authentication** to handle email verification. Firebase can be used to send verification emails after a user registers and to confirm that the user's email address is valid.

The backend will remain responsible for application-specific user data stored in MongoDB.

A possible authentication flow is:

```text
User Registration
       ↓
React Native App
       ↓
Backend API
       ↓
Create User
       ↓
Firebase Authentication
       ↓
Verification Email
       ↓
User Verifies Email
       ↓
User Can Access Protected Features
```

Firebase authentication is currently considered a planned integration and may be adjusted as the authentication architecture develops.

## 🗄️ Database

The application uses **MongoDB** as its primary database, with **Mongoose** used to define schemas and interact with MongoDB from the Express backend.

Potential database models include:

```text
User
Product
Category
Cart
Order
OrderItem
```

The exact database schema will evolve as new application requirements are added.

## 🔌 API

The backend provides a REST API that the React Native application communicates with.

Example API structure:

```text
/api/auth
/api/users
/api/products
/api/categories
/api/cart
/api/orders
```

Example endpoints:

```text
POST   /api/auth/register
POST   /api/auth/login

GET    /api/products
GET    /api/products/:id

POST   /api/cart
GET    /api/cart
PUT    /api/cart/:id
DELETE /api/cart/:id

POST   /api/orders
GET    /api/orders
GET    /api/orders/:id
```

> These endpoints are examples and should be updated as the actual API is implemented.

## 🔒 Environment Variables

Sensitive information should never be committed directly to the repository.

Use environment variables for things such as:

```env
PORT=
MONGODB_URI=
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

Make sure `.env` is included in `.gitignore`:

```gitignore
.env
.env.local
```

## 🧪 Testing

Testing will be added as the application develops.

Potential areas for testing include:

- Authentication
- API endpoints
- Product management
- Cart functionality
- Order creation
- Database operations
- Frontend components
- Navigation

## 📦 Building for Production

### Frontend

The mobile application can be prepared for production using Expo's build and deployment tools.

```bash
npx expo start
```

Production build configuration will be added as the application approaches deployment.

### Backend

The Express backend can be deployed to a suitable Node.js hosting provider.

Before deployment, make sure that:

- Production environment variables are configured
- MongoDB is accessible from the production server
- CORS is configured correctly
- Authentication configuration is properly secured
- Debug/development settings are disabled where appropriate

## 🛡️ Security

Security is an important part of the application.

The project will aim to:

- Protect sensitive environment variables
- Validate user input
- Secure authentication endpoints
- Hash passwords when passwords are managed by the backend
- Protect authenticated API routes
- Validate MongoDB queries and request data
- Configure CORS appropriately
- Avoid exposing private Firebase credentials
- Implement appropriate authorization for admin functionality

## 🛣️ Roadmap

### Phase 1 — Project Setup

- [x] Set up React Native with Expo
- [x] Set up Express backend
- [x] Set up MongoDB
- [x] Configure Mongoose
- [ ] Connect frontend to backend

### Phase 2 — Authentication

- [ ] User registration
- [ ] User login
- [ ] User logout
- [ ] Firebase integration
- [ ] Email verification
- [ ] Protected routes

### Phase 3 — Products

- [ ] Product model
- [ ] Product API
- [ ] Product listing
- [ ] Product details
- [ ] Product search
- [ ] Product categories

### Phase 4 — Shopping Cart

- [ ] Add products to cart
- [ ] Remove products from cart
- [ ] Update quantities
- [ ] Calculate totals
- [ ] Persist cart data

### Phase 5 — Orders

- [ ] Checkout
- [ ] Create orders
- [ ] Order history
- [ ] Order details
- [ ] Order status management

### Phase 6 — Admin

- [ ] Admin authentication
- [ ] Product management
- [ ] Category management
- [ ] Inventory management
- [ ] Order management
- [ ] User management

### Phase 7 — Production

- [ ] Production configuration
- [ ] Backend deployment
- [ ] Database production setup
- [ ] Mobile application build
- [ ] Testing
- [ ] Performance improvements
- [ ] Security review

## 🤝 Contributing

This project is currently under development.

If you would like to contribute:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git commit -m "Add your feature"
```

5. Push the branch.

```bash
git push origin feature/your-feature
```

6. Open a pull request.

## 📄 License

This project currently does not have a specified license.

A license can be added once the project requirements are finalized.

---

## 👨‍💻 Project Status

**Status:** 🚧 In Development

This project is actively being developed. Features, API endpoints, database schemas, and technologies may change as development progresses.