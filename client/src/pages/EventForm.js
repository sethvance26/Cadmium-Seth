import React, { useState } from "react";
import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
import { ADD_EVENT } from '../utils/mutations';


import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const styles = {
  titleStyle: {
    textAlign: "center",
    fontFamily: "Rajdhani",
    fontSize: "50px",
  },
  listStyle: {
    listStyleType: "none",
  },
};

// import datePicker from "../utils/helpers";

const options = [
  { key: "g", text: "Gallery/Museum Opening", value: "gallery/museum opening" },
  { key: "a", text: "Artist Talk", value: "artist talk" },
  { key: "o", text: "Open Studios", value: "open studios" },
  { key: "f", text: "Film Screening", value: "film screening" },
  { key: "p", text: "Performance", value: "performance" },
];

function FormExampleFieldControl() {
  const [dateValue, setDateValue] = useState("");
  const [formState, setFormState] = useState({});
  const [addEvent] = useMutation(ADD_EVENT);

  const handleChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    if (!name && !value) return;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(formState);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const mutationResponse = await addEvent({
        variables: {
          name: formState.name,
          locationName: formState.locationName,
          locationAddress: formState.locationAddress,
          description: formState.description,
          link: formState.link,
          // date: formState.date,
          // imageLink: formState.imageLink,
          // category: formState.category,
        },
      });

    } catch (err) {
      console.log(err)
    }
  }
  return (

    <div className="form-container">

      <h1 style={styles.titleStyle}>Add Your Art Event Here!</h1>

      <Form onSubmit={handleFormSubmit}>
        <Form.Group widths="equal">
          <Form.Field
            onChange={(e) => {
              handleChange(e);
            }}
            control={Input}
            name="eventName"
            label="Event Name"
            placeholder="Event Name"
          />
          <Form.Field
            onChange={(e) => {
              handleChange(e);
            }}
            control={Input}
            name="locationName"
            label="Location Name"
            placeholder="Location Name"
          />
          <Form.Field
            onChange={(e) => {
              handleChange(e);
            }}
            name="eventType"
            control={Select}
            label="Event Type"
            options={options}
            placeholder="Event Type"
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            onChange={(e) => {
              handleChange(e);
            }}
            name="streetAddress"
            label="Street address"
            placeholder="Enter a Location"
            width={10}
          />
          <Form.Input
            onChange={(e) => {
              handleChange(e);
            }}
            name="address2"
            label="Address 2"
            // placeholder="Building, Suite or Apt. Number"
            width={8}
          />
          <Form.Input
            onChange={(e) => {
              handleChange(e);
            }}
            name="city"
            label="City"
            placeholder="City"
            width={8}
          />
          <Form.Input
            onChange={(e) => {
              handleChange(e);
            }}
            name="state"
            label="State"
            placeholder="State"
            width={8}
          />
          <Form.Input
            onChange={(e) => {
              handleChange(e);
            }}
            name="zip"
            label="Zip"
            placeholder="Zip"
            width={8}
          />
        </Form.Group>
        <Form.Group>
          <Form.Field>
            <label>Date / Time</label>
            <DatePicker
              selected={formState.date}
              onChange={(date) => {
                setDateValue(date);
                console.log(date);
                handleChange({ target: { name: "date", value: date } });
              }}
              showTimeSelect
              className="date-picker"
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Input
            onChange={(e) => {
              handleChange(e);
            }}
            name="link"
            label="Link"
            placeholder="Link"
            width={12}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            onChange={(e) => {
              handleChange(e);
            }}
            name="imageLink"
            label="Image Link"
            placeholder="Image Link"
            width={12}
          />
        </Form.Group>
        <Form.Field
          onChange={(e) => {
            handleChange(e);
          }}
          name="eventDescription"
          control={TextArea}
          label="Event Description"
          placeholder="Tell us more about your event..."
        />
        <Form.Field control={Button} type="submit">
          Submit
        </Form.Field>
      </Form>
    </div>
  );
}

export default FormExampleFieldControl;