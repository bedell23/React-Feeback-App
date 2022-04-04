import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <Card>
        <form>
          <h2>How Would Rate the My-Watch App</h2>
          {/* todo rating selector component */}
          <div className="input-group">
            <input
              onChange={handleTextChange}
              type="text"
              placeholder="Write Your Review"
              value={text}
            />
            <Button type="submit">Send</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default FeedbackForm;
