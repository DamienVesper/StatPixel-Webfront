import React from 'react';
import { hot } from 'react-hot-loader';

/**
 * The staff page.
 */
class Staff extends React.Component {
    render = () => {
        return (
            <main>
                <h1 className="my-5 text-center">Our Staff</h1>
                <div className="container"></div>
            </main>
        );
    }
}

export default hot(module)(Staff);
