import PropTypes from "prop-types";
import Badge from "react-bootstrap/Badge";

export const Tags = ({ bg, tag }) => {
  return <Badge bg={bg}>{tag}</Badge>;
};

Tags.propTypes = {
  bg: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
