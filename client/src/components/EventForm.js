import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_EVENT } from '../../utils/mutations';
import { QUERY_EVENTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const EventForm = () => {

  

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try{
            const {data} = await addEvent({
                variables:{
                    eventText,
                    eventAuthor: Auth.getProfile().data.username,
                },
            });
            
            setEventText('');
        }catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

           };

           return (
              <div>
                   <h3>Add An Art Event!</h3>
                   <h2>Found a new art event? Share here for others to view!</h2>
           
                  
             </div>



           
           )
           
}
