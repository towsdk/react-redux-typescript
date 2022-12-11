import React, { useState } from 'react'

const Faq = ({id, title, desc}) => {
    const [Toggle, setToggle] = useState(false);
  return (
    <article><div>
        <h4>{title}</h4>
        <button onClick={()=> setToggle(!Toggle)}>{Toggle ? "-": "+"}</button>
        </div>
        {Toggle && <p>{desc}</p>}
    </article>
  )
}

export default Faq