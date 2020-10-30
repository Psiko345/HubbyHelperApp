import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from 'react';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {
        console.log({ isLoading })
    })

    useEffect(() => {
        console.log({ isAuthenticated })
    })

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    );

};

export default Profile;