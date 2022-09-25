import React from 'react';


class Clock extends React.Component {
    
    
    // state = {date: new Date()
    //         counter:0};
    
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            counter: 0
        };
    }
    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(),1000);
    }
    componentWillUnmount() {
        clearInterval(this.clockTimer);

    }
    tick(){
       this.setState({ date: new Date() });
       this.setState((state,props)=>({ counter: state.counter + 1}));
    }

    render() {
        return (
            <h1 className="heading">
                <span className="text">
                    {this.state.date.
                        toLocaleTimeString(this.props.locale)}-counter {this.state.counter}
                </span>
                <img src="" alt=""/>
            </h1>
        );
    }
}

export default Clock;
