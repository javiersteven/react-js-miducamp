import React, { useState } from "react";

const anecdotes = [
  "this is the first comment",
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "this is other comment",
  "and this is another comment",
  "and this is the last comment"
];

const Statistics = ({ staGood, staNeutral, staBad }) => {
  const totalComents = staBad + staNeutral + staGood;
  const positiveComments = !totalComents ? 100 : (staGood / totalComents) * 100;
  // si esto es verdadero haz esto y si no esto otro
  return (
    <>
      <h3>STATISTICS</h3>
      <p>Good: {staGood}</p>
      <p>Neutral: {staNeutral}</p>
      <p>Bad: {staBad}</p>
      <p>All : {totalComents}</p>
      <p>Percentage : {Math.trunc(positiveComments)} %</p>
    </>
  );
};

// RENDERIZADO CONDICIONAL :3
const RenderAnecdotes = ({ anec, select }) => {
  if (select < anec.length && select >= 0) {
    return <div>{anec[select]}</div>;
  }
  return (
    <>
      <strong>No hay contenido para mostrar</strong>
      <br />
    </>
  );
};

const Anecdotes = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <RenderAnecdotes anec={anecdotes} select={selected} />
      <button onClick={() => setSelected(selected - 1)}>prev</button>
      <button onClick={() => setSelected(selected + 1)}>next</button>
    </div>
  );
};

const FeedBack = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h3>GIVE FEEDBACK</h3>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <Statistics staGood={good} staBad={bad} staNeutral={neutral} />
      <Anecdotes anecdotes={anecdotes} />
    </div>
  );
};

export default FeedBack;
