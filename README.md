# 🛍️ SokoLink

**SokoLink** is a web-based e-commerce platform focused on connecting buyers and sellers of second-hand furniture and household goods. The platform aims to provide a seamless browsing, buying, and selling experience while promoting sustainable living and affordable home solutions.

---

## 🚀 Features

- 🔍 Browse all categories of furniture and second-hand goods
- 🛒 Add items to cart and checkout
- 📝 Seller profile and product listing
- 🖼️ Image-based product showcase
- 💬 Secure messaging between buyer and seller
- 🔒 Escrow account system for safe and trusted transactions
- 📖 Blog and informational content
- 📱 Responsive UI/UX design

---

## 🧰 Tools Used & To Be Used

### ✅ Currently Used
- **Frontend**
  - React.js
  - Tailwind CSS
  - React Router DOM
  - React Icons
- **Backend**
  - Django (Python)
- **Database**
  - PostgreSQL
- **Version Control**
  - Git & GitHub

### 🔜 Planned Tools & Integrations
- **Authentication**
  - Firebase Authentication or JWT-based auth
- **Storage**
  - Firebase Storage or Cloudinary for image uploads
- **Real-time Messaging**
  - Firebase Firestore or Socket.io
- **Payments**
  - Stripe, M-Pesa API, and Escrow Payment Gateway
- **Smart Contracts**
  - Ethereum-based escrow system for secure, trustless transactions
- **Messaging System**
  - Built-in secure messaging between buyers and sellers
- **Admin Dashboard**
  - Django Admin or custom React dashboard
- **Testing**
  - Jest / React Testing Library, Django Test Framework
- **Deployment**
  - Vercel / Netlify (Frontend)
  - Railway / Heroku / VPS (Backend)

---

## 🛠️ Tech Stack Summary

### Frontend
- React.js
- Tailwind CSS
- React Router DOM
- React Icons

### Backend
- Django (Python)
- PostgreSQL

### Blockchain (Planned)
- Ethereum (Smart Contracts for Escrow)

---

## 🧭 Project Structure

```
SokoLink/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── Assets/
│       ├── Components/
│       ├── Pages/
│       │   ├── Layout.js
│       │   ├── Home.js
│       │   ├── AboutUs.js
│       │   ├── Blogs.js
│       │   └── Cart.js
│       ├── App.js
│       └── index.css
│
├── backend/
│   └── sokolink/
│       ├── settings.py
│       ├── urls.py
│       └── apps/
│           ├── users/
│           ├── listings/
│           └── payments/
├── package.json
└── README.md
```

---

## 📸 Screenshots

*UI screenshots.*

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/sokolink.git
cd sokolink
```

2. Install frontend dependencies:

```bash
cd frontend
npm install
npm run dev
```

3. Setup backend:

```bash
cd ../backend
pip install -r requirements.txt
python manage.py runserver
```

---

## ✅ To Do

- [ ] User authentication
- [ ] Seller dashboard
- [ ] Payment integration (Stripe / M-Pesa)
- [ ] Ethereum escrow smart contract
- [ ] Ratings & reviews
- [ ] Secure messaging system
- [ ] Admin panel

---

## 👥 Contributors

- [Your Name](https://github.com/Bett-Patrick) – Project Lead

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
