import Card from "./components/Card/Card";

//las props(propiedades se pasan coo los atributos HTML)
const Clase2 = () => {
  //objeto
  const dummyCardData = {
    author: "kodemia",
    company: "kodemia",
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <Card
        BGImage="https://picsum.photos/200/300?grayscale"
        creationDate="04/18/2023"
        cardTitle="Titulo nuevo"
        metaData={dummyCardData}
      />
      <Card
        BGImage="https://picsum.photos/id/870/200/300?grayscale&blur=2"
        creationDate="04/18/2023"
        cardTitle="Titulo nuevo"
        metaData={dummyCardData}
      />
      <Card
        BGImage="https://picsum.photos/id/870/200/300?grayscale&blur=2"
        creationDate="04/18/2023"
        cardTitle="Titulo nuevo"
        metaData={dummyCardData}
      />
      <Card
        BGImage="https://picsum.photos/id/870/200/300?grayscale&blur=2"
        creationDate="04/18/2023"
        cardTitle="Titulo nuevo"
        metaData={dummyCardData}
      />
      <Card
        BGImage="https://picsum.photos/200/300?grayscale"
        creationDate="04/18/2023"
        cardTitle="Titulo nuevo"
        metaData={dummyCardData}
      />
      <Card
        BGImage="https://picsum.photos/id/870/200/300?grayscale&blur=2"
        creationDate="04/18/2023"
        cardTitle="Titulo nuevo"
        metaData={dummyCardData}
      />
    </div>
  );
};

export default Clase2;
