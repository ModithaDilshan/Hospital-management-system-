# IT4020 Assignment 2 - Hospital Management System

## Project Overview
This project fulfills the IT4020 Microservices Architecture assignment. It simulates a **Hospital Management System** divided perfectly between 4 group members to prevent overlap and satisfy the assessment criteria.

## Group Contribution

### **IT22101624: Patient Service (Port 8001)**
- Manages Patient Accounts, demographics, and contact info.
- Endpoints: `/api/patients`

### **IT22117014: Doctor Service (Port 8002)**
- Manages Staff Physicians, specializations, and consultation charges.
- Endpoints: `/api/doctors`

### **IT22109576: Appointment Service (Port 8003)**
- Links Patients to Doctors on specific dates and time slots.
- Endpoints: `/api/appointments`

### **IT22114662: Billing Service (Port 8004)**
- Issues financial invoices for completed consultations and checks payment status.
- Endpoints: `/api/bills`

### **Member 5: Pharmacy Service (Port 8005)**
- Manages hospital medicine inventory, stock quantities, and supplier records.
- Endpoints: `/api/medicines`

## API Gateway (Port 8000)
A central Node.js proxy server utilizing `http-proxy-middleware`. 
Instead of tracking 4 different ports, the entire frontend only speaks to **Port 8000**. The Gateway seamlessly redirects `/api/doctors` traffic to `Port 8002` automatically.

## How to Run:
1. Double click `start_all.bat` (This launches all Microservices + API Gateway at once).
2. Open a new terminal inside the `frontend` folder and run `node server.js`.
3. Open **http://localhost:5000** in your web browser.

## Admin Setup for Slide Screenshots
Navigate to **http://localhost:5000/admin.html** in your browser.
This page contains four distinct tabs (one for each group member) where you can easily showcase performing **CRUD operations (Create, Read, Update, Delete)** live across the different databases using the API Gateway! Each member can screenshot their respective tab for the final Slide Deck.
