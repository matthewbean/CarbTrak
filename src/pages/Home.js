import React from 'react'
import Foods from '../components/modules/Foods'
import AddFood from '../components/modules/AddFood'
import DailyTotal from '../components/modules/DailyTotal'


function Home() {
    return (
        <div className = "container">
            <div className = "row">
                <AddFood />
                <Foods />  
            </div>
            <DailyTotal />
        </div>
    )
}

export default Home
