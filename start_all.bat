@echo off
echo ==================================================
echo   Grand City Hospital System - Microservice Startup
echo ==================================================
echo.
echo [0/6] Verifying Dependencies...
for %%D in (IT22101624_PatientService IT22117014_DoctorService IT22109576_AppointmentService IT22114662_BillingService Member5_PharmacyService api_gateway) do (
    if not exist "%~dp0%%D\node_modules" (
        echo --------------------------------------------------
        echo ⏳ Installing missing dependencies for %%D ...
        echo --------------------------------------------------
        cd /d "%~dp0%%D"
        call npm install --silent
    )
)
echo ✅ All dependencies ready!
echo.
echo [1/6] Starting IT22101624 - Patient Service (Port 8001)...
start "Member1 - Patient Service :8001" cmd /k "cd /d %~dp0IT22101624_PatientService && node index.js"
timeout /t 2 /nobreak >nul

echo [2/6] Starting IT22117014 - Doctor Service (Port 8002)...
start "Member2 - Doctor Service :8002" cmd /k "cd /d %~dp0IT22117014_DoctorService && node index.js"
timeout /t 2 /nobreak >nul

echo [3/6] Starting IT22109576 - Appointment Service (Port 8003)...
start "Member3 - Appointment Service :8003" cmd /k "cd /d %~dp0IT22109576_AppointmentService && node index.js"
timeout /t 2 /nobreak >nul

echo [4/6] Starting IT22114662 - Billing Service (Port 8004)...
start "Member4 - Billing Service :8004" cmd /k "cd /d %~dp0IT22114662_BillingService && node index.js"
timeout /t 2 /nobreak >nul

echo [5/6] Starting Member 5 - Pharmacy Service (Port 8005)...
start "Member5 - Pharmacy Service :8005" cmd /k "cd /d %~dp0Member5_PharmacyService && node index.js"
timeout /t 2 /nobreak >nul

echo [6/6] Starting API Gateway (Port 8000)...
start "API Gateway :8000" cmd /k "cd /d %~dp0api_gateway && node index.js"

echo.
echo ==================================================
echo   ALL SERVICES LAUNCHED DETACHED
echo ==================================================
echo   API Gateway  :  http://localhost:8000
echo   Member 1 Swagger : http://localhost:8001/api-docs
echo   Member 2 Swagger : http://localhost:8002/api-docs
echo   Member 3 Swagger : http://localhost:8003/api-docs
echo   Member 4 Swagger : http://localhost:8004/api-docs
echo ==================================================
pause
