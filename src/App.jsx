import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import TestimonialPage from "./pages/testimonial/testimonialPage";
import SignIn from "./pages/signIn/signInPage";
import ForgetPassword from "./pages/forgetPassword/forgetPassword";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="testimonials" element={<TestimonialPage />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="forgetPassword" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
