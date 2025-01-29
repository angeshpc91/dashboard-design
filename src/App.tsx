import "./App.scss";
import forestImg from "./assets/forest.png";
import skyImg from "./assets/sky.png";
import Menu from "./components/menu/menu";
import CardContainer from "./components/card/card.container";

function App() {
  const mockCardData = [
    {
      cardTitle: "Volunteered in",
      mainTitle: "₹4,20,000",
      bg: "#fff",
      type: "line-graph",
    },
    {
      cardTitle: "Volunteered Time",
      mainTitle: "56 Hours",
      bg: forestImg,
      type: "image1",
    },
    {
      cardTitle: "Volunteered in",
      mainTitle: "",
      bg: "#000",
      type: "arc-graph",
    },
    {
      mainTitle: "",
      cardTitle: "Jobs Available",
      bg: "#fff",
      type: "table",
      data: [
        { name: "Tata Memorial", type: "Orphanage", duration: "6 hours" },
        { name: "Hope Centre", type: "Orphanage", duration: "4 hours" },
        { name: "Agni Mumbai", type: "Retirement home", duration: "7 hours" },
        { name: "COR Mumbai", type: "Orphanage", duration: "7 hours" },
        { name: "Tata Memorial", type: "Retirement home", duration: "2 hours" },
        { name: "Tata Memorial", type: "Orphanage", duration: "6 hours" },
        { name: "Hope Centre", type: "Orphanage", duration: "4 hours" },
        { name: "Agni Mumbai", type: "Retirement home", duration: "7 hours" },
        { name: "COR Mumbai", type: "Orphanage", duration: "7 hours" },
        { name: "Tata Memorial", type: "Retirement home", duration: "2 hours" },
      ],
    },

    {
      cardTitle: "Next Coverage increase",
      mainTitle: "₹1,00,000",
      bottomTitle: "Increase coverage by volunteering for 4 hours",
      bg: skyImg,
      type: "image2",
    },
  ];
  return (
    <>
      <Menu></Menu>
      <main className="container">
        <CardContainer mockCardData={mockCardData} />
      </main>
    </>
  );
}

export default App;
