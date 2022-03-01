import "./ProbniModal.css";

const ProbniModal = (props) => {
  const stanje = props.klasa ? "modalOpen" : "modalClose";
  return (
    <div className={`probni-modal ${stanje}`}>
      <h1>Probni modal</h1>
      <button onClick={props.close}>Close modal</button>
    </div>
  );
};

export default ProbniModal;
