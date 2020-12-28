import React  from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = ({peeps,prev,next}) => {
  const {image,name,job,text} = peeps;
  // const {next,prev} = props
  return <>
    <div className="rev">
      <div className = "img-container">
        <img src={image} alt="" className = "person-img"/>
      </div>

<h5>{name}</h5>
<p>{job}</p>
<p>{text}<FaQuoteRight   className="" ></FaQuoteRight></p>

<div className="buttonss d-flex justify-content-between">
  <button className="prev-btn" onClick ={()=>prev()}><FaChevronLeft></FaChevronLeft></button>
    <button className="random-btn" >random</button>
      <button className="next-btn"  onClick ={()=>next()}><FaChevronRight></FaChevronRight></button>
</div>
    </div>
    </>

};

export default Review;
