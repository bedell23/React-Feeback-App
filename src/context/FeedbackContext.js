import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is coming from the Context Api #1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is coming from the Context Api #2",
      rating: 5,
    },
    {
      id: 3,
      text: "This is coming from the Context Api #3",
      rating: 8,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // add feedback item and the rating
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // update feedback item and the rating
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  // edit feedback item and the rating
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // delete feedback item and the rating
  const deleteFeedback = (id) => {
    if (window.confirm("Are you show you want to delete this review?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
