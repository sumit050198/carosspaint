import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
    {
        text: "Zen Doan is a business analyst, entrepreneur and media proprietor, and investor. She also known as the best selling book author.",
        author: "Zen",
        role: "Author",
        image: "https://img.freepik.com/free-photo/young-businessman-with-laptop-computer-working-office_231208-2579.jpg?uid=R140412218&ga=GA1.1.494869419.1717679442&semt=ais_hybrid"
    },
    {
        text: "Alex is a renowned motivational speaker and life coach who has helped thousands of people achieve their goals.",
        author: "Alex",
        role: "Life Coach",
        image: "https://img.freepik.com/free-photo/young-pretty-girl-standing-giving-thumbs-up-white_114579-74315.jpg?uid=R140412218&ga=GA1.1.494869419.1717679442&semt=ais_hybrid"
    },
    {
        text: "Jordan is a software engineer with over a decade of experience in developing cutting-edge applications.",
        author: "Jordan",
        role: "Software Engineer",
        image: "https://img.freepik.com/free-photo/surprised-woman-showing-open-hand-palm-with-copy-space-product-text-white-background_231208-1831.jpg?uid=R140412218&ga=GA1.1.494869419.1717679442&semt=ais_hybrid"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
    <div className="testimonials-container my-5">
        <h1 style={{textTransform: "uppercase", fontSize: "42px", textAlign: "center", color: "#b8242a", fontWeight: "700", marginBottom: "40px" }}>TESTIMONIALS</h1>
      <div className="testimonial-card mt-4">
        <div className="testimonial-text">
          <p>"{testimonials[currentIndex].text}"</p>
          <p><strong>{testimonials[currentIndex].author}</strong></p>
          <p>{testimonials[currentIndex].role}</p>
        </div>
        <div className="testimonial-image">
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} />
        </div>
      </div>
      <div className="testimonial-navigation">
        <button onClick={goToPrevious} className="nav-button">Previous</button>
        {testimonials.map((_, index) => (
          <span 
            key={index} 
            className={`nav-dot ${index === currentIndex ? 'active' : ''}`} 
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
        <button onClick={goToNext} className="nav-button">Next</button>
      </div>
    </div >
  );
};

export default Testimonials;
