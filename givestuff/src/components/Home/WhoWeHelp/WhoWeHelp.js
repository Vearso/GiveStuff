import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {
    showFoundations,
    showOrganizations,
    showCollections,
    selectShow
} from "./whoWeHelpSlice";
import './WhoWeHelp.scss';
import tribal from '../../../assets/Decoration.svg'
import List from "./List/List";

const WhoWeHelp = () => {
    const show = useSelector(selectShow);
    const dispatch = useDispatch();

    return (
        <section className='page__whoWeHelp'>
            <h2 className="section__title">Komu pomagamy ?</h2>
            <img src={tribal} alt='decoration'/>
            <ul className="button__container">
                <li className={show.foundations ? 'button active' : 'button'}
                    onClick={() => dispatch(showFoundations())}>Fundacjom
                </li>
                <li className={show.organizations ? 'button active' : 'button'}
                    onClick={() => dispatch(showOrganizations())}>Organizacjom pozarządowym
                </li>
                <li className={show.collections ? 'button active' : 'button'}
                    onClick={() => dispatch(showCollections())}>Lokalnym zbiórkom
                </li>
            </ul>
            <List show={show}/>
        </section>
    )
}
export default WhoWeHelp;