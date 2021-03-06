import React, { useState } from "react";
import { useMutation } from "@apollo/client";
// import Auth from '../utils/auth';
import { ADD_EVENT } from "../utils/mutations";
import { useHistory } from "react-router-dom";
import image from "../images/cadmium-images/logo.png"
// import Image from "../images/cadmium-images/logo.png";

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
    paddingTop: "50px",
    paddingBottom: "50px",
    color: "#ffffff"
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
  const history = useHistory();
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
      console.log("form state", formState);
      const date = formState.date.toLocaleString();
      const mutationResponse = await addEvent({
        variables: {
          name: formState.name,
          locationName: formState.locationName,
          locationAddress: formState.streetAddress,
          description: formState.eventDescription,
          link: formState.link,
          imageLink: formState.imageLink,
          address2: formState.address2,
          state: formState.state,
          zip: formState.zip,
          date,

          //category
        },
      });
      history.push("/events");
      console.log("what is this", mutationResponse);
      return mutationResponse;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
       <center>
        <img src={image} alt="logo" className="img-logo" />
      </center>
      <div className="form-wrapper">
    <div className="form-container">
      <Form onSubmit={handleFormSubmit}>
        <div className="form-margin-style">
          <h1 style={styles.titleStyle} className="headerStuff">Add Your Art Event Here!</h1>
          <Form.Group className="form-text">
            <Form.Field
              onChange={(e) => {
                handleChange(e);
              }}
              control={Input}
              name="name"
              label="Event Name"
              placeholder="Event Name"
              width={15}
            />
            </Form.Group>
            <Form.Group>
            <Form.Field
              onChange={(e) => {
                handleChange(e);
              }}
              control={Input}
              name="locationName"
              label="Location Name"
              placeholder="Location Name"
              width={15}
            />
            </Form.Group>
            <Form.Group>
            <Form.Field
              onChange={(e) => {
                handleChange(e);
              }}
              name="eventType"
              control={Select}
              label="Event Type"
              options={options}
              placeholder="Event Type"
              className="form-text"
              width={15}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              className="form-inputs"
              onChange={(e) => {
                handleChange(e);
              }}
              name="streetAddress"
              label="Street"
              placeholder="Enter a Location"
              width={15}
            />
            </Form.Group>
            <Form.Group>
            <Form.Input
            className="form-inputs"
              onChange={(e) => {
                handleChange(e);
              }}
              name="address2"
              label="Address"
              width={15}
            />
            </Form.Group>
            <Form.Group widths={15}>
            <Form.Input
            className="form-inputs"
              onChange={(e) => {
                handleChange(e);
              }}
              name="city"
              label="City"
              placeholder="City"
              
            />
            <Form.Input
            className="form-inputs"
              onChange={(e) => {
                handleChange(e);
              }}
              name="state"
              label="State"
              placeholder="State"
              
            />
            <Form.Input
            className="form-inputs"
              onChange={(e) => {
                handleChange(e);
              }}
              name="zip"
              label="Zip"
              placeholder="Zip"
              
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
                dateFormat="MMMM d, yyyy h:mm"
                
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Input
             className="form-inputs"
              onChange={(e) => {
                handleChange(e);
              }}
              name="link"
              label="Link"
              placeholder="Link"
              width={15}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
            className="form-inputs"
              onChange={(e) => {
                handleChange(e);
              }}
              name="imageLink"
              label="Image Link"
              placeholder="Image Link"
              width={15}
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
            width={15}
          />
          <Form.Field control={Button} type="submit">
            Submit
          </Form.Field>
      </div>
      </Form>
    </div>
    </div>
    </div>
  );
}

export default FormExampleFieldControl;
