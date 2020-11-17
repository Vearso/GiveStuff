import React from 'react';
import {Link} from 'react-router-dom';
import tribal from '../../../assets/Decoration.svg';
import {SIGN_IN} from '../../../routes';

import './Info.scss';

const Info = () => {
    return (
        <section className="header__info">
            <h2 className="info--title">Zacznij pomagać! <br />
                Oddaj niechciane rzeczy w zaufane ręce
            </h2>
            <img className="info--decoration" src={tribal} alt='tribal'/>
            <div className="info--buttons">
                <Link to={SIGN_IN}><div>ODDAJ RZECZY</div></Link>
                <Link to={SIGN_IN}><div>ZORGANIZUJ ZBIÓRKĘ</div></Link>
            </div>
        </section>
    )
}

export default Info;