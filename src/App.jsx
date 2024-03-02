import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import TestimonialPage from "./pages/testimonial/testimonialPage";
import SignIn from "./pages/signIn/signInPage";
import ForgetPassword from "./pages/forgetPassword/forgetPassword";

function App() {
  return (
    <BrowserRouter>
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
