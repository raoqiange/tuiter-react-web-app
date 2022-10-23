import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    const navigate = useNavigate();

    const updateProfileHandler = () => {
        //call dispatch
        navigate('/tuiter/profile');
    }
    return (
        <>
            <Link to="/tuiter/profile">
                <i className="bi bi-x fs-4 text-black"></i>
            </Link>

            <span className="text-black fw-bold fs-4 ms-5">Edit Profile</span>
            <button
                className="btn btn-dark rounded-pill float-end"
                onClick={updateProfileHandler}
            >
                Save
            </button>
            <p className="float-done"></p>
            {profile.firstName}
        </>
    )
}

export default EditProfile;