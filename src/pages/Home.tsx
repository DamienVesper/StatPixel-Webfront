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
            <main className="text-center container mt-5">
                <br />
                <img src={Logo} alt="StatPixel Logo" className="logo-splash" />
                <div className="w-50 container my-5">
                    <p className="desc">Gather near real-time statistics for your Hypixel profile using our Hypixel stats bot. Available for BedWars, SkyWars, Duels and so much more!</p>
                </div>
                <br />
                <br />
                <div className="stats-wrapper container my-5">
                    <div className="row">
                        <div className="col stat-users">
                            <h2>22,964</h2>
                            <p>Users</p>
                        </div>
                        <div className="col stat-guilds">
                            <h2>2,124</h2>
                            <p>Guilds</p>
                        </div>
                        <div className="col stat-commands">
                            <h2>2,390,124</h2>
                            <p>Commands</p>
                        </div>
                    </div>
                </div>
                <div className="btn-wrapper container my-5">
                    <a className="btn btn-lg mx-2 btn-invite" href="https://statpixel.net/invite">Invite</a>
                    <a className="btn btn-lg mx-2 btn-wiki" href="https://wiki.statpixel.net">Wiki</a>
                    <a className="btn btn-lg mx-2 btn-discord" href="https://statpixel.net/discord">Discord</a>
                </div>
            </main>
        );
    }
}

export default hot(module)(Home);
