import { Typography } from "@material-ui/core";
import React from "react";
import './style.css'
interface BluePrintDataLabelProps {
  dataLabel:string,
  dataValue:string
}

export const BluePrintDataLabel = (props: BluePrintDataLabelProps) => {
  return (
    <div className="blueprint-values">
      <Typography className="blueprint-values-label" variant="body2">{props.dataLabel}</Typography>
      <div className="blueprint-value-container">
        <Typography align="center" className="blueprint-values-value" variant="h4">{props.dataValue}</Typography>
      </div>
    </div>
  );
};
