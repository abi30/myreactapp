import React from 'react';

import ReactDOM from 'react-dom/client';

// eslint-disable-next-line react/prefer-stateless-function
class Clock extends React.Component {
    render() {
        return (
            <h1 className="heading">
                <span className="text">Hello Today : {new Date().toLocaleTimeString()}</span>
                <img src="" alt="" />
            </h1>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Clock locale="bn-BD" />);

// export default Clock;
