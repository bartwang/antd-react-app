import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const ContentCard = ({ midCenter, centerAlign, children }) => {
  return (
    <div className="row">
      <div
        className={classNames("col-xs-12", {
          "col-sm-10 col-md-8 col-sm-push-1 col-md-push-2": midCenter
        })}
      >
        <div
          className={classNames("content-card", {
            "text-left": !centerAlign,
            "text-center": centerAlign
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

ContentCard.propTypes = {
  midCenter: PropTypes.bool,
  centerAlign: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default ContentCard;
