import "./App.css";
import Header from "./components/Header";
import HeroSection from "./pages/Hero-section";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/Register-page";
import { Toaster } from "react-hot-toast";
import NotFound from "./components/NotFound";
import LoginPage from "./pages/Login-page";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import QuickFindAnswers from "./components/QuickFindAnswers";
import Events from "./components/Events";
import Invitations from "./pages/Dashboard/Invitations";
import ParcitipantPage from "./pages/ParticipantPage";

function App() {
  // Sample data for events
  const events = [
    {
      id: 1,
      title: "AI Scavenger Hunt",
      description:
        "Navigate through AI challenges and clues as you race to discover secrets and collect items!",
      date: "October 20, 2024",
      time: "10:00 AM - 12:00 PM",
    },
    {
      id: 2,
      title: "Trivia Trek Quiz",
      description: "Test your knowledge in our exciting quiz event with AI-themed questions.",
      date: "October 22, 2024",
      time: "2:00 PM - 3:30 PM",
    },
    {
      id: 3,
      title: "AI Ethics Dilemma Showdown",
      description:
        "Debate and navigate complex moral dilemmas related to AI in this exciting showdown!",
      date: "October 25, 2024",
      time: "4:00 PM - 6:00 PM",
    },
  ];

  // Event card component
  const EventCard = ({ event }) => (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-2xl font-bold text-customBlue mb-2">{event.title}</h3>
      <p className="text-gray-700 mb-2">{event.description}</p>
      <p className="text-gray-500 mb-1">Date: {event.date}</p>
      <p className="text-gray-500">Time: {event.time}</p>
    </div>
  );

  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HeroSection />
                <QuickFindAnswers />
                <div className="max-w-[1100px] mx-auto mt-6">
                  <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
                  {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <NotFound />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Header />
                <RegisterPage />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <AboutPage />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <ContactPage />
              </>
            }
          />
          <Route
            path="/events"
            element={
              <>
                <Header />
                <Events />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header />
                <LoginPage />
              </>
            }
          />
          <Route
            path="/invitations"
            element={
              <>
                <Invitations />
              </>
            }
          />
          <Route
            path="/participant/:eventId"
            element={
              <>
                <Header />
                <ParcitipantPage />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
