import React from 'react'
import { Form, FormControl, Navbar } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";


const Filter = ({handleChange,title,ratingChange,rate}) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
    return (
        <Navbar style={{background:'gray'}} >
    <Navbar.Brand href="#home" style={{fontSize:"50px" , color:"red", marginLeft:'450px'}}>Netflix</Navbar.Brand>
    <Form inline>
      <FormControl type="text" 
      placeholder="Search" className="mr-sm-2" 
      onChange={handleChange}
      value={title}

      />
    </Form>
    <div style={{background:"white"}}>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={30}
    activeColor="#ffd700"
    isHalf={true}
  />
    </div>
  </Navbar>
    )
}

export default Filter