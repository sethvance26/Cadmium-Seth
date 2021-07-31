import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Cart from "../components/Cart";
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_LIST,
  UPDATE_EVENTS,
} from "../utils/actions";
import { QUERY_EVENTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import spinner from "../assets/spinner.gif";

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentEvent, setCurrentEvent] = useState({});

  const { loading, data } = useQuery(QUERY_EVENTS);

  const { events, cart } = state;

  useEffect(() => {
    // already in global store
    if (events.length) {
      setCurrentEvent(events.find((event) => event._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_EVENTS,
        events: data.events,
      });

      data.events.forEach((event) => {
        idbPromise("events", "put", event);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("events", "get").then((indexedEvents) => {
        dispatch({
          type: UPDATE_EVENTS,
          events: indexedEvents,
        });
      });
    }
  }, [events, data, loading, dispatch, id]);

  const addToList = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_LIST,
        event: { ...currentEvent, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentEvent, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentEvent._id,
    });

    idbPromise("cart", "delete", { ...currentEvent });
  };

  return (
    <>
      {currentEvent && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Events</Link>

          <h2>{currentEvent.name}</h2>

          <p>{currentEvent.description}</p>
          <p>{currentEvent.date}</p>
          <p>{currentEvent.locationName}</p>
          <p>{currentEvent.link}</p>
          <p>{currentEvent.category}</p>
          <p>{currentEvent.imageLink}</p>
          <p>{currentEvent.locationAddress}</p>

          <p>
            {/* <strong>Price:</strong>${currentProduct.price}{' '} */}
            <button onClick={addToList}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentEvent._id)}
              onClick={removeFromCart}
            >
              Remove from List
            </button>
          </p>

          <img src={`/images/${currentEvent.image}`} alt={currentEvent.name} />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
