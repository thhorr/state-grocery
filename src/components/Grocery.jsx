import { useState } from "react"
import { GroceryInput } from "./GroceryInput"
import { GroceryList } from "./GroceryList"
import { nanoid } from "nanoid"

const Grocery = () => {
    const [list, setList] = useState([]);
    const handleClick = (data) => {
        const payLoad = {
            title: data,
            status: false,
            id: nanoid(7)
        };
        setList([...list,payLoad])
    }

    const handleDelete = (id) => {
        setList(list.filter((t) => t.id != id))
    }
    return (
        <>
            <GroceryInput getData = {handleClick}></GroceryInput>
            {list.map((e) => (
                <GroceryList key={e.id} {...e} handleDelete={handleDelete}/>
            ))}
        </>
    )
}
export default Grocery;