import Curriculum from "./components/curriculum/Curriculum"
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import CandidateSinglePage from "./views/CandidateSinglePage";
import ManageJobsPage from "./views/ManageJobsPage";
import { useEffect } from "react";
import ApiRequest from "./services/apiRequest";
import LoginModalProvider from "./providers/LoginModalProvider";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import EmployerSinglePage from "./views/EmployerSinglePage";
import ChangePassword from "./views/ChangePassword";


function App() {
  //ckeck if there is a remembered user and log him in if there is, using refresh token for authentication and recieve new access token
  useEffect(() => {
    const handleRememberedUser = async () => {
      if (!localStorage.getItem("refreshToken")) return;

      const response = await ApiRequest.refresh(
        localStorage.getItem("refreshToken")
      );
      if (!response.accessToken) return;

      if (response.accessToken) {
        sessionStorage.setItem("accessToken", response.accessToken);
        sessionStorage.setItem("userId", response.id);
        sessionStorage.setItem("role", response.role);
      }
      //!!!!!!!!!!!Here we should redirect to the user profile page depending on the role (Part of David Bonora's task)
    };
    (async () => handleRememberedUser())();
  }, []);
  return (

    <Router>
      <LoginModalProvider>
        <Header />
      </LoginModalProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* aqui proteccion de rutas */}
        <Route path="/candidate/:id" element={<CandidateSinglePage />} />
        <Route path="/candidate/curriculum" element={<Curriculum/ >} />
        <Route path="/employer/:id" element={<EmployerSinglePage />} />
        {/*Candidates List Routes <Route path="/candidate/all-candidates" element={<CandidateList />} />
        <Route
          path="/candidate/:loginId"
          element={"<DetailCandidate/>QUITAR COMILLAS"}
        /> */}
        <Route path='/job/employer-jobs' element={<ManageJobsPage />} />
        <Route path='/auth/change-password' element={<ChangePassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
