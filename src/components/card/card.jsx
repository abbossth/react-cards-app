import {TypesForName} from "../../utils/types"

const Card = ({ car }) => {
    return (
        <div>
            <p>Name: {car.name}</p>
            <p>Type: { TypesForName[car.type] }</p>
            <img width={200} src={car.photo} alt={car.name} />
        </div>
    )
}

export default Card