import React from 'react';
import Foods from '../components/modules/Foods';
import AddFood from '../components/modules/AddFood';



function Home() {
    return (
        <div className = "container">
            <div className = "row">
                <AddFood />
                <Foods />  
            </div>
            
        </div>
    )
}

export default Home
