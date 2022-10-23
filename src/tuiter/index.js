import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import {Route, Routes} from "react-router";
import whoReducer from "./reducers/who-reducer";
import postsSummaryReducer from "./reducers/posts-summary-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

const store = configureStore({
    reducer: {who: whoReducer, postsSummary: postsSummaryReducer, tuits: tuitsReducer}
});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar />
                </div>
                <div className="col-10 col-lg-6 col-xl-6">
                    <Routes>
                        <Route path="/*" element={<HomeComponent />} />
                        <Route path="/explore" element={<ExploreComponent />} />
                    </Routes>
                </div>
                <div className="d-none d-lg-block col-lg-5 col-xl-4">
                    <WhoToFollowList />
                </div>
            </div>
        </Provider>
    )
}

export default Tuiter;