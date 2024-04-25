import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />} />
        </>
    )
)

const App = () => {
    return (
        <>
            <section className="p-2">
                <RouterProvider router={router} />
            </section>
        </>
    )
}

export default App