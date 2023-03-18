import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../views/HomePage';
import CandidateSinglePage from '../views/CandidateSinglePage';
import ManageJobsPage from '../views/ManageJobsPage';
import LoginModalProvider from '../providers/LoginModalProvider';
import Header from '../components/HeaderFooter/Header';
import Footer from '../components/HeaderFooter/Footer';
import ForgottenPasswordPage from '../views/ForgottenPasswordPage';
import ResetPasswordPage from '../views/ResetPasswordPage';
import CandidatesDashboard from '../views/CandidatesDashboard';
import Allaplicants from '../views/AllAplicants';
import EmployerSinglePage from '../views/EmployerSinglePage';
import ChangePassword from '../views/ChangePassword';
import Curriculum from '../components/curriculum/Curriculum';
import ErrorPage from '../views/ErrorPage';
import UnauthorizedPage from '../views/UnauthorizedPage';
import { JobList } from '../views/JobList';
import RequireAuth from '../auth/RequireAuth';
import CompanyProfile from '../views/CompanyProfile.component';
import CandidateProfile from '../views/CandidateProfile.component';
const Routing = () => {
    return (
        <Router>
            <LoginModalProvider>
                <Header />
            </LoginModalProvider>
            <Routes>
                {/* Rutas no protegidas */}
                <Route path="/" element={<HomePage />} />
                <Route
                    path="forgottenpassword"
                    element={<ForgottenPasswordPage />}
                />
                <Route
                    path="reset-password/:token"
                    element={<ResetPasswordPage />}
                />
                <Route path="unauthorized" element={<UnauthorizedPage />} />
                <Route path="*" element={<ErrorPage />} />

                {/* Ruta con authenticacion con acceso tanto para candidatos como para empleadores */}
                <Route path="auth" element={<RequireAuth allowedRole="both" />}>
                    <Route
                        path="change-password"
                        element={<ChangePassword />}
                    />
                </Route>
                {/* Rutas de candidatos */}
                <Route
                    path="candidate-dashboard"
                    element={<RequireAuth allowedRole="candidate" />}
                >
                    <Route path=":id" element={<CandidateSinglePage />} />
                    <Route path="curriculum" element={<Curriculum />} />
                    <Route
                        path="employer/:id"
                        element={<EmployerSinglePage />}
                    />
                    <Route path="profile" element={<CandidateProfile />} />
                    <Route path="job/job-list" element={<JobList />} />
                    {/* <Route path="/job/job-single/:jobId" element={<JobInfo />} /> */}
                </Route>

                {/* Rutas de empleadores */}
                <Route
                    path="employers-dashboard"
                    element={<RequireAuth allowedRole="employer" />}
                >
                    <Route
                        path="all-candidates"
                        element={<CandidatesDashboard />}
                    />
                    <Route path="profile" element={<CompanyProfile />} />
                    {/* Entiendo que la ruta all-applicants deberia de ir concatenado con job  !!!CONFIRMAR */}
                    <Route path="all-applicants" element={<Allaplicants />} />
                    <Route
                        path="job/employer-jobs"
                        element={<ManageJobsPage />}
                    />
                </Route>

                {/*Candidates List Routes <Route path="/candidate/all-candidates" element={<CandidateList />} />
      <Route
        path="/candidate/:loginId"
        element={<DetailCandidate/>}
      /> */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default Routing;
