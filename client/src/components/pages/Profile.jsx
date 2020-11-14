import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useState, useEffect } from 'react';
// import axios from 'axios';

const apiUrl = "http://localhost:6060/api/findOrCreateUser"

const Profile = () => {
    const [hubbyUser, setHubbyUser] = useState(null);

    const { user, isAuthenticated, isLoading } = useAuth0();
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        console.log("got to start")
        if (hubbyUser)
            return;
        console.log("got to ifHubbyUser")
        if (!isAuthenticated)
            return;
        console.log("got after isAuth")

        getAccessTokenSilently().then(
            (token) => {
                console.log("got to token")
                console.log(user)
                const t = apiUrl + `?email=${user.email}`;
                console.log(t)

                fetch(t,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }).then(res => {
                        console.log(res);
                        setHubbyUser(res.json());
                        console.log("got to hubby user")
                    }
                    )
            }
        );
    })

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div>
            {isAuthenticated && (
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            )}
            {hubbyUser && (
                <p>Show hubbyUser.gifts</p>
            )}
        </div>
    );

};

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <div>Loading ...</div>,
});