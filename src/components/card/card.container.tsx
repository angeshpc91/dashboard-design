import React from "react";
import Card from "./card";
import JobContent from "./content/job.content/job.content";
import SemiCircleChart from "./content/semiCircleChart.content/semiCircleChart.content";
import LineChart from "./content/lineChart/lineChart.content";

interface CardContainerProps {
  mockCardData: Array<{
    type: string;
    bg?: string;
    mainTitle?: string;
    cardTitle?: string;
    data?: any;
  }>;
}

const CardContainer: React.FC<CardContainerProps> = ({ mockCardData }) => {
  return (
    <div className="card-container">
      {mockCardData.map((card) => (
        <Card
          key={card.type}
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
            className={`card-content ${
              card.type === "image2" && "card-image-content"
            }`}
            style={
              card.type === "table" || card.type === "arc-graph"
                ? { padding: 0 }
                : {}
            }
          >
            <div
              className={`card-head-content 
                  ${card.type === "line-graph" && "card-head__line-graph"}
                  ${card.type === "arc-graph" && "card-arc-graph"}
                  ${card.type.includes("image") && "card-head__image"}
                  ${card.type === "table" && "card-head__table"}`}
            >
              <span>{card.cardTitle}</span>
              {card.data && <span className="see-all-button">See all</span>}
            </div>
            {card.mainTitle && (
              <div>
                <h2
                  className={`main-title ${
                    card.type === "line-graph" && "main-title__line-graph"
                  }`}
                >
                  {card.mainTitle}
                </h2>
                {card.type === "image2" && (
                  <span>Increase coverage by volunteering for 4 hours.</span>
                )}
              </div>
            )}

            {/* CARD CONTENT STARTS HERE */}
            {card.type === "line-graph" && <LineChart />}
            {card.type === "arc-graph" && (
              <SemiCircleChart orphanages={3} retirementHomes={2} />
            )}
            {card.data && <JobContent data={card.data} />}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CardContainer;
