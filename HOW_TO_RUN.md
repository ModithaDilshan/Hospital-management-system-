# 🏥 Grand City Hospital System
### Microservices Architecture Assignment (IT4020)

**Welcome Group Members!** 
This repository contains our fully finalized, high-detail Hospital Management System. It uses a 4-Microservice architecture + API Gateway, and it is built to be evaluated immediately with zero complex setup.

---

## 🚀 1. Prerequisites
You only need to have one thing installed on your computer to run the entire project:
*   [Node.js](https://nodejs.org/en) (v18 or higher recommended)

*(You do **NOT** need MongoDB installed locally. Our project is permanently hosted on a cloud Atlas cluster, meaning everything you add to the database is instantly visible to all other members.)*

---

## 🛠️ 2. Back-End Startup Guide
I wrote an automation script to prevent any errors when opening the projects!

1. Extract the project ZIP folder.
2. Open the main **`hospital_management_system`** folder.
3. **Double-click on `start_all.bat`.**
   * *That's it!*
   * The script will automatically scan your computer for missing node packages (`npm install`) and install them.
   * Then, it will automatically open 5 different terminal windows launching:
      - Member 1: Patient Service `(Port 8001)`
      - Member 2: Doctor Service `(Port 8002)`
      - Member 3: Appointment Service `(Port 8003)`
      - Member 4: Billing Service `(Port 8004)`
      - **API Gateway `(Port 8000)`**

---

## 🌐 3. Front-End Web Application
Once the black terminal windows are running, you can open the beautiful user interface!

1. Open your terminal (or Command Prompt).
2. Type `cd frontend` (to navigate into the frontend folder).
3. Type `node server.js` to start the web server.
4. Open your web browser and go to:
   * 👉 **http://localhost:5000**

---

## 🛡️ 4. Admin Dashboard (Crucial for Screenshots)
To prove to our lecturer that all CRUD capabilities are active, I built a dark-glass Administrative interface.

1. Go to: **http://localhost:5000/admin.html**
2. You will be greeted by a secure glassmorphism Admin Wall.
3. LoginThe system routes traffic from `Port 8000` securely to internal services (`8001`, `8002`, `8003`, `8004`, `8005`).

- **Patients:** `http://localhost:8000/api/patients`
- **Doctors:** `http://localhost:8000/api/doctors`
- **Appointments:** `http://localhost:8000/api/appointments`
- **Bills:** `http://localhost:8000/api/bills`
- **Pharmacy:** `http://localhost:8000/api/medicines`

---

### Phase 4: Native Microservice Documentation (Swagger UI)
For your presentation, you must show the swagger documentation generated uniquely by each member's service. Navigate to these directly to capture your necessary screenshots:
- IT22101624: [http://localhost:8001/api-docs](http://localhost:8001/api-docs)
- IT22117014: [http://localhost:8002/api-docs](http://localhost:8002/api-docs)
- IT22109576: [http://localhost:8003/api-docs](http://localhost:8003/api-docs)
- IT22114662: [http://localhost:8004/api-docs](http://localhost:8004/api-docs)
- Member 5: [http://localhost:8005/api-docs](http://localhost:8005/api-docs)

Good luck running the demo! Let me know if you run into any issues.
