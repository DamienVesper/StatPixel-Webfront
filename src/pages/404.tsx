import React from 'react';

import '../../public/assets/scss/pages/error.scss';

/**
 * The 404 page.
 */
class Error404 extends React.Component {
    render = () => {
        return (
            <main className="text-center">
                <h1 className="mt-5 error-header">404</h1>
                <h3 className="error-subscript">Not Found</h3>
            </main>
        );
    }
}

export default Error404;
