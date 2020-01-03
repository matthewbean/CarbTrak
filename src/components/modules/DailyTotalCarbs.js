import React, { useContext } from 'react'
import FoodContext from '../../context/food/foodContext'

const DailyTotalCarbs = () => {
    const foodContext = useContext(FoodContext);
    const { getTotalCarbs } = foodContext
    return (
        <div>
<div>DailyTotal: {getTotalCarbs()}</div>
        </div>
    )
}

export default DailyTotalCarbs
