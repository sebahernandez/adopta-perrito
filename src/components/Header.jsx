import PropTypes from "prop-types";

export const Header = ({ title }) => {
  return <h1 className="p-5 text-center text-black">{title}</h1>;
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
