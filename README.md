# ResolveNow ⚖️

> A smart and transparent college grievance redressal system for students and coordinators.

ResolveNow is a full-stack complaint management platform built to simplify how campus issues are reported, tracked, and resolved. It gives students a structured way to raise complaints and gives coordinators the tools to manage them with better visibility, accountability, and workflow control.

## ✨ Project Snapshot

- 🎓 Students can register, log in, raise complaints, edit eligible requests, and track progress
- 🧑‍💼 Coordinators can review complaints, update statuses, revert requests, and resolve cases
- 📊 Built-in analytics help visualize complaint trends and status distribution
- 📁 Excel export makes reporting and record sharing easier
- 🔐 JWT-based authentication protects role-specific access
- 📱 Responsive UI works across desktop and mobile screens

## 🚀 Why ResolveNow?

In many colleges, complaints are often handled informally through chats, calls, or verbal communication. That leads to:

- missed follow-ups
- unclear ownership
- lack of transparency
- slow resolution cycles

ResolveNow solves that by creating a centralized digital workflow where each complaint has a status, priority, history, and responsible user flow.

## 🌟 Core Features

### 👨‍🎓 Student Features

- Secure registration and login
- Raise complaints with title, category, priority, and detailed description
- View all submitted complaints in one dashboard
- Search complaints by title or description
- Filter by category, priority, and status
- Sort by newest, oldest, or priority
- Edit complaints when status is `pending` or `reverted`
- Withdraw complaints while still in `pending`
- View complaint details including revert reason when clarification is requested

### 👩‍💼 Coordinator Features

- Access all student complaints in one panel
- Review complaint details and student information
- Move complaints through the workflow:
  `pending` → `assigned` → `in-progress` → `resolved`
- Revert complaints with a clarification reason
- Filter and search complaints quickly
- View analytics dashboards powered by charts
- Export filtered complaint records to Excel

## 🔄 Complaint Lifecycle

Every complaint in ResolveNow moves through a structured lifecycle:

- 🕒 `pending` - complaint submitted and waiting for review
- 📌 `assigned` - complaint acknowledged and assigned for action
- 🛠️ `in-progress` - work has started
- ✅ `resolved` - complaint successfully completed
- 🔁 `reverted` - sent back for clarification or correction
- ❌ `withdrawn` - withdrawn by the student before processing

## 🧭 User Flow

### Student Journey

1. Register or log in
2. Open the student dashboard
3. Raise a complaint with the required details
4. Track updates through the dashboard
5. Edit or withdraw complaints when allowed

### Coordinator Journey

1. Log in as coordinator
2. Open the complaint management dashboard
3. Filter, review, and inspect complaints
4. Assign, start, revert, or resolve complaints
5. Use charts and export features for reporting

## 🖥️ Dashboard Experience

### Student Dashboard

- 📌 Stats cards for total, resolved, pending, reverted, and withdrawn complaints
- 📝 Complaint submission and edit modal
- 🔍 Search and multi-filter support
- 📄 Paginated complaint cards
- 👁️ Detailed complaint view modal

### Coordinator Dashboard

- 📈 Statistics cards for major complaint states
- 📊 Trend, category, status, and priority charts
- 🔎 Search, filter, sorting, and pagination
- 🧾 Complaint detail modal
- 📥 Excel export for reporting

## 🛠️ Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- cors
- dotenv

### Frontend

- HTML
- Tailwind CSS
- Vanilla JavaScript
- SweetAlert2
- Chart.js
- Font Awesome

## 📂 Project Structure

```text
ResolveNow/
|-- config/
|   |-- db.js
|-- middleware/
|   |-- authmiddleware.js
|-- models/
|   |-- complaint.js
|   |-- user.js
|-- public/
|   |-- index.html
|   |-- auth.html
|   |-- student-dashboard.html
|   |-- coordinator-dashboard.html
|-- routes/
|   |-- auth.js
|   |-- complaints.js
|-- .env
|-- package.json
`-- server.js
```

## 🔌 API Overview

### Authentication Routes

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in and receive JWT token

### Complaint Routes

- `POST /api/complaints` - Create a complaint (`student`)
- `GET /api/complaints/my` - Get current student's complaints (`student`)
- `PUT /api/complaints/edit/:id` - Edit own complaint (`student`)
- `DELETE /api/complaints/:id` - Withdraw own pending complaint (`student`)
- `GET /api/complaints` - Get all complaints (`coordinator`)
- `PUT /api/complaints/:id` - Update complaint status/details (`coordinator`)

## 🧱 Data Models

### User Model

- `fullName`
- `email`
- `password`
- `role`
- `createdAt`

### Complaint Model

- `title`
- `description`
- `category`
- `priority`
- `status`
- `revertReason`
- `student`
- `createdAt`
- `resolvedAt`

## ⚙️ Environment Variables

Create a `.env` file in the project root with the following values:

```env
MONGO_URI=mongodb://127.0.0.1:27017/resolvenow
JWT_SECRET=your_secret_key
PORT=5000
```

## 🧪 Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Start MongoDB

Make sure your local MongoDB service is running, or replace `MONGO_URI` with your hosted MongoDB connection string.

### 3. Run the server

```bash
node server.js
```

### 4. Open the app

```text
http://localhost:5000
```

## 🌐 Available Pages

- `/` - Landing page
- `/auth.html` - Login and registration page
- `/student-dashboard.html` - Student dashboard
- `/coordinator-dashboard.html` - Coordinator dashboard

## 🧠 Architecture Notes

- Frontend pages are served statically from `public/`
- Authentication data is stored in `localStorage`
- JWT middleware protects backend routes
- Role-based authorization restricts access by `student` and `coordinator`
- Complaints are linked to the logged-in student
- Withdrawn complaints are excluded from the coordinator dashboard

## 🔮 Future Improvements

- Add file or image attachments for complaints
- Add notifications for status updates
- Add admin role and coordinator assignment logic
- Add comment/history timeline for each complaint

## 👥 Team

Built with effort and collaboration by:

- Rohit Hazra
- Tanmay Mohanty
- Shubhranshu Sahoo
- Diptiranjan Behera


