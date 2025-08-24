import React, {Component} from "react";

interface State {
    num: number;
}

export default class Ex7 extends Component<{}, State> {
    private timerId?: ReturnType<typeof setInterval>;

    constructor(props: {}) {
        super(props);
        this.state = {
            num: 0,
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState((prev) => ({
                num: prev.num !== 10? prev.num + 1: 0,
            }));
        }, 1000);
    }

    componentWillUnmount() {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
    }

    render() {
        return (
            <div className="flex items-center justify-center ">
  <span className="countdown font-mono text-6xl">
    <span
        style={{ "--value": this.state.num, fontSize: "100px", lineHeight: "100%"} as React.CSSProperties}
    ></span>
  </span>
            </div>
        );
    }
}