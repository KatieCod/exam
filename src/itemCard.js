import React from "react"

function ItemCard(props) {
    return (
        <div className="container text-center">
            {props.itemCard.map(item => <div class="card" style={{ width: "18rem" }}>
                <img class="card-img-top" src={item.image} alt="Card image cap" />
                <div class="card-body">
                    <h3 class="card-text">{item.name} {item.price}$</h3>
                    <p class="card-text">{item.description}</p>
                </div>
                <button onClick={props.openForm} type="button" class="btn btn-outline-success">Add a new item</button>
            </div>)}
        </div>
    )
}

export default ItemCard;