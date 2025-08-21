 import  {Component} from "react";


class Ex2_Notification extends Component {
     render() {
         return(
             <div>
                 <h1>Component đã được mount!</h1>
             </div>
         )
     }

    componentDidMount() {
         console.log("Component đã được mount!")
    }
}
export default Ex2_Notification;