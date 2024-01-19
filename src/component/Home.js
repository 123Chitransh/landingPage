import React from 'react'
import img1 from "../img/pic1.avif"
// import { Link } from 'react-router-dom'
import Common from './Common'

export default function Home() {
  return (
    <>
      <Common heading1="Get start your bussiness with " heading2="We are the team of talented developer making website" btnname="Get started" visite="/service" imgsrc={img1}/>
    </>
  )
}
