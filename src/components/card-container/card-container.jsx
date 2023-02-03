import Card from "../card/card"
import DATA from '../../data/data.json'
// import { useEffect, useState } from "react";
import { TypesForCode, TypesForName } from "../../utils/types";
// import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const CardContainer = () => {
    // eslint-disable-next-line
    let data = [...DATA]

    const [cars, setCars] = useState(data)

    // const { type } = useParams()
    //  ***!!!!!!!!!!!!!!!!!!!!!!!**** 
    // ------------------>>>>>   react router bilan qilish bu taskni xato, router sahifasi 2dan kop bogan saytlada ishlatiladi     <<< ----------------------
    // 
        
        
        
    // search
    function searchHandler(searchString) {
        setCars(data.filter(car => car.name.toLowerCase().includes(searchString.toLowerCase())))
    } 


    return (
        <div style={{ width: "1080px", margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center' }}>Card Container</h1>
            <div style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
                <input style={{ margin: '1rem' }} type="text" onChange={(e) => searchHandler(e.target.value)} placeholder={'Seach...'} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', margin: '2rem auto' }}>
                {/* FILTER BUTTONS */}
                <button onClick={() => setCars(data)} >All</button>   
                <button onClick={() => setCars(data.filter(d => d.type === parseInt(TypesForCode.Chevrolet)))}>{TypesForName[TypesForCode.Chevrolet]}</button>   
                <button onClick={() => setCars(data.filter(d => d.type === parseInt(TypesForCode.BMW)))}>{TypesForName[TypesForCode.BMW]}</button>   
                <button onClick={() => setCars(data.filter(d => d.type === parseInt(TypesForCode.Mercedes)))}>{TypesForName[TypesForCode.Mercedes]}</button>   
            </div>

            {/* CARD CONTAINER */}
            <div style={{ width: "100%", display: 'flex', justifyContent: 'space-between' ,flexWrap: 'wrap', gap: '2rem' }}>
                {
                    cars.map((car, i) => {
                        return (
                            // CARD: (EACH GETS A CAR OBJECT AND RENDERS IT WITH CAR INFO)
                            <Card car={car} key={ i } />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardContainer