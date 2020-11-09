import React, { useState, useEffect } from 'react'
import { chosenGift } from './Gift_generator'
import necklaceIcon from '../../icons/necklace'


function IconGenerator({ chosenGift }) {

    let chosenGiftIcon = ''

    const matchGiftNameToIcon = () => {
        if (chosenGift.name === "Necklace")
            return '../'
    }

}