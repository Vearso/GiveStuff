import React from 'react'
import Article from "../Article/Article";
import './Columns.scss';

const Columns = () => {
    return (
        <section className="home__threeColumns">
            <Article >
                <h2>10</h2>
                <span>Oddanych worków</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.</p>
            </Article>
            <Article >
                <h2>5</h2>
                <span>Wspartych organizacji</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.</p>
            </Article>
            <Article >
                <h2>7</h2>
                <span>Zorganizowanych zbiórek</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma.
                    Aliquam erat volutpat.</p>
            </Article>
        </section>

    )
}

export default Columns;