import ConceptsItem from "./ConceptsItem";

const ConceptsList = ({ conceptsList }) => {
  return (
    <ul id="concepts">
      <ConceptsItem conceptsItem={ conceptsList[0] } />
      <ConceptsItem conceptsItem={ conceptsList[1] } />
      <ConceptsItem conceptsItem={ conceptsList[2] } />
    </ul>
  );
};

export default ConceptsList;
