import "./App.scss";
import Card from "./components/card/card";
import forestImg from "./assets/forest.png";
import skyImg from "./assets/sky.png";
import JobContent from "./components/card/content/job.content/job.content";
import SemiCircleChart from "./components/card/content/semiCircleChart.content/semiCircleChart.content";
import LineChart from "./components/card/content/lineChart/lineChart.content";
import Menu from "./components/menu/menu";

function App() {
  const mockCardData = [
    {
      cardTitle: "Volunteered in",
      mainTitle: "",
      bg: "#fff",
      type: "line-graph",
    },
    {
      cardTitle: "Volunteered Time",
      mainTitle: "56 Hours",
      bg: forestImg,
      type: "image",
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
      ],
    },

    {
      cardTitle: "Next Coverage increase",
      mainTitle: "₹1,00,000",
      bottomTitle: "Increase coverage by volunteering for 4 hours",
      bg: skyImg,
      type: "image",
    },
  ];
  return (
    <main className="container">
      {/* <h1>Dashboard Design</h1> */}
      <Menu></Menu>
      <div className="card-container">
        {mockCardData.map((card, index) => (
          <Card
            key={index}
            customStyle={
              card.bg?.charAt(0) === "#"
                ? {
                    background: card.bg,
                  }
                : {
                    height: "400px",
                  }
            }
          >
            {card.bg?.charAt(0) !== "#" && (
              <img src={card.bg} alt={card.mainTitle} />
            )}
            <div
              className="card-content"
              style={
                card.data || card.type === "arc-graph" ? { padding: 0 } : {}
              }
            >
              <div
                className="card-head-content"
                style={card.data && { borderBottom: "1px solid" }}
              >
                <span>{card.cardTitle}</span>
                {card.data && <span className="see-all-button">See all</span>}
              </div>
              {card.mainTitle && (
                <h2 className="mainTitle">{card.mainTitle}</h2>
              )}
              {card.data && <JobContent data={card.data} />}
              {index === 2 && (
                <SemiCircleChart orphanages={3} retirementHomes={2} />
              )}
              {index === 0 && <LineChart />}
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default App;
