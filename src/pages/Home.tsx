import React from 'react';

import '../../public/assets/scss/pages/home.scss';

import Logo from '../../public/assets/img/logos/splash.png';

import { fetchAPI } from '../utils/api';

/**
 * The landing page of the website.
 */
class Home extends React.Component {
    render = () => {
        return (
            <main className="text-center container mt-5">
                <img src={Logo} alt="StatPixel Logo" className="logo-splash mt-4" />
                <div className="w-50 container my-5">
                    <p className="desc">Gather near real-time statistics for your Hypixel profile using our Hypixel stats bot. Available for BedWars, SkyWars, Duels and so much more!</p>
                </div>
                <br />
                <div className="stats-wrapper container my-5">
                    <div className="row">
                        <div className="col stat-users">
                            <h2>0</h2>
                            <p>Users</p>
                        </div>
                        <div className="col stat-guilds">
                            <h2>0</h2>
                            <p>Guilds</p>
                        </div>
                        <div className="col stat-profiles">
                            <h2>0</h2>
                            <p>Profiles</p>
                        </div>
                    </div>
                </div>
                <div className="btn-wrapper container my-5">
                    <a className="btn btn-lg mx-2 btn-invite" href="https://statpixel.net/invite" target="_blank" rel="noreferrer">Invite</a>
                    <a className="btn btn-lg mx-2 btn-wiki" href="https://wiki.statpixel.net" target="_blank" rel="noreferrer">Wiki</a>
                    <a className="btn btn-lg mx-2 btn-discord" href="https://statpixel.net/discord" target="_blank" rel="noreferrer">Discord</a>
                </div>
            </main>
        );
    }

    componentDidMount = async () => {
        // Get the bot statistics and serialize the data to JSON.
        const botStats: { guilds: number, users: number, profiles: number } = (await (await fetchAPI(`/statistics`)).json());
        if (!botStats) return;

        // Populate the data into the count.
        document.querySelector(`.stat-guilds > h2`).innerHTML = botStats.guilds.toString();
        document.querySelector(`.stat-users > h2`).innerHTML = botStats.users.toString();
        document.querySelector(`.stat-profiles > h2`).innerHTML = botStats.profiles.toString();
    }
}

export default Home;
