import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ExpendiDetail from "../pages/ExpendiDetail";
import Addform from "../components/Addform";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
// import { GlobalStyle } from "../styledComponents/GlobalStyle";

const SharedRouter = () => (
  <>
    {/* <GlobalStyle /> */}
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
