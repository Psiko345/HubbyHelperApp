import React from 'react'
import { Button } from '../Button'



const apiUrl = "http://localhost:6060/api/addGiftToUser/"

const SaveGift = ({ chosenGift }) => {


    const giftToBeSaved = chosenGift;
    console.log(giftToBeSaved)

    return (
        <div>
            <Button>Save gift to profile?</Button>
        </div>
    )
}

export default SaveGift;