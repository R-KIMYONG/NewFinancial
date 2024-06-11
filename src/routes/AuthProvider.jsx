import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ExpendiDetail from "../pages/ExpendiDetail";
import Addform from "../components/Addform";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

// PrivateRoute : 로그인이 필요한 페이지에 접근할 수 있도록 하는 컴포넌트
// 로그인이 되어있지 않은 사용자는 login 페이지로 리다이렉트
// const PrivateRoute = ({ element: Element, ...rest }) => {
//   const { isAuthenticated } = useSelector((state) => state.user);
//   // const { isAuthenticated } = useContext(AuthContext);
//   return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
// };

// PublicRoute : 로그인이 필요없는 페이지에 접근할 수 있도록 하는 컴포넌트
// 로그인이 되어있는 사용자는 mypage로 리다이렉트
// const PublicRoute = ({ element: Element, ...rest }) => {
//   const { isAuthenticated } = useSelector((state) => state.user);
//   return !isAuthenticated ? <Element {...rest} /> : <Navigate to="/mypage" />;
// };

const SharedRouter = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<PublicRoute element={Login} />} />
      <Route path="/signup" element={<PublicRoute element={Signup} />} />
      <Route path="/" element={<PrivateRoute element={Addform} />} />
      <Route
        path="/detail/:id"
        element={<PrivateRoute element={ExpendiDetail} />}
      />
    </Routes>
  </Router>
);

export default SharedRouter;
