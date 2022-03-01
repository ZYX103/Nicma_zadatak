import "./Backdrop.css";

const Backdrop = (props) => {
  const stanje = props.klasa ? "backdropOpen" : "backdropClose";
  return <div onClick={props.close} className={`Backdrop ${stanje}`}></div>;
};

export default Backdrop;
