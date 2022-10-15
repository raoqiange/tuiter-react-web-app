import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import {Route, Routes} from "react-router";

function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-lg-1 col-xl-2">
                <NavigationSidebar />
            </div>
            <div className="col-10 col-lg-6 col-xl-6">
                <Routes>
                    <Route path="/home" element={<HomeComponent />} />
                    <Route path="/explore" element={<ExploreComponent />} />
                </Routes>
            </div>
            <div className="d-none d-lg-block col-lg-5 col-xl-4">
                <WhoToFollowList />
            </div>
        </div>
    )
}

export default Tuiter;