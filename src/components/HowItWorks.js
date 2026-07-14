
import './Header.css'
import { motion } from "framer-motion";

import step1 from "../assets/step1-search.jpg";
import step2 from "../assets/step2-choose.jpg";
import step3 from "../assets/step3-book.jpg";
import step4 from "../assets/step4-enjoy.jpg";
import step5 from "../assets/step5-hotel.jpg";
import step6 from "../assets/step6-vehicle.jpg";

const steps = [
  {
    title: "Explore Destinations",
    desc: "Browse amazing travel destinations easily.",
    img: step1,
  },
  {
    title: "Choose Your Place",
    desc: "Select destination that matches your budget.",
    img: step2,
  },
  {
    title: "Book Your Trip",
    desc: "Quick booking with instant confirmation.",
    img: step3,
  },
  {
    title: "Choose Hotel",
    desc: "Pick best hotels with comfort & luxury.",
    img: step5,
  },
  {
    title: "Book Vehicle",
    desc: "Rent cars or taxis for smooth travel.",
    img: step6,
  },
  {
    title: "Enjoy Your Journey",
    desc: "Relax and enjoy a stress-free vacation.",
    img: step4,
  },
];

const HowItWorks = () => {
  return (
    <section className="how">
      <h2>How Our Website Works</h2>

      <div className="how-container">
        {steps.map((step, index) => (
          <motion.div
            className="how-card"
            key={index}
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          >
            <img src={step.img} alt={step.title} />
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;