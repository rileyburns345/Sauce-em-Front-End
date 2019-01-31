import React from 'react'
import Menu from '../components/menu'
import "../styles/about.css"

const AboutPage = () => {
  return (
    <div>
      <Menu />
      <div className="about-bg-img">
        <h1 className="aboutHeader">What is Sauce'em?</h1>
        <p className="aboutText">We bring you the flavors of the world to your door step</p>
        <p className="aboutText">You don’t need to be an expert chef to make spectacular dishes because now YOU have the secret sauce </p>
      </div>
    </div>
  )
}

export default AboutPage
