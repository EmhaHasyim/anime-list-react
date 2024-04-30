import Footer from "./components/layouts/Footer/Footer";
import Header from "./components/layouts/Header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from "./pages/Search/Search";

const App = () => {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/search/:valueSearch" element={<Search/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    )
}

export default App