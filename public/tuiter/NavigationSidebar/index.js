const NavigationSidebar = (active) => {
    return (`
      <div class="list-group">
        <a class="list-group-item "><i class="fa-brands fa-twitter"></i></a>
        <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}">
            <i class="fa-solid fa-house-chimney"></i>
            <span class="d-none d-xl-inline-block"> Home</span>
        </a>
        <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}">
            <i class="fa-solid fa-hashtag"></i>
            <span class="d-none d-xl-inline-block"> Explore</span>
        </a>
        <a href="" class="list-group-item list-group-item-action ${active === 'notification' ? 'active' : ''}">
            <i class="fa-solid fa-bell"></i>
            <span class="d-none d-xl-inline-block"> Notifications</span>
        </a>
        <a href="" class="list-group-item list-group-item-action ${active === 'message' ? 'active' : ''}">
            <i class="fa-solid fa-envelope"></i>
            <span class="d-none d-xl-inline-block"> Messages</span>
        </a>
        <a href="../bookmarks/index.html" class="list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}">
            <i class="fa-solid fa-bookmark"></i>
            <span class="d-none d-xl-inline-block"> Bookmarks</span>
        </a>
        <a href="" class="list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}">
            <i class="fa-solid fa-list"></i>
            <span class="d-none d-xl-inline-block"> Lists</span>
        </a>
        <a href="../profileinit.html" class="list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}">
            <i class="fa-solid fa-user"></i>
            <span class="d-none d-xl-inline-block"> Profile</span>
        </a>
        <a href="" class="list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}">
            <i class="fa-solid fa-comment-dots"></i>
            <span class="d-none d-xl-inline-block"> More</span>
        </a>
      </div>
      <button class="btn btn-primary w-100 mt-1 rounded-pill">Tuit</button>
    `);
}

// const testNavigationSidebar = () => {
//     $('#sidebar').append(`${NavigationSidebar()}`);
// }
// $(testNavigationSidebar);

export default NavigationSidebar;