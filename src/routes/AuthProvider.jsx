import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./../pages/Login.jsx";
import Signup from "./../pages/Signup.jsx";
import ExpendiDetail from "./../pages/ExpendiDetail.jsx";
import Addform from "./../components/Addform.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import PublicRoute from "./PublicRoute.jsx";

const SharedRouter = () => (
  <>
    <Router>
      <Routes>
        <Route path="/login" element={<PublicRoute />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Addform />} />
          <Route path="/detail/:id" element={<ExpendiDetail />} />
        </Route>
      </Routes>
    </Router>
  </>
);

export default SharedRouter;
