import "./App.css";
import SharedRouter from "./routes/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./GlobalStyle";

``
function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={1500} />
      <SharedRouter />
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
