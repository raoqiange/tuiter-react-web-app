import React from 'react';
import PostSummaryList from '../post-summary-list';
import './index.css';

const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input className="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                    <i className="bi bi-search position-absolute wd-search-tuiter"></i>
                </div>
                <div className="col-1">
                    <i className="bi bi-gear-fill text-primary wd-explore-gear"></i>
                </div>
            </div>

            <ul className="nav nav-tabs mt-2 mb-2">
                <li className="nav-item">
                    <a className="nav-link active" href="/#">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link d-none d-md-block" href="/#">Entertainment</a>
                </li>
            </ul>

            <div className="position-relative">
                <img className="w-100 border-0"
                     src="/images/spaceship.png" alt="..."/>
                    <h1 className="position-absolute wd-post-title text-secondary">SpaceX's Starship</h1>
            </div>
            <PostSummaryList />
        </>
    )
}

export default ExploreComponent;