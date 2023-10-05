const ConceptsItem = ({ conceptsItem }) => {
  return (
    <li className="concept">
      <img src={conceptsItem.image} alt={conceptsItem.title} />
      <h2>{conceptsItem.title}</h2>
      <p>{conceptsItem.description}</p>
    </li>
  );
};

export default ConceptsItem;
