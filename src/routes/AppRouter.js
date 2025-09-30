import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout"
import Home from "../pages/Home"
import JoinPage from "../pages/JoinPage";
import BoardPage from "../pages/BoardPage"

const AppRouter = () => {

    return (
        
        <Router>
            <Routes> 

            <Route index path="/" element={<MainLayout><Home/></MainLayout>}></Route>
             <Route index path="/joinPage" element={<MainLayout><JoinPage/></MainLayout>}></Route>
              <Route index path="/boardPage" element={<MainLayout><BoardPage/></MainLayout>}></Route>
            </Routes>
        </Router>
    )

}

export default AppRouter;