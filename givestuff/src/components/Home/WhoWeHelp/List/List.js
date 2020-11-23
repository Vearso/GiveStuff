import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {
    displayCollections,
    displayFoundations,
    displayOrganizations,
    selectList, selectPage,
    setPage,
} from "./listSlice";


const List = ({show}) => {
    const list = useSelector(selectList);
    const page = useSelector(selectPage);
    const {foundations, collections, organizations} = show;
    const dispatch = useDispatch();

    const range = [];
    for (let i = 1; i <= Math.ceil(list.list.length / 3); i++) {
        range.push(i);
    }

    useEffect(() => {
        if (foundations) dispatch(displayFoundations())
        else if (collections) dispatch(displayCollections())
        else if (organizations) dispatch(displayOrganizations());
    }, [dispatch, foundations, collections, organizations]);

    return (
        <article className='whoWeHelp__list'>
            <p className="list--description">
                {list.description}
            </p>
            <ul className="list">
                {list.list.map(element => {
                    if (element.id <= page * 3 &&
                        element.id >= page * 3 - 2) {
                        return (<li className='list--element' key={element.id}>
                                <div className='element--description'>
                                    <h3 className="element--title">{element.title}</h3>
                                    <p className="element--purpose">{element.purpose}</p>
                                </div>
                                <p className="element--stuff">{element.stuff}</p>
                            </li>
                        )
                    } else return null
                })}
            </ul>
            <div className="list--pagination">{range.map(number =>
                <div className={number === page ? 'pagination--number active' : 'pagination--number'}
                     onClick={() => dispatch(setPage(Number(number) || 0))}
                     key={number}>{number}
                </div>)}
            </div>
        </article>
    )
}

export default List;