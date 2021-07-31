import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Jumbotron from '../components/Jumbotron';
import { ADD_EVENT } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {
  const [addEvent] = useMutation(ADD_EVENT);

  useEffect(() => {
    async function saveEvent() {
      const cart = await idbPromise('cart', 'get');
      const events = cart.map((item) => item._id);

      if (events.length) {
        const { data } = await addEvent({ variables: { events } });
        const eventData = data.addEvent.events;

        eventData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveEvent();
  }, [addEvent]);

  return (
    <div>
      <Jumbotron>
        <h1>Success!</h1>
        <h2>Your event was added!</h2>
        <h2>You will now be redirected to the events page.</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
