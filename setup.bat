@echo off
REM Setup script for HaweApp frontend project (Windows)
REM This script automatically installs all dependencies needed to run the project

setlocal enabledelayedexpansion

echo.
echo ==========================================
echo HaweApp - Setup Script (Windows)
echo ==========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i

echo [OK] Node.js version: %NODE_VERSION%
echo [OK] npm version: %NPM_VERSION%
echo.

REM Navigate to frontend directory
cd /d "%~dp0\frontend"

echo [INFO] Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Failed to install dependencies!
    pause
    exit /b 1
)

echo.
echo ==========================================
echo [OK] Setup completed successfully!
echo ==========================================
echo.
echo To start the development server, run:
echo   cd frontend
echo   npm run dev
echo.
echo To build for production, run:
echo   npm run build
echo.
pause
