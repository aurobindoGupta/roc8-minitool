const Quizz = () => {
    const questions = [
      { que: "What is the difference between let, var, and const?" },
      { que: "What is debouncing and why is it used?" },
      { que: "Explain closures in JavaScript." },
    ];
  return (
    <>
      <div>{Object.values(questions[0])}</div>
      <div>ans</div>
    </>
  );
};
export default Quizz;
