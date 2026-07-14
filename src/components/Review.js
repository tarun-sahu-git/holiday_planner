import React, { useState } from 'react'
import './Header.css'

function Review() {

  const reviews = [
    {
      name: "Emily Watson",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: "⭐⭐⭐⭐⭐",
      text: "195 Holidays made planning our vacation so simple! Everything was organized perfectly."
    },
    {
      name: "John Doe",
      img: "https://randomuser.me/api/portraits/men/36.jpg",
      rating: "⭐⭐⭐⭐⭐",
      text: "I loved the curated destinations and easy booking. Highly recommend!"
    },
    {
      name: "Sophia Lee",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: "⭐⭐⭐⭐",
      text: "Great platform for planning trips. The itinerary suggestions were really helpful."
    },
    {
      name: "Alex Martin",
      img: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: "⭐⭐⭐⭐",
      text: "Amazing experience booking with 195 Holidays. Excellent customer support!"
    },
    {
      name: "Priya Sharma",
      img: "https://randomuser.me/api/portraits/women/52.jpg",
      rating: "⭐⭐⭐⭐⭐",
      text: "Best holiday deals I’ve found online. Totally worth it!"
    },
    {
      name: "Rohan Singh",
      img: "https://randomuser.me/api/portraits/men/18.jpg",
      rating: "⭐⭐⭐⭐",
      text: "Smooth planning and quick responses from support. Would use it again."
    },
    {
      name: "Anna Lee",
      img: "https://randomuser.me/api/portraits/women/81.jpg",
      rating: "⭐⭐⭐",
      text: "Fantastic travel tips and beautiful destination photos. Super helpful!"
    },
    {
      name: "Michael Brown",
      img: "https://randomuser.me/api/portraits/men/49.jpg",
      rating: "⭐⭐⭐",
      text: "Highly recommend for anyone who hates complicated travel planning."
    }
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleReviews = showAll ? reviews : reviews.slice(0, 4);

  return (
    <>
      <div className="reviews_main_div">
        <h2 className="reviews_heading">What Our Travelers Say</h2>

        <div className="reviews_container">
          {visibleReviews.map((item, index) => (
            <div className="review_card" key={index}>
              <img src={item.img} alt="user" className="review_avatar" />
              <h4 className="review_name">{item.name}</h4>
              <div className="review_rating">{item.rating}</div>
              <p className="review_text">"{item.text}"</p>
            </div>
          ))}
        </div>

        {/* VIEW MORE BUTTON */}
        {reviews.length > 4 && (
          <button
            className="review_more_btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "View Less Reviews" : "View More Reviews"}
          </button>
        )}
      </div>
    </>
  )
}

export default Review
