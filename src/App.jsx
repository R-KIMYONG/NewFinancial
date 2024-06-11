import "./App.css";
import { GlobalStyle } from "@/styledComponents/GlobalStyle.jsx";
import SharedRouter from "./routes/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={2000}/>
      <SharedRouter />
      <GlobalStyle />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Addform />} />
          <Route path="/detail/:id" element={<ExpendiDetail />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle /> */}
    </>
  );
}

export default App;
