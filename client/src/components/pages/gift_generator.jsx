import React from 'react';
import BudgetSelection from "../gift_generator/BudgetSelection"
import GiftCategories from "../gift_generator/gift_categories"

function GiftGenerator() {
    return (
        <div className="App-main-page">
            <BudgetSelection />
            <GiftCategories />
        </div>
    )
}

export default GiftGenerator;