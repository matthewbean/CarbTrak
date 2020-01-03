import React, { useContext } from 'react'
import FoodContext from '../../context/food/foodContext'

const DailyTotalFat = () => {
    const foodContext = useContext(FoodContext);
    const { getTotalFat } = foodContext
    return (
        <div>
<div>DailyFat: {getTotalFat()}</div>
        </div>
    )
}

export default DailyTotalFat