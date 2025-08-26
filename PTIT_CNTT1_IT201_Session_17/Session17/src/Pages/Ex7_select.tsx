import {type ChangeEvent, useState} from "react"


export default function Ex7(){
    const [city, setCity] = useState("")



    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setCity(e.target.value)
    }
    return(
        <div>
            <h3>Thành phố: {city}</h3>
            <select onChange={handleSelect}>
                <option value={""} >--</option>
                <option value={"Hà Nội"} >Hà Nội</option>
                <option value={"Hồ Chí Minh"}>Hồ Chí Minh</option>
                <option value={"Hải Phông"}>Hải Phông</option>
                <option value={"Ninh Bình"}>Ninh Bình</option>
            </select>
        </div>
    )
}