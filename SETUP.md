# 🚀 HaweApp Setup Guide

Welcome! This guide will help you set up the HaweApp project and install all dependencies needed to run the application.

## Prerequisites

Before running the setup scripts, make sure you have **Node.js** and **npm** installed on your system.

- **Download Node.js**: https://nodejs.org/
- If you already have them installed, verify with:
  ```bash
  node --version
  npm --version
  ```

## Quick Start

### For Windows Users (Command Prompt)
1. Open Command Prompt
2. Navigate to the project root directory
3. Run:
   ```cmd
   setup.bat
   ```

### For Windows Users (PowerShell)
1. Open PowerShell
2. Navigate to the project root directory
3. Run:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser  # (if needed)
   .\setup.ps1
   ```

### For Mac/Linux Users
1. Open Terminal
2. Navigate to the project root directory
3. Run:
   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```

## Manual Setup (If Scripts Don't Work)

If you prefer to set up manually or the scripts don't work:

```bash
cd frontend
npm install
```

## Running the Application

After setup is complete:

### Development Server
```bash
cd frontend
npm run dev
```
This starts the Vite development server with hot module reloading.

### Production Build
```bash
cd frontend
npm run build
```
This creates an optimized production build in the `dist` folder.

### Preview Production Build
```bash
cd frontend
npm run preview
```

## Project Structure

```
HaweApp/
├── frontend/
│   ├── src/              # Source code
│   ├── public/           # Static assets
│   ├── package.json      # Dependencies and scripts
│   └── vite.config.ts    # Vite configuration
├── setup.sh              # Setup script for Mac/Linux
├── setup.bat             # Setup script for Windows (CMD)
├── setup.ps1             # Setup script for Windows (PowerShell)
└── SETUP.md              # This file
```

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React Router** - Client-side routing
- **Zustand** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client

## Troubleshooting

### "Node.js is not installed"
- Install Node.js from https://nodejs.org/
- Restart your terminal/IDE after installation

### "npm install fails with permission error"
- On Mac/Linux: Try `sudo npm install`
- On Windows: Run Command Prompt or PowerShell as Administrator

### Port already in use
- By default, Vite runs on `http://localhost:5173`
- To use a different port: `npm run dev -- --port 3000`

### Dependencies not updating
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

## Need Help?

If you encounter any issues:
1. Check that Node.js and npm are properly installed
2. Delete `node_modules` and `package-lock.json`, then run setup again
3. Check the console for specific error messages

---

Happy coding! 🎉
