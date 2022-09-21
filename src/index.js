import React from 'react';
import ReactDOM from 'react-dom/client';

class Clock {
    // eslint-disable-next-line class-methods-use-this
    print() {
        return (
            <h1 className="heading">
                <span className="text">Hello world {new Date().toLocaleTimeString()}</span>
                <img src="" alt="" />
            </h1>
        );
    }
}
const ClockComponent = new Clock();
ClockComponent.print();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(ClockComponent.print());

// export default Clock;
