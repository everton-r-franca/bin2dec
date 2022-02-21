import { Component, Fragment } from "react";
import Tags from "../tags/Tags";

export default class Input extends Component {
   constructor(props) {
      super(props);
      this.state = { inputValue: "", infoValue: "", binaries: "" };
   }

   render() {
      return (
         <Fragment>
            <input
               type="text"
               value={this.state.inputValue}
               onChange={(event) => this.whenUserChangeInput(event)}
            />
            <div className="entradas-normais">{this.state.infoValue}</div>
            <div className="binaries">{this.state.binaries}</div>
         </Fragment>
      );
   }
   whenUserChangeInput(event) {
      const inputUser = event.target.value;
      this.filterInput(inputUser);
   }

   filterInput(inputUser) {
      const array = [];
      this.setState({
         inputValue: inputUser,
      });
      const invalidCharsRemoved = this.removeInvalidChars(inputUser);
      if (invalidCharsRemoved !== inputUser)
         this.msgInfo("Entradas inválidas foram filtradas.");
      this.setState({
         inputValue: invalidCharsRemoved,
      });
      const binaryGroup = this.binaryGroup(invalidCharsRemoved);
      const binaryGroupNoZeroLeft = this.removeLeftZeros(binaryGroup);
      const uniqueBinaries = this.removeDuplicates(binaryGroupNoZeroLeft);

      const final = this.groupOneByte(uniqueBinaries);

      final.map((e) => e.map((f) => (f !== "" ? array.push(f) : "")));

      console.log(array);

      this.printTags(this.removeDuplicates(this.removeLeftZeros(array)));
   }

   removeInvalidChars(inputUser) {
      return inputUser.replace(/[^01,.; ]/g, "");
   }
   binaryGroup(inputUser) {
      return inputUser.split(/[,.; ]{1,2}/g);
   }
   removeLeftZeros(inputUser) {
      return inputUser.map((e) => e.replace(/^0+/, ""));
   }
   removeDuplicates(inputUser) {
      return inputUser.filter((c, index) => {
         return inputUser.indexOf(c) === index;
      });
   }
   groupOneByte(inputUser) {
      return inputUser.map((e) => {
         return e.match(/[01]{0,8}/g);
      });
   }
   msgInfo(msg) {
      this.setState({
         infoValue: msg,
      });
   }
   printTags(binaries) {
      if (binaries) {
         this.setState({
            binaries: binaries.map((e) => (e ? <Tags text={e} key={e} /> : "")),
         });
      }
   }
}
