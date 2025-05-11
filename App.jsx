// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Pages and Components
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Services from './pages/Services';
import Dashboard from './pages/Dashboard';
import PaymentPage from './pages/PaymentPage';
import Bookings from './pages/BookingsPage';
import BookingForm from './pages/BookingForm';
import ServiceHistory from './pages/ServiceHistoryPage';
import ServiceDetails from './pages/ServiceDetailsPage';

import CleaningServices from './homeservicespages/Cleaning Services';
import HomeImpovement from './homeservicespages/Home Improvement';
import MaintenanceRepairServices from './homeservicespages/Maintenance and Repair Services';
import OutdoorandSeasonalServices from './homeservicespages/Outdoor and Seasonal Services';
import ConstructionandRenovation from './homeservicespages/Construction and Renovation';
import SecurityandUtility from './homeservicespages/Security and Utility';

import ProfilePage from './user/ProfilePage';
import PaymentInfo from './services/PaymentInfo';
import Support from './services/Support';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/payment" element={<PaymentPage />} />?
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/bookings"
          element={isLoggedIn ? <Bookings /> : <Navigate to="/login" />}
        />
        <Route
          path="/payment-info"
          element={isLoggedIn ? <PaymentInfo /> : <Navigate to="/login" />}
        />
        <Route
          path="/support"
          element={isLoggedIn ? <Support /> : <Navigate to="/login" />}
        />
        <Route
          path="/service-history"
          element={isLoggedIn ? <ServiceHistory /> : <Navigate to="/login" />}
        />
        <Route
          path="/service-details/:serviceId"
          element={isLoggedIn ? <ServiceDetails /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={isLoggedIn ? <ProfilePage /> : <Navigate to="/login" />}
        />

        {/* Home Services Pages */}
        <Route
          path="/book/cleaning-services"
          element={isLoggedIn ? <CleaningServices /> : <Navigate to="/login" />}
        />
        <Route
          path="/book/home-improvement"
          element={isLoggedIn ? <HomeImpovement /> : <Navigate to="/login" />}
        />
        <Route
          path="/book/maintenance-& repair-services"
          element={isLoggedIn ? <MaintenanceRepairServices /> : <Navigate to="/login" />}
        />
        <Route
          path="/book/construction-and renovation"
          element={isLoggedIn ? <ConstructionandRenovation /> : <Navigate to="/login" />}
        />
        <Route
          path="/book/security-and utility"
          element={isLoggedIn ? <SecurityandUtility /> : <Navigate to="/login" />}
        />
        <Route
          path="/book/outdoor-and seasonal services"
          element={isLoggedIn ? <OutdoorandSeasonalServices /> : <Navigate to="/login" />}
        />

        {/* ✅ Dynamic Booking Route for Any Service */}
        <Route
          path="/book/:serviceName"
          element={isLoggedIn ? <BookingForm /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
