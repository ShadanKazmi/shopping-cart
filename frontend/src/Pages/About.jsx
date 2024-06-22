import React from 'react'
import NavBar from '../Components/NavBar'
import { Card } from 'react-bootstrap'
import BottomBar from '../Components/BottomBar'

const About = () => {
  return (
    <div className='wow'> 
      <NavBar/>
      <Card className='about-us'>
        <Card.Title style={{fontSize:"50px"}}>
          About Us
        </Card.Title>
        <Card.Text style={{fontSize:"30px", margin:"40px"}}>
        This project is an assigned project from the odin project where we practice the concepts of routing in react, fetching data in react, styling applications in react , and type checking with proptypes.

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda sequi sit autem dolorum iusto hic eius voluptate? Consequuntur eligendi molestiae, sint voluptatibus tempora provident ratione nemo, ab est dolorum error soluta nam nobis. Quaerat esse, pariatur rerum a officia quas.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda sequi sit autem dolorum iusto hic eius voluptate? Consequuntur eligendi molestiae, sint voluptatibus tempora provident ratione nemo, ab est dolorum error soluta nam nobis. Quaerat esse, pariatur rerum a officia quas.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda sequi sit autem dolorum iusto hic eius voluptate? Consequuntur eligendi molestiae, sint voluptatibus tempora provident ratione nemo, ab est dolorum error soluta nam nobis. Quaerat esse, pariatur rerum a officia quas.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda sequi sit autem dolorum iusto hic eius voluptate? Consequuntur eligendi molestiae, sint voluptatibus tempora provident ratione nemo, ab est dolorum error soluta nam nobis. Quaerat esse, pariatur rerum a officia quas.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda sequi sit autem dolorum iusto hic eius voluptate? Consequuntur eligendi molestiae, sint voluptatibus tempora provident ratione nemo, ab est dolorum error soluta nam nobis. Quaerat esse, pariatur rerum a officia quas.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda sequi sit autem dolorum iusto hic eius voluptate? Consequuntur eligendi molestiae, sint voluptatibus tempora provident ratione nemo, ab est dolorum error soluta nam nobis. Quaerat esse, pariatur rerum a officia quas.
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda sequi sit autem dolorum iusto hic eius voluptate? Consequuntur eligendi molestiae, sint voluptatibus tempora provident ratione nemo, ab est dolorum error soluta nam nobis. Quaerat esse, pariatur rerum a officia quas.
        </Card.Text>
      </Card>
      <BottomBar/>
    </div>
  )
}

export default About