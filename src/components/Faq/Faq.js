import React from "react";
import "./Faq.css";

const questions = [
  {
    id: 1,
    faq: `Who is Helt ?`,
    answer: `  Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur possimus, quis velit numquam fugit iure. Consequatur a
              iste voluptate neque, velit provident illum! Atque aut numquam
              sed! Optio, neque doloribus.`,
  },
  {
    id: 2,
    faq: `The benefit of using Helt ?`,
    answer: `  Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur possimus, quis velit numquam fugit iure. Consequatur a
              iste voluptate neque, velit provident illum! Atque aut numquam
              sed! Optio, neque doloribus.`,
  },
  {
    id: 3,
    faq: `Why Helt was created ?`,
    answer: `  Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur possimus, quis velit numquam fugit iure. Consequatur a
              iste voluptate neque, velit provident illum! Atque aut numquam
              sed! Optio, neque doloribus.`,
  },
];

export default function Faq() {
  //default show
  const [answer, setAnswer] = React.useState(false);
  const [id, setId] = React.useState("");

  function handleShow(event) {
    setAnswer((prevAnswer) => !prevAnswer);
    setId(event);
  }

  //iterate questions
  const question = questions.map((question) => (
    <div
      key={question.id}
      className="question"
      onClick={() => handleShow(question.id)}
    >
      <div className="inner-question">
        <p className="question-text">{question.faq}</p>
        <p className="plus" onClick={() => handleShow(question.id)}>
          {answer && id === question.id ? `-` : `+`}
        </p>
      </div>
      {id === question.id && answer && (
        <div className="question-answer">{question.answer}</div>
      )}
      <hr className="question-line" />
    </div>
  ));

  return (
    <section className="faq">
      <section className="faq-inner">
        <section>
          <h2 className="faq-heading">FAQ</h2>
        </section>
        <section className="faq-content">{question}</section>
      </section>
    </section>
  );
}
