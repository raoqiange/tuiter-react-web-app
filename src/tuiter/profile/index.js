import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Profile = () => {
    const profile = useSelector(state => state.profile);

    return (
        <>
            <Link to="/tuiter/edit-profile">
                <button className="btn btn-light fw-bold rounded-pill float-end">
                    Edit Profile
                </button>
            </Link>

            <h3>{profile.firstName}</h3>
            <p>@{profile.handle}</p>
            <p>{profile.bio}</p>
            <div>
                location, birthday, joined
            </div>
            <div>
                following,  follower
            </div>
        </>
    )
}

export default Profile;