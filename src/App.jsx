import Options from "./components/Options/options";
import Description from "./components/Description/description";
import Feedback from "./components/Feedback/feedback";
import Notification from "./components/Notification/notification"
import { useState } from "react";
import { useEffect } from "react";



const App = () => {
     const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
     });
    
     useEffect(() => {
    const storedFeedback = localStorage.getItem("feedback");
    if (storedFeedback) {
      setFeedback(JSON.parse(storedFeedback));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = totalFeedback > 0
        ? Math.round((feedback.good / totalFeedback) * 100)
        : 0;

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className="app">
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet." />
      )}
    </div>
  );
};

export default App;
    