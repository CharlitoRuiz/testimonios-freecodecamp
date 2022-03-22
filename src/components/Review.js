import React from 'react';
import '../stylesheets/Review.css'

function Review(props){
  return(
    <div className='review-div'>
      <img 
        className='review-img'
        src={require(`../images/${props.photo}.png`)}
        alt={props.alt}/>
      <div className='text-review-div'>
        <p className='review-name'><strong>{props.name}</strong> en {props.country}</p>
        <p className='review-work'>{props.work} en <strong>{props.company}</strong></p>
        <p className='review-text'>"{props.review}"</p>
      </div>
    </div>
  );
}

export default Review;