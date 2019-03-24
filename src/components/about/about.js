import React, { Fragment } from 'react'

export default ({ title = 'about'}) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      <p>Frontend Developer, out-of-the-box passionate about what the projects I am involved with.</p>
      <p>I currently work as a Sr. Lead Frontend Developer with a small team deploying an<br/>
         e-commerce solution written in <strong>React.</strong></p>
      <p>Get a glimpse into my coding style here: <a href="https://sourcerer.io/jacebot" rel="noopener noreferrer" target="_blank">Sourcerer Profile</a></p>
    </Fragment>
  )
}
