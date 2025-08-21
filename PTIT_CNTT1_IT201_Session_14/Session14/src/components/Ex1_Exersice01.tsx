import {Component} from 'react';

interface State{
    userName: string;
}

class Ex1 extends Component<{},State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            userName: "Nguyen Van A"
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.userName}</h1>
            </div>
        )
    }
}

export default Ex1;
