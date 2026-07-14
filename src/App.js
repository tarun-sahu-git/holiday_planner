import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Website pages
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './pages/ScrollToTop';
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Login from './components/Login'
import TravellerPlanningForm from './components/TravellerPlanningForm'
import UserTravelPlan from "./components/UserTravelPlan";

// Dashboard pages
import Dashboardlayout from './components/Dashboardlayout';
import DashboardContent from './components/DashboardContent';
import BookingConfirmation from './components/BookingConfirmation';
import AdminBookings from './components/AdminBookings';

// Registerd page in dashboard
import RegiPopularDestination from './components/RegiPopularDestination'
import RegiDiscount from './components/RegiDiscount';
import TrackBooking from './components/TrackBooking';

function App() {
  return (
   
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* ===== Public Website Routes (with Header/Footer) ===== */}
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="/planingform" element={<TravellerPlanningForm/>} />
              <Route path="/bookingconfirmation" element={<BookingConfirmation/>} />
               <Route path="/track-booking" element={<TrackBooking/>}/>
               <Route path="/travel-plan" element={<UserTravelPlan />} />
         
         
        </Route>
           
          <Route path="/login" element={<Login />} />

        {/* ===== Dashboard Routes (No Header/Footer) ===== */}
        

        {/*............................. for dashboard route...................... */}
        <Route path='/dashboardlayout'element={<Dashboardlayout/>}>
        <Route  index element={<DashboardContent/>}></Route>
         <Route path='RegiPopularDestination'element={<RegiPopularDestination/>}></Route>
          <Route path='RegiDiscount'element={<RegiDiscount/>}></Route>
           <Route path='adminupdated'element={<AdminBookings/>}></Route>
        </Route>
      </Routes>

      <FloatingWhatsApp
        phoneNumber="1234567890"
        accountName="195 Holidays"
        chatMessage="Hello! How can we help you?"
        placeholder="Type a message..."
      />
    </BrowserRouter>
  );
}

export default App;

// ===== Layout for website pages with Header/Footer =====
function WebsiteLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}