import React from 'react';
import tribal from '../../../assets/Decoration.svg';


const Info = () => {
    return (
        <section className="header__info">
            <h2 className="info--title">Oddaj rzeczy których już nie chcesz <br />
                POTRZEBUJĄCYM
            </h2>
            <img className="info--decoration" src={tribal} alt='tribal'/>
            <h3 className="info--subtitle">Wystarczą 4 proste kroki:</h3>
            <div className="info--steps">
                <div className="info--step"><span className='step--text'><p>1</p> Wybierz rzeczy</span></div>
                <div className="info--step"><span className='step--text'><p>2</p> Spakuj je w worki</span></div>
                <div className="info--step"><span className='step--text'><p>3</p> Wybierz fundację</span></div>
                <div className="info--step"><span className='step--text'><p>4</p> Zamów kuriera</span></div>
            </div>
        </section>
    )
}

export default Info;