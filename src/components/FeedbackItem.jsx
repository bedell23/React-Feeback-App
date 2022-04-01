import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";

const FeedbackItem = ({ item }) => {
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleClick(item.id)} className="close">
        <FaTimes color="red" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;