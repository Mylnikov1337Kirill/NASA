import React, {Component} from 'react';
import earth from '../../assets/earth.png';
import rocket from '../../assets/rocket.png';
import ufo from '../../assets/ufo.png';
import star from '../../assets/star.png';

import '../../App.css';
import './header.css';

export class Header extends Component {

    render() {
        let stars = [1, 2, 3, 4, 5];
        return (
            <header className="App-header">
                <div className="logo">
                    <img src={earth} className="earth" alt="earth"/>
                    <div className="rocket-container">
                        <div>
                            <img src={rocket} alt="rocket" />
                        </div>
                    </div>
                    <div className="ufo-container">
                        <div>
                            <img src={ufo} alt="ufo" />
                        </div>
                    </div>
                    {
                        stars.map((value, i) =>
                            <div key={value} className={'star-container'}>
                                <div>
                                    <img src={star} alt="star" className={`i-${value}`}/>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="title-container">
                    <h2>
                        <span>National </span>
                        <span>Aeronautics</span>
                    </h2>
                    <h2>
                        <span>Space </span>
                        <span>Administration</span>
                    </h2>
                </div>
            </header>
        );
    }
}
