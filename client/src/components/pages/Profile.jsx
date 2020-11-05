import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useEffect } from 'react';
import axios from 'axios';


const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        getAccessTokenSilently().then(
            (token) => {
                fetch("http://localhost:6060/api/gifts/protected-message", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then(res => console.log(res))
            }
        );

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

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <div>Loading ...</div>,
});