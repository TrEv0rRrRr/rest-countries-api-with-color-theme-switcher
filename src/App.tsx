import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import CountryDetails from "./pages/CountryDetails";
import Main from "./pages/Main";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/country/:name" element={<CountryDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
