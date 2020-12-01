import React from 'react'
import '../../../scss/elements/_article.scss';
const Article = (props) => {
    return(
      <article className='section__article'>
          {props.children}
      </article>
    )
}
export default Article;