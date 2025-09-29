import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout"
import Home from "../pages/Home"

const AppRouter = () => {
    return (
        <Router>
            <Routes> 

            <Route index path="/" element={<MainLayout><Home/></MainLayout>}></Route>
            </Routes>
        </Router>
    )

}

export default AppRouter;