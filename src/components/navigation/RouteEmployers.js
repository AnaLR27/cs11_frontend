import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "../wrapper/Profile";
import Postanewjob from "../wrapper/Postanewjob";
import Managejobs from "../wrapper/Managejobs";
import Deleteprofile from "../wrapper/Deleteprofile";
import Logout from "../wrapper/Logout";
import Changepassword from "../wrapper/Changepassword";
// import Home from "../wrapper/Home";
// import MenuEmployers from "../MenuEmployers";

const RouteEmployers = () => {
  return (
    <div>
      {/* <MenuEmployers /> */}
      <Router>
        <Routes>
          <Route exact path="/Profile" Component={<Profile />} />
          <Route exact path="/Postanewjob" Component={<Postanewjob />} />
          <Route exact path="/Managejobs" Component={<Managejobs />} />
          <Route exact path="/Changepassword" Component={<Changepassword />} />
          <Route exact path="/Deleteprofile" Component={<Deleteprofile />} />
          <Route exact path="/Logout" Component={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouteEmployers;
