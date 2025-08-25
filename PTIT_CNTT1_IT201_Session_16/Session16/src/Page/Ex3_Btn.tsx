import {Component} from 'react';


export default class Ex3 extends Component {
    render(){
        return(
            <div style={{display: "flex", width: "60%", margin: "auto", justifyContent:"space-around" }}>
                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-secondary">Secondary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-info">Info</button>
                <button type="button" className="btn btn-light">Light</button>
                <button type="button" className="btn btn-dark">Dark</button>
                <button type="button" className="btn btn-link">Link</button>
            </div>
        )
    }
}