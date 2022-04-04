import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import Card from "./shared/Card";

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return (
      <Card>
        <p>No feedback Item Yet</p>
      </Card>
    );
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
