import React from 'react';
const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item "><i className="bi bi-twitter"></i></a>

            <a href="../HomeScreen/index.html"
               className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                <i className="bi bi-house-door-fill me-2"></i>
                <span className="d-none d-xl-inline-block"> Home</span>
            </a>

             <a href="../ExploreScreen/index.html"
                className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                <i className="bi bi-hash me-2"></i>
                <span className="d-none d-xl-inline-block"> Explore</span>
            </a>

            <a href="" className={`list-group-item list-group-item-action ${active === 'notification' ? 'active' : ''}`}>
                <i className="bi bi-bell-fill me-2"></i>
                <span className="d-none d-xl-inline-block"> Notifications</span>
            </a>

            <a href="" className={`list-group-item list-group-item-action ${active === 'message' ? 'active' : ''}`}>
                <i className="bi bi-envelope-fill me-2"></i>
                <span className="d-none d-xl-inline-block"> Messages</span>
            </a>

            <a href="../bookmarks/index.html" className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
                <i className="bi bi-bookmark-fill me-2"></i>
                <span className="d-none d-xl-inline-block"> Bookmarks</span>
            </a>

            <a href="" className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
                <i className="bi bi-list-ul me-2"></i>
                <span className="d-none d-xl-inline-block"> Lists</span>
            </a>

            <a href="../profile.html"
               className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'profile' : ''}`}>
                <i className="bi bi-person-fill me-2"></i>
                <span className="d-none d-xl-inline-block"> Profile</span>
            </a>

            <a href="" className={`list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}`}>
                <i className="bi bi-three-dots me-2"></i>
                <span className="d-none d-xl-inline-block"> More</span>
            </a>

        </div>
    );
}

export default NavigationSidebar;