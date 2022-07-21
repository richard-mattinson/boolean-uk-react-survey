import { useState } from "react";
import Checkboxes from "./Checkboxes";
import RadioButtons from "./RadioButtons";

export default function Form({ submit }) {
  const [answers, setAnswers] = useState({
    username: "", // user name here (if provided)
    colour: "", // radio buttons choice here
    timeSpent: {
      // checkbox info here
      swimming: false,
      bathing: false,
      chatting: false,
      noDuck: false
    },
    review: "", // review text here
    email: "", // email address here (if provided)
  });

  function handleSubmit(event) {
    event.preventDefault();
    setAnswers(answers);
  }

  return (
    <form class="form">
      <h2>Tell us what you think about your rubber duck!</h2>
      <div class="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioButtons />
      </div>
      <div class="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <Checkboxes />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10"></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" value="" />
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" value="" />
      </label>
      <input
        onClick={handleSubmit}
        class="form__submit"
        type="submit"
        value="Submit Survey!"
      />
    </form>
  );
}
