import React from 'react'
import img1 from "../img/pic3.webp"
// import { Link } from 'react-router-dom'
import Common from './Common'

export default function About() {
  return (
    <>
      <Common heading1="Welcome to the About Page of " heading2="On this website you will get the best courses which are taught by our best teachers.These course increase your productivity ans skills by 5X ." btnname="Contact Us" visite="/contact" imgsrc={img1}/>
    </>

  )
}
