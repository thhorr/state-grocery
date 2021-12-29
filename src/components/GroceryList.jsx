import "./GroceryList.css";

export const GroceryList = ({ title ,status,id,handleDelete}) => {
    return (<>
        <div className="list">
             <div>{title}</div>
            <button className="listbtn" onClick={() => handleDelete(id)}>Delete</button>
        </div>
    </>)
}