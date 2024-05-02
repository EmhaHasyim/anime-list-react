import Footer from "./components/layouts/Footer/Footer";
import Header from "./components/layouts/Header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from "./pages/Search/Search";
import Anime from "./pages/Anime/Anime";

const App = () => {
    return (
        <>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/search/:valueSearch" element={<Search/>}/>
                    <Route path="/anime/:id" element={<Anime/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    )
}

export default App