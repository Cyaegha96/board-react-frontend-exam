import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout"
import Home from "../pages/Home"
import JoinPage from "../pages/JoinPage";
import BoardPage from "../pages/BoardPage"
import MyPage from "../pages/MyPage";
import DetailPage from "../pages/DetailPage";
import WritePage from "../pages/WritePage";
import EditPage from "../pages/EditPage";

const AppRouter = () => {

    return (
        
        <Router>
            <Routes> 

            <Route index path="/" element={<MainLayout><Home/></MainLayout>}></Route>
             <Route  path="/joinPage" element={<MainLayout><JoinPage/></MainLayout>}></Route>
               <Route  path="/mypage" element={<MainLayout><MyPage/></MainLayout>}></Route>
              <Route path="/board" element={<MainLayout><BoardPage/></MainLayout>}></Route>
                <Route  path="/board/detail/:id" element={<MainLayout><DetailPage/></MainLayout>}></Route>
                <Route path={"/board/write"} element={<MainLayout> <WritePage></WritePage></MainLayout>}> </Route>
                <Route path={"/board/update/:id"} element={<MainLayout> <EditPage></EditPage></MainLayout>}> </Route>
            </Routes>
        </Router>
    )

}

export default AppRouter;