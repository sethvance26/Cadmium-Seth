import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_EVENTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_EVENTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif";
import { Card, Icon } from "semantic-ui-react";
import image from "../../images/cadmium-images/logo.png";
import style from "./list.css";
import {
  FacebookShareButton,
  LinkedinShareButton,
  EmailShareButton,
  TwitterShareButton,
  PinterestShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookIcon,
  LinkedinIcon,
  EmailIcon,
  TwitterIcon,
  PinterestIcon,
  WhatsappIcon,
  RedditIcon,
 
} from "react-share";

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
  const { loading, data } = useQuery(QUERY_EVENTS);
  const events = data;
  console.log("data", data);

  return (
    <div className="evt-cards">
      <h2 style={styles.headerStyle}>Check out these upcoming events!</h2>

      {events ? (
        events.events.map(
          ({
            description,
            name,
            locationAddress,
            locationName,
            link,
            imageLink,
            address2,
            state,
            zip,
            date,
          }) => (
            <div className="card card-1">
              <Card style={{ width: "18rem" }}>
                <Card.Content>
                <Card.Header>{name}</Card.Header>
                  <Card.Meta>{locationName}</Card.Meta>
                  <Card.Description>{description}</Card.Description>
                </Card.Content>
                <Card.Content>
                  <Card.Description>{locationAddress}</Card.Description>
                  <Card.Description>{address2}</Card.Description>
                  <Card.Description>{state}</Card.Description>
                  <Card.Description>{zip}</Card.Description>
                  <Card.Description>{imageLink}</Card.Description>
                  <Card.Description>{date}</Card.Description>
                  <br></br>
                  <a href={link}>Link To Event</a>
                </Card.Content>
                <div>
                  <FacebookShareButton
                    quote="Check out this cool art event I found through Cadmium!"
                    url={link}
                    hashtag="#CadmiumRVA"
                  >
                    <FacebookIcon size={30} round />
                  </FacebookShareButton>
                  <TwitterShareButton
                  title="Check out this cool art event I found through Cadmium"
                  url={link}
                  hashtag="#CadmiumRVA"
                  >
                    <TwitterIcon size={30} round />
                  </TwitterShareButton>
                  <LinkedinShareButton
                    title="Check out this cool art event I found through Cadmium"
                    url={link}
                  >
                    <LinkedinIcon size={30} round />
                  </LinkedinShareButton>
                  <PinterestShareButton
                    title="Check out this cool art event I found through Cadmium"
                     url={link}
                  >
                    <PinterestIcon size={30} round />
                  </PinterestShareButton>
                  <WhatsappShareButton         
                  title="Check out this cool art event I found through Cadmium"
                  url={link}
                  >
                    <WhatsappIcon size={30} round />
                  </WhatsappShareButton>
                  <EmailShareButton
                   title="Check out this cool art event I found through Cadmium"
                   url={link}
                   subject="Your saved events via Cadmium"
                   
                   >
                     <EmailIcon size={30} round/>
                   </EmailShareButton>
                   <RedditShareButton
                   title="Check out this cool art event I found through Cadmium"
                   url={link}
                   >
                     <RedditIcon size={30} round />
                   </RedditShareButton>
                 
                </div>

                <br></br>
                <button className="heart icon hr large own-class">
                  <Icon name="heart" onClick="" />
                  Save Event
                </button>
              </Card>
            </div>
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
