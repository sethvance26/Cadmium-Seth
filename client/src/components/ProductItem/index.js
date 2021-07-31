import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_LIST, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function EventItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    date,
    name,
    _id,
    description,
    locationName,
    link,
    category,
    locationAddress,
    imageLink
  } = item;

  const { cart } = state

  const addToList = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_LIST,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className="card px-1 py-1">
      <Link to={`/events/${_id}`}>
        <img
          alt={name}
          // src={`/images/${image}`}
          
        />
        <p>{name}</p>
      </Link>
      <div>
        {description}
        {locationName}
        {locationAddress}
        {category}
        {date}
        {imageLink}
        {link}

      </div>
      {/* <div>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </div> */}
      <button onClick={addToList}>Add to List</button>
    </div>
  );
}

export default EventItem;
