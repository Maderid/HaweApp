# Setup script for HaweApp frontend project (PowerShell)
# This script automatically installs all dependencies needed to run the project

$ErrorActionPreference = "Stop"

Write-Host "=========================================="
Write-Host "HaweApp - Setup Script (PowerShell)" -ForegroundColor Cyan
Write-Host "=========================================="
Write-Host ""

# Check if Node.js is installed
$nodeCheck = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeCheck) {
    Write-Host "[ERROR] Node.js is not installed or not in PATH!" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

$nodeVersion = & node --version
$npmVersion = & npm --version

Write-Host "[OK] Node.js version: $nodeVersion" -ForegroundColor Green
Write-Host "[OK] npm version: $npmVersion" -ForegroundColor Green
Write-Host ""

# Navigate to frontend directory
$frontendPath = Join-Path $PSScriptRoot "frontend"
Push-Location $frontendPath

try {
    Write-Host "[INFO] Installing dependencies..." -ForegroundColor Cyan
    & npm install
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "[ERROR] Failed to install dependencies!" -ForegroundColor Red
        exit 1
    }
    
    Write-Host ""
    Write-Host "=========================================="
    Write-Host "[OK] Setup completed successfully!" -ForegroundColor Green
    Write-Host "=========================================="
    Write-Host ""
    Write-Host "To start the development server, run:" -ForegroundColor Cyan
    Write-Host "  cd frontend"
    Write-Host "  npm run dev"
    Write-Host ""
    Write-Host "To build for production, run:" -ForegroundColor Cyan
    Write-Host "  npm run build"
    Write-Host ""
}
finally {
    Pop-Location
}
