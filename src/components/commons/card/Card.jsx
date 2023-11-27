import React from "react";

function Card(props) {
  return (
    <div
      className={`card
          ${props.hidden ? "card-hidden" : ""}
          ${props.calendar ? "card-calendar" : ""}
          ${props.plain ? "card-plain" : ""}
          ${props.wizard ? "card-wizard" : ""}
          ${props.shadow ? "WrapperShadow" : ""}
        `}
    >
      {(props.title !== undefined || props.category !== undefined) && (
        <div className={`header ${props.textCenter ? "text-center" : ""}`}>
          <h4
            className={`title ${
              props.titleCategoryPadding ? "title-padding" : ""
            }`}
          >
            {props.title}
          </h4>
          <p
            className={`category ${
              props.titleCategoryPadding ? "category-padding" : ""
            }`}
          >
            {props.category}
          </p>
        </div>
      )}
      <div
        className={`content
              ${props.ctAllIcons ? "all-icons" : ""}
              ${props.ctFullWidth ? "content-full-width" : ""}
              ${props.ctTextCenter ? "text-center" : ""}
              ${props.tableFullWidth ? "table-full-width" : ""}
            `}
      >
        {props.content}
      </div>
      {(props.stats !== undefined || props.legend !== undefined) && (
        <div className={`footer ${props.ftTextCenter ? "text-center" : ""}`}>
          {props.legend !== undefined && (
            <div className="legend">{props.legend}</div>
          )}
          {props.stats !== undefined && <hr />}
          {props.stats !== undefined && (
            <div className="stats">{props.stats}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Card;
