import { useState } from "react";
import classes from "./Faq.module.css";

const questions = [
  {
    question: "How can i participate in KARMA 23?",
    answer:
      "All can participate by booking tickets through our portal, and tickets closes on 1 day prior to the event dates (28, 29, 30 April 2023) of KARMA 23",
  },
  {
    question: "What are the dates of KARMA 23?",
    answer: "April 28, 29, and 30. Events will happen from 9:00 am to 10:00 pm",
  },
  {
    question: "What is the entry fees for KARMA 23?",
    answer: "The entry for karma 23 is 399(day 2), 499(day 3), 799(day 2&3)",
  },
  {
    question: "Is it possible for one participant to attend any workshop?",
    answer:
      "No, participants can only attend registered workshops due to the scheduling of time.",
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }

    setClicked(i);
  };

  return (
    <section className={classes.faqSection}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.faq}>
        {questions.map((ques, i) => {
          return (
            <div className={classes.single} onClick={() => toggle(i)}>
              <div className={classes.question}>{ques.question}</div>
              <div
                className={`${
                  clicked === i ? classes.answer : classes.noAnswer
                }`}
              >
                {ques.answer}
              </div>
              <span className={classes.btn}>+</span>
            </div>
          );
        })}

        {/* <div className={classes.single}>
                <div className={classes.question}>How are you?</div>
                <div className={classes.answer}>I am fine</div>
                <span className={classes.btn}>+</span>
            </div> */}
      </div>
    </section>
  );
};

export default Faq;
