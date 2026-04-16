# 🎓 Educase India

> An innovative platform connecting students with educational resources and opportunities

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Language Composition](#language-composition)
- [Project Structure](#project-structure)
- [Components](#components)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Installation & Setup](#installation--setup)

---

## 🚀 Project Overview

**Educase India** is a modern React-based web application designed to facilitate user authentication, account management, and personalized user experiences. The platform features a seamless authentication flow with Welcome, Login, Registration, and Account Management screens.

### Key Features

✨ **User Authentication** - Secure login and registration system  
🎯 **Account Management** - User profile and settings management  
🎨 **Responsive Design** - Mobile-friendly UI (375x720px viewport)  
⚡ **Fast Performance** - Built with Vite for optimal build speeds  
🎭 **Modern React** - Latest React 19.2.4 with Hooks support  

---

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Frontend Framework** | React | 19.2.4 |
| **Build Tool** | Vite | 8.0.4 |
| **Styling** | Tailwind CSS | 4.2.2 |
| **Styling Integration** | @tailwindcss/vite | 4.2.2 |
| **Linting** | ESLint | 9.39.4 |
| **Module Type** | ES Module | - |

### Development Dependencies

- `@vitejs/plugin-react` (6.0.1) - React plugin for Vite
- `@types/react` (19.2.14) - TypeScript support for React
- `@types/react-dom` (19.2.3) - TypeScript support for React DOM
- `eslint-plugin-react-hooks` (7.0.1) - ESLint rules for React Hooks
- `eslint-plugin-react-refresh` (0.5.2) - React Fast Refresh support

---

## 📊 Language Composition

| Language | Percentage |
|----------|-----------|
| JavaScript | 73.5% |
| CSS | 23.6% |
| HTML | 2.9% |

---

## 📁 Project Structure

```plaintext
Educase-India/
├── src/
│   ├── components/
│   │   ├── Welcome.jsx           # Welcome screen component
│   │   ├── Login.jsx             # Login form component
│   │   ├── CreateAccount.jsx     # Registration form component
│   │   ├── Account.jsx           # Account management component
│   │   └── FloatingInput.jsx     # Reusable input component
│   ├── assets/
│   │   ├── hero.png              # Hero image
│   │   ├── react.svg             # React logo
│   │   └── vite.svg              # Vite logo
│   ├── App.jsx                   # Main App component
│   ├── App.css                   # App styles
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Application entry point
├── public/
│   ├── favicon.svg               # Favicon
│   └── icons.svg                 # Icon assets
├── index.html                    # HTML entry point
├── package.json                  # Project dependencies
├── vite.config.js                # Vite configuration
├── eslint.config.js              # ESLint configuration
└── README.md                      # This file
```

---

## 🧩 Components

### **Welcome Component** (`Welcome.jsx`)
Entry point screen with options to login or create a new account.

### **Login Component** (`Login.jsx`)
User login form with authentication flow.

### **CreateAccount Component** (`CreateAccount.jsx`)
Registration form for new users with account creation.

### **Account Component** (`Account.jsx`)
User profile and account settings management screen.

### **FloatingInput Component** (`FloatingInput.jsx`)
Reusable input field component with floating labels.

---

## 🎯 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SONALkumarmandal/Educase-India.git
   cd Educase-India
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts Vite development server |
| `npm run build` | Creates optimized production build |
| `npm run lint` | Runs ESLint to check code quality |
| `npm run preview` | Preview production build locally |

---

## 🎨 UI Features

- **Mobile-First Design:** Optimized for mobile devices (375x720px)
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development
- **Responsive Layout:** Flexible container with shadow and rounded corners
- **Clean Navigation:** Smooth screen transitions between components

---

## 🔧 Configuration Files

### `vite.config.js`
Configures Vite build tool with React plugin support.

### `eslint.config.js`
ESLint configuration for code quality and best practices.

### `package.json`
Project metadata, dependencies, and npm scripts.

---

## 📝 Notes

- The project uses ES modules (`"type": "module"` in package.json)
- All styling is handled with Tailwind CSS utility classes
- Components follow React functional component pattern with Hooks
- The app renders to a single `#root` div in `index.html`

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for any improvements.

---

**Made with ❤️ by Sonal Kumar Mandal