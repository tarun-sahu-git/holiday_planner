import React, { useState } from 'react'
import './Header.css'

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const faqData = [
    {
      question: "What is included in a typical travel package?",
      answer:
        "Our travel packages typically include accommodation, meals, sightseeing tours, and transportation. Some packages may also include activities and guided experiences."
    },
    {
      question: "How can I book a package?",
      answer:
        "You can book a package directly through our website by selecting your desired destination and travel dates, then completing the payment process."
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Cancellation policies vary per package. Typically, cancellations made 7 days before departure are eligible for a partial refund."
    },
    {
      question: "Do you provide travel insurance?",
      answer:
        "Yes, travel insurance is available for most packages. It covers medical emergencies, trip cancellations, and lost baggage."
    }
  ]

  return (
    <>
      <div className="faq_main">
        <h2 className="faq_heading">❓ Frequently Asked Questions</h2>
        <p className="faq_subheading">
          Find answers to common queries about our travel packages and services.
        </p>

        <div className="faq_container">
          {faqData.map((item, index) => (
            <div className="faq_item" key={index}>
              <div
                className="faq_question"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span className="faq_toggle">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              <div
                className={`faq_answer ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Faq
