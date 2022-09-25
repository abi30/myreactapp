import React from 'react';

import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const index = 0;

const element = (
    <h1 className="heading" tebIndex={index}>
        <span className="text">Hello world {new Date().toLocaleTimeString()}</span>
        <img src="" alt="" />
    </h1>
);

export default element;

// function Clock({ locale }) {
//     return (
//         <h1 className="heading">
//             <span className="text">Hello world {new Date().toLocaleTimeString(locale)}</span>
//             <img src="" alt="" />
//         </h1>
//     );
// }

<React.StrictMode>
    //{' '}
    <div>
        // <Clock />
        //{' '}
    </div>
    //{' '}
</React.StrictMode>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();

reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const index = 0;
// const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(() => {
//     const element = (
//         <h1 className="heading" tebIndex={index}>
//             <span className="text">Hello world {new Date().toLocaleTimeString()}</span>
//             <img src="" alt="" />
//         </h1>
//     );
//     root.render(element);
// }, 1000);


// eslint-disable-next-line react/prefer-stateless-function