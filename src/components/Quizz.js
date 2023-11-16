import { useState } from "react";

const Quizz = () => {
  const [queId, setQueId] = useState(0);
  const [nextBtn, setNextBtn] = useState(true);
  const [ansValue, setAnsValue] = useState("");
  const [response, setResponse] = useState("");
  const questions = [
    { que: "What is the difference between let, var, and const?" },
    { que: "What is debouncing and why is it used?" },
    { que: "Explain closures in JavaScript." },
  ];
  const questionDisplayHandler = () => {
    setNextBtn(true);
     setResponse("");
     setAnsValue("");
    if (queId < questions.length - 1) {
      console.log("click");
      setQueId((prev) => prev + 1);
    }
  };
  const ansSubmitHandler = async () => {
    const data = `Question:${questions[queId].que}Answer:${ansValue}.`;
    setNextBtn(false);
   
    fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data));
  };
  return (
    <>
      <div>
        <div>{Object.values(questions[queId])}</div>
        <textarea
          placeholder={ansValue.length>0 ? null : "Answer here"}
          value={ansValue}
          rows={15}
          cols={75}
          onChange={(e) => setAnsValue(e.target.value)}
        ></textarea>
      </div>

      <button onClick={() => ansSubmitHandler()}>Submit</button>
      <button onClick={() => questionDisplayHandler()} disabled={nextBtn}>
        Next
      </button>
      <div
        className="loader"
        style={{ display: response || nextBtn ? "none" : "block" }}
      >
        LOADING..
      </div>
      <div>{response}</div>
    </>
  );
};
export default Quizz;
