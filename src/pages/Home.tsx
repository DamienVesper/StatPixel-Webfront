// React libraries.
import React from 'react';
import { hot } from 'react-hot-loader';

import '../../public/assets/scss/pages/home.scss';

import Logo from '../../public/assets/img/logos/splash.png';

/**
 * The landing page of the website.
 */
class Home extends React.Component {
    render = () => {
        return (
            <main className="text-center mt-5 container">
                <img src={Logo} alt="StatPixel Logo" />
                <p className="mt-3">Bacon ipsum dolor amet cupim andouille venison, jowl pork loin picanha sausage turducken short loin. Shoulder chicken doner andouille prosciutto. Cow sausage spare ribs doner, turkey fatback boudin. Cow sausage leberkas prosciutto pork belly. Ball tip burgdoggen leberkas prosciutto pig ham strip steak andouille ham hock. Strip steak landjaeger beef, pancetta andouille meatloaf short loin cow buffalo prosciutto cupim t-bone. Chicken t-bone frankfurter flank ham.</p>
            </main>
        );
    }
}

export default hot(module)(Home);
