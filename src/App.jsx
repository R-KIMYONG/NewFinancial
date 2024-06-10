import "./App.css";
import Addform from "@components/Addform";
import { GlobalStyle } from "@StyledComponents/GlobalStyle.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExpendiDetail from "@pages/ExpendiDetail";


function App() {
  //각항목을 담은 state
  // const [expenses, setExpenses] = useState(() => {
  //   const localData = localStorage.getItem("mylocalData");
  //   return localData ? JSON.parse(localData) : fakeData;
  // });
  // const [activeIndex, setActiveIndex] = useState(() => {
  //   const monthIndex = localStorage.getItem("monthIndex");
  //   return monthIndex ? JSON.parse(monthIndex) : new Date().getMonth() + 1;
  // });

  // useEffect(() => {
  //   localStorage.setItem("mylocalData", JSON.stringify(expenses));
  // }, [expenses]);

  // const memoizedSetExpenses = useCallback((newExpenses) => {
  //   setExpenses(newExpenses);
  // }, []);

  // const memoizedSetActiveIndex = useCallback((newIndex) => {
  //   setActiveIndex(newIndex);
  // }, []);

  // const contextValue = useMemo(
  //   () => ({
  //     expenses,
  //     activeIndex,
  //     setExpenses: memoizedSetExpenses,
  //     setActiveIndex: memoizedSetActiveIndex,
  //   }),
  //   [expenses, activeIndex, memoizedSetExpenses, memoizedSetActiveIndex]
  // );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Addform />} />
          <Route path="/detail/:id" element={<ExpendiDetail />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
