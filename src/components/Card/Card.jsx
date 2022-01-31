import "./Card.scss";
const Card = () => {
  return (
    <div className="card-location">
      <img
        className="img-location"
        src="./assets/images/download.png"
        alt=" location "
      ></img>
      <h3 className="title-location">titre de location</h3>
    </div>
  );
};
export default Card;
