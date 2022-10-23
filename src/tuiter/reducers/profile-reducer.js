import {createSlice} from "@reduxjs/toolkit";

const profile = {
    firstName: 'Rachel',
    lastName: 'Rao',
    handle: 'rachelrao',
    profilePicture: 'pikachu.png',
    bannerPicture: 'banner.png',
    bio: 'Music, Anime lover, Software Engineer',
    website: 'www.rachelrrrrr.com',
    location: 'Vancouver, Canada',
    dataOfBirth : 'unknown',
    dataJoined: '10/2022',
    followingCount: 2222,
    followersCount: 2222
}

const profileSlice = createSlice({
    name: "profile",
    initialState: profile
});

export default profileSlice.reducer;