import React from "react";
import "../Styles/Achievement.css";

const Achievement = () => {
  return (
    <section className="section-6">
      <article>
        <div className="container-00">
          <div className="sect-1">
            <div className="circle-chart">
              <svg
                viewBox="0 0 35.83098862 35.83098862"
                width={130}
                height={130}
                xmlns="http://www.w3.org/2000/svg"
                className="hei"
              >
                {/* Background circle */}
                <circle
                  className="circle-chart__background"
                  stroke="#1a3417"
                  strokeWidth={2}
                  fill="none"
                  cx="17.91549431"
                  cy="17.91549431"
                  r="15.91549431"
                />
                {/* Progress circle */}
                <circle
                  className="circle-chart__circle"
                  stroke="white"
                  strokeWidth={2}
                  strokeDasharray="80,100"
                  strokeLinecap="round"
                  fill="none"
                  cx="17.91549431"
                  cy="17.91549431"
                  r="15.91549431"
                />
                {/* Percentage text */}
                <g className="circle-chart__info">
                  <text
                    className="circle-chart__percent"
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize={8}
                    fill="white"
                  >
                    80%
                  </text>
                </g>
              </svg>
            </div>
            <div className="text-right">
              Business Charms for <br />
              Achievement
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Achievement;
