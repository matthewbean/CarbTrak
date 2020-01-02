import React, { useContext } from 'react'
import FoodContext from '../../context/food/foodContext'

const DailyTotal = () => {
    const foodContext = useContext(FoodContext);
    const { getTotalCarbs } = foodContext
    return (
        <div>
<div>DailyTotal: {getTotalCarbs()}</div>
        </div>
    )
}

export default DailyTotal
