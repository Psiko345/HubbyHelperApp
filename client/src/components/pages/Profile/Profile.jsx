import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useState, useEffect } from 'react';
import UserGiftDisplay from './ProfilePageComponents/UserGiftDisplay';

const apiUrl = "http://localhost:6060/api/findOrCreateUser"

const Profile = () => {
    const [hubbyUser, setHubbyUser] = useState();

    const { user, isAuthenticated, isLoading } = useAuth0();
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        console.log("Checking if hubbyUser...")
        console.log({ hubbyUser })

        if (hubbyUser)
            return;
        console.log("...Confirmed hubbyUser.")
        if (!isAuthenticated)
            return;
        // console.log("...not hubbyUser, creating...")

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
                        res.json().then(x => setHubbyUser(x));
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

            {hubbyUser && (
                <UserGiftDisplay user={user} gifts={hubbyUser.giftCollection} isAuthenticated={isAuthenticated} />
            )}
        </div>
    );

};

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <div>Loading ...</div>,
});