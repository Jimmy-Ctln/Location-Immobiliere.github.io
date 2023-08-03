import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/header";
import { AboutUs } from "./pages/About_Us/AboutUs";
import { ErrorPage } from "./pages/ErrorPage/errorPage";
import { Footer } from "./components/Footer/footer";
import { PropertyRental } from './pages/Property_Rental/PropertyRental'
import './style/App.scss'
import './style/mainContainer.scss'


function App() {
  return (
    <>
      <BrowserRouter>
      <div className="main-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<AboutUs />} />
          <Route path="/property-rental/:propertyRentalId" element={<PropertyRental/>} />
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </div>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
