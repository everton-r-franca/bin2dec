import { Component, Fragment } from "react";

export default class Input extends Component {
   constructor(props) {
      super(props);
      this.state = { inputValue: "", infoValue: "" };
   }

   render() {
      return (
         <Fragment>
            <input
               type="text"
               value={this.state.inputValue}
               onChange={(event) => this.validInputValue(event)}
            />
            <div className="info">{this.state.infoValue}</div>
         </Fragment>
      );
   }
   validInputValue(event) {
      if (event.target.value !== "") {
         const lastInsertedChar = parseInt(event.target.value.slice(-1));
         console.log(lastInsertedChar);
         const binary = event.target.value;
         if (lastInsertedChar === 0 || lastInsertedChar === 1) {
            this.setState({ inputValue: binary, infoValue: "" });
         } else {
            this.setState({ infoValue: "Cuidado !!! Apenas 0 e 1" });
         }
      } else {
         this.setState({ inputValue: "" });
      }
   }
}
