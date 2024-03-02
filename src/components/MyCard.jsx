import PropTypes from "prop-types";
import { Tags } from "./Tags";
import Card from "react-bootstrap/Card";

export const MyCard = ({ title, description, img, bg, tag }) => {
  return (
    <Card className="shadow-lg border-0">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Tags bg={bg} tag={tag} />
      </Card.Body>
    </Card>
  );
};

MyCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
