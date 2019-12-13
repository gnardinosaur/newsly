import React from 'react'

function ArticleItem(props){
  return (
    <div className={props.theme}>
      <strong>{props.title}</strong>
    </div>
  )
}

export default ArticleItem