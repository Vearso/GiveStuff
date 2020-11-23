import React from 'react'
import tribal from '../../../assets/Decoration.svg';
import icon1 from '../../../assets/Icon-1.svg';
import icon2 from '../../../assets/Icon-2.svg';
import icon3 from '../../../assets/Icon-3.svg';
import icon4 from '../../../assets/Icon-4.svg';
import Article from "../Article/Article";
import {Link} from "react-router-dom";
import {SIGN_IN} from "../../../routes";

const Steps = () => {
    return (
        <section className="home__steps" id='steps'>
            <h2 className="steps__title">Wystarczą 4 proste kroki</h2>
            <img className="steps__decoration" src={tribal} alt='page decoration'/>
            <div className="steps__container">
                <Article>
                    <img src={icon1} alt='shirt'/>
                    <span>Wybierz rzeczy</span>
                    <div/>
                    <p>ubrania zabawki sprzęt i inne</p>
                </Article>
                <Article>
                    <img src={icon2} alt=''/>
                    <span>Spakuj je</span>
                    <div/>
                    <p>skorzystaj z worków na śmieci</p>
                </Article>
                <Article>
                    <img src={icon3} alt='magnifying glass'/>
                    <span>Zdecyduj komu chcesz pomóc</span>
                    <div/>
                    <p>wybierz zaufane miejsce</p>
                </Article>
                <Article>
                    <img src={icon4} alt='arrows in circle'/>
                    <span>Zamów kuriera</span>
                    <div/>
                    <p>Kurier przyjedzie w dogodnym terminie</p>
                </Article>
            </div>
            <div className="info--buttons">
                <Link to={SIGN_IN}>
                    <div>ODDAJ RZECZY</div>
                </Link>
            </div>
        </section>
    )
}

export default Steps;