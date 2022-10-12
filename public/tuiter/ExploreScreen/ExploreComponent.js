import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div class="row">
            <div class="col-11 position-relative">
                <input class="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                <i class="fa-solid fa-magnifying-glass position-absolute wd-search-tuiter"></i>
            </div>
            <div class="col-1">
                <i class="fa-solid fa-gear text-primary wd-explore-gear"></i>
            </div>
        </div>

        <ul class="nav nav-tabs mt-2 mb-2">
            <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
            </li>
        </ul>

        <div class="position-relative">
            <img class="w-100"
                 src="../../images/spacex.png">
            <h1 class="position-absolute bottom-0 left-0 text-secondary">SpaceX's Starship</h1>
        </div>

        ${PostSummaryList()}
    `)
}

export default ExploreComponent;