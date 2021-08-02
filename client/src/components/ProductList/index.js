import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_EVENTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_EVENTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif";
import {
  Card,
} from "semantic-ui-react";
import image from "../../images/cadmium-images/logo.png";
import style from "./list.css";

// const CardExampleCard = () => {
//   return(
//   <Card>
//     <CardContent>
//       <CardHeader>Event 1</CardHeader>
//       <CardMeta>
//         <span>description</span>
//       </CardMeta>
//     </CardContent>

//   </Card>
//   )

// }


const styles = {
  headerStyle: {
    textAlign: "center",
    fontFamily: "Rajdhani",
    fontSize: "50px",
  },
  listStyle: {
    listStyleType: "none",
  },
  cardStyle: {
    display: "flex",
    justifyContent: "center",
  },
};

function EventList() {
  const [state, dispatch] = useStoreContext();
  const { currentCategory } = state;
  const { loading, data: events } = useQuery(QUERY_EVENTS);

  console.log("data", events);

  return (
    <div className="my-2">
      <h2 style={styles.headerStyle}>Check out these upcoming events!</h2>

      {events ? (
        events.events.map(
          ({ description, name, locationAddress, locationName, link }) => (

<Card style={{ width: '18rem' }}>
<Card.Content>
<Card.Header>{name}</Card.Header>
<Card.Meta>{locationName}</Card.Meta>
<Card.Description>{description}</Card.Description>
</Card.Content>
<Card.Content>
<Card.Description>{locationAddress}</Card.Description>
<a>{link}</a>
</Card.Content>
</Card>
          )
        )
      ) : (
        <h3> You haven't added any events yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default EventList;
