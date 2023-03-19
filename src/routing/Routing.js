import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import CandidateSinglePage from "../views/CandidateSinglePage";
import ManageJobsPage from "../views/ManageJobsPage";
import LoginModalProvider from "../providers/LoginModalProvider";
import Header from "../components/HeaderFooter/Header";
import Footer from "../components/HeaderFooter/Footer";
import ForgottenPasswordPage from "../views/ForgottenPasswordPage";
import ResetPasswordPage from "../views/ResetPasswordPage";
import CandidatesDashboard from "../views/CandidatesDashboard";
import Allaplicants from "../views/AllAplicants";
import EmployerSinglePage from "../views/EmployerSinglePage";
import ChangePassword from "../views/ChangePassword";
import Curriculum from "../components/curriculum/Curriculum";
import ErrorPage from "../views/ErrorPage";
import UnauthorizedPage from "../views/UnauthorizedPage";
import { JobList } from "../views/JobList";
import CandidateList from "../views/CandidateList";
import RequireAuth from "../auth/RequireAuth";
import DetailCandidate from "../components/detailCandidate/DetailCandidate";
import Prueba from "../components/Prueba";
import { useEffect } from "react";
import ApiRequest from "../services/apiRequest";

const Routing = () => {
  //ckeck if there is a remembered user and log him in if there is, using refresh token for authentication and recieve new access token
  useEffect(() => {
    const handleRememberedUser = async () => {
      if (!localStorage.getItem("refreshToken")) return;

      const response = await ApiRequest.refresh(
        localStorage.getItem("refreshToken")
      );
      if (!response.accessToken) return;

      if (response.accessToken) {
        //save tokens in sessionStorage to keep user logged in only for development purposes, in production, token should be saved in state and passed to context
        sessionStorage.setItem("accessToken", response.accessToken);
        sessionStorage.setItem("userId", response.id);
        sessionStorage.setItem("role", response.role);
      }
    };
    (async () => handleRememberedUser())();
  });
  return (
    <Router>
      <LoginModalProvider>
        <Header />
      </LoginModalProvider>
      <Routes>
        {/* Rutas no protegidas */}
        <Route path='/' element={<HomePage />} />
        <Route path='forgottenpassword' element={<ForgottenPasswordPage />} />
        <Route path='reset-password/:token' element={<ResetPasswordPage />} />
        <Route path='unauthorized' element={<UnauthorizedPage />} />
        <Route path='*' element={<ErrorPage />} />

        {/* Ruta con authenticacion con acceso tanto para candidatos como para empleadores */}
        <Route path='auth' element={<RequireAuth allowedRole='both' />}>
          <Route path='change-password' element={<ChangePassword />} />
        </Route>

        {/* Rutas de candidatos */}

        <Route element={<RequireAuth allowedRole='candidate' />}>
          
          {/* Ruta para Componente de Bonora  */}
          <Route path='candidate-dashboard' element={<CandidatesDashboard />}>
            {/* Ruta para componente de RAFA
         <Route path="profile/:id" element={<CandidateProfile />} />
        */}
            <Route path=':id' element={<CandidateSinglePage />} />
            <Route path='curriculum' element={<Curriculum />} />
            <Route path='employer/:id' element={<EmployerSinglePage />} />
            <Route path='job/job-list' element={<JobList />} />
            {/* <Route path="/job/job-single/:jobId" element={<JobInfo />} /> */}
          </Route>
        </Route>

        {/* Rutas de empleadores */}
        <Route element={<RequireAuth allowedRole='employer' />}>
          {/* Ruta para Componente de Ismael la dejo comentada hasta que este */}
          {/* <Route
       path='employers-dashboard'
       element={<EmployersDashboard />}
     > */}
          <Route path='employers-dashboard' element={<Prueba />}>
            {/* Ruta para componente de VERO
       <Route path="profile/:id" element={<EmployerProfile />} />
      */}
            <Route
              path='candidate/all-candidates'
              element={<CandidateList />}
            />
            <Route path='candidate/:loginId' element={<DetailCandidate />} />

            {/* Entiendo que la ruta all-applicants deberia de ir concatenado con job  !!!CONFIRMAR */}
            <Route path='all-applicants' element={<Allaplicants />} />
            <Route path='job/employer-jobs' element={<ManageJobsPage />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
