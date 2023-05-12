export function Card(props) {
  const { title, description, image, onClick } = props;
  return (
    <div className="container" onClick={onClick}>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} />
    </div>
  );
}
