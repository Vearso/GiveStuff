import React from 'react'
import people from '../../../assets/People.jpg';
import tribal from '../../../assets/Decoration.svg';
import signature from '../../../assets/Signature.svg';

const About = () => {
    return (
        <section className="home__about" id='about'>
            <article className="about__article">
                <h2 className="article--title">O nas</h2>
                <img className="article--decoration" src={tribal} alt='decoration'/>
                <p className="article--text">
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts
                    black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <img className="article--signature" src={signature} alt='signature'/>
            </article>
            <img className="about__image" src={people} alt='group of people'/>
        </section>
    )
}

export default About