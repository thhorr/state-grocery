import { useState } from "react"

export const GroceryInput = ({getData}) => {
    const [txt, setTxt] = useState("")
    
    const handleChange = (e) => {
        setTxt(e.target.value);
    }

    const handleClick = () => {
        getData(txt);
    }

    return (
        <>
            <input type="text" placeholder="Enter the Grocery Item" onChange={handleChange}></input>
            <button onClick={handleClick}>Add Items</button>
        </>
    )
}