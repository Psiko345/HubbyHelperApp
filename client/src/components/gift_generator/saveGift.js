import React from 'react'
import Button from '@material-ui/core/Button';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";


const SaveGift = ({ chosenGift }) => {

    const { user, getAccessTokenSilently } = useAuth0();

    const giftToBeSaved = chosenGift;

    const saveGiftToUser = () => {
        getAccessTokenSilently().then(
            (token) => {
                fetch(`/api/addGiftToUser?email=${user.email}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    method: "post",
                    body: JSON.stringify(giftToBeSaved)
                }).then(res => {
                    console.log(res)
                })
            })
    }

    return (
        <div>
            <Button variant="contained" color="secondary" onClick={saveGiftToUser}>Save gift to profile?</Button>
        </div>
    )
}

export default SaveGift;