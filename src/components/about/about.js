import React, { Fragment } from 'react'

export default ({ title = 'about', text = '' }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <p>Frontend Developer, out-of-the-box passionate about what the projects I am involved with.</p>
      <p>I currently work as a Sr. Lead Frontend Developer with a small team deploying an e-commerce solution written in <strong>React.</strong></p>
    </Fragment>
  )
}
