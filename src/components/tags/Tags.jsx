import React from "react";
import "./Tags.css";
export default function Tags(props) {
   return (
      <div className="tags">
         <span className="tag">
            <sup>
               <small>BIN: </small>
            </sup>
            <span className="binary-number">{props.text}</span>
         </span>
         <span className="value">
            <sup>
               <small>Dec: </small>
            </sup>
            <span className="decimal-number">{props.value}</span>
         </span>
      </div>
   );
}
