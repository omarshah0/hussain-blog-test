import React from "react"
import "./card.css"

const Card = ({ key, title, slug, authorName, categories }) => {
  return (
    <div className="card" key={key}>
      <h1>{title}</h1>
      <p>Slug is : {slug}</p>
      <p>
        <b>Author: {authorName}</b>
      </p>
      <p>
        <b>Categories:</b>
        <ul>
          {categories.map(category => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </p>
    </div>
  )
}

export default Card
