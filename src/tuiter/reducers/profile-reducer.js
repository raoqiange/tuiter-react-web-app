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
    dateOfBirth : '01/01/2022',
    dateJoined: '10/2022',
    followingCount: 2222,
    followersCount: 2222
}

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            const updatedProfile = action.payload;
            let [firstName, ...lastName] = updatedProfile.name.split('/');
            lastName = lastName.join(' ');
            const bio = updatedProfile.bio;
            const location = updatedProfile.location;
            const website = updatedProfile.website;
            const [year, month, day] = updatedProfile.birthday.split('-');
            const dateOfBirth = [month, day, year].join('/');
            return {...state, firstName, lastName, bio, location, website, dateOfBirth}
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;