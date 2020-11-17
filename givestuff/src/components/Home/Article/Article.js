import React from 'react'
import './Article.scss';
const Article = (props) => {
    return(
      <article className='section__article'>
          {props.children}
      </article>
    )
}
export default Article;