# BabySteps

This is an advanced appointment booking system built using *Node.js, Express, MongoDB, and React*. It includes scheduling logic, availability management, and an interactive frontend.

## Features
- *User Authentication* (Sign up, login, session management)
- *Appointment Scheduling* (Real-time availability checks)
- *Admin Dashboard* (Manage users, appointments, and schedules)
- *Notifications* (Email confirmations for bookings)
- *Responsive UI* (Built with React and Styled Components)

---
## Installation & Running the Application

### Prerequisites
Ensure you have the following installed:
- *Node.js* (>= 16.x)
- *MongoDB* (Local or cloud instance)
- *NPM/Yarn*

### Backend Setup
1. Navigate to the backend folder:
   sh
   cd backend
   
2. Install dependencies:
   sh
   npm install
   
3. Set up environment variables:
   - Create a .env file in the backend folder.
   - Add the following variables:
     env
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/appointments
     JWT_SECRET=your_secret_key
     
4. Start the backend server:
   sh
   npm start
   

### Frontend Setup
1. Navigate to the frontend folder:
   sh
   cd frontend
   
2. Install dependencies:
   sh
   npm install
   
3. Set up environment variables:
   - Create a .env file in the frontend folder.
   - Add the following variables:
     env
     REACT_APP_API_URL=http://localhost:5000
     
4. Start the frontend application:
   sh
   npm start
   

## Assumptions & Design Decision
### Assumptions:
- Users book appointments in fixed time slots (e.g., 30-minute intervals).
- An appointment cannot be booked if the slot is already occupied.
- Only registered users can book appointments.
- Admin users have full control over managing appointments and user accounts.
- The system handles time zones based on the server's configuration.

### Design Decisions:
- *Node.js & Express* were chosen for the backend to efficiently handle REST API requests.
- *MongoDB* was selected due to its flexibility in managing user and appointment data.
- *React* was chosen for the frontend due to its component-based structure and state management capabilities.
- *Styled Components* were used for styling instead of Tailwind CSS for a more modular and scoped styling approach.
- *JWT-based authentication* ensures secure session management.
- *Error handling and validation* are implemented at both frontend and backend levels to ensure data integrity.

---
## Future Improvements
- Implement real-time booking updates using WebSockets.
- Add payment integration for paid bookings.
- Expand availability settings for flexible scheduling.
