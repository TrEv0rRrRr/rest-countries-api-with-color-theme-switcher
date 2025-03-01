import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import ThemeProvider from "./context/ThemeContext/ThemeProvider";
import CountryDetails from "./pages/CountryDetails";
import Main from "./pages/Main";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/country/:name" element={<CountryDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
