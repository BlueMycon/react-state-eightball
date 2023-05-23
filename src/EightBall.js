import { useState } from "react";
import "./EightBall.css";

/** EightBall magically answers your questions.
 *
 * Props:
 * - answers = DEFAULT_ANSWERS
 *
 * State:
 * - eightBall: { msg, color }
 *
 * App -> EightBall
 */
const DEFAULT_EIGHTBALL = {msg: "Think of a Question", color: "black"};
const DEFAULT_RECORD = {green: 0, goldenrod: 0, red: 0};

function EightBall({ answers = DEFAULT_ANSWERS }) {
  const [eightBall, setEightBall] = useState(DEFAULT_EIGHTBALL);
  const [colorRecord, setColorRecord] = useState(DEFAULT_RECORD)

  const myStyle = {
    backgroundColor: eightBall.color,
  };

  function handleEightBallClick(evt) {
    const answer = answers[Math.floor(Math.random() * answers.length)];
    setEightBall(answer);
    
    const updatedRecord = {...colorRecord}
    updatedRecord[answer.color] += 1
    setColorRecord(updatedRecord);
  }

  function handleReset(evt) {
    setEightBall(DEFAULT_EIGHTBALL);
    setColorRecord(DEFAULT_RECORD);
  }

  return (
    <div>
      <div
        className="EightBall"
        style={myStyle}
        onClick={handleEightBallClick}
      >
        <p>{eightBall.msg}</p>
      </div>
      <div className="EightBall-button">
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="Eightball-record">
        <p>Green Count: {colorRecord.green}</p>
        <p>Golden Count: {colorRecord.goldenrod}</p>
        <p>Red Count: {colorRecord.red}</p>
      </div>
    </div>
  );
}

const DEFAULT_ANSWERS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

export default EightBall;
