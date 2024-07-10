import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
    {
        text: "Zen Doan is a business analyst, entrepreneur and media proprietor, and investor. She also known as the best selling book author.",
        author: "Zen",
        role: "Author"
    },
    {
        text: "Alex is a renowned motivational speaker and life coach who has helped thousands of people achieve their goals.",
        author: "Alex",
        role: "Life Coach"
    },
    {
        text: "Jordan is a software engineer with over a decade of experience in developing cutting-edge applications.",
        author: "Jordan",
        role: "Software Engineer"
    },
    {
        text: "Zen Doan is a business analyst, entrepreneur and media proprietor, and investor. She also known as the best selling book author.",
        author: "Zen",
        role: "Author"
    },
    {
        text: "Alex is a renowned motivational speaker and life coach who has helped thousands of people achieve their goals.",
        author: "Alex",
        role: "Life Coach"
    },
    {
        text: "Jordan is a software engineer with over a decade of experience in developing cutting-edge applications.",
        author: "Jordan",
        role: "Software Engineer"
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
        <div className="testimonials-container mt-5">
            <h1 className="testimonial-heading">TESTIMONIALS</h1>
            <div className="testimonial-card mt-4">
                <div className="testimonial-text">
                    <p>"{testimonials[currentIndex].text}"</p>
                    <p><strong>{testimonials[currentIndex].author}</strong></p>
                    <p>{testimonials[currentIndex].role}</p>
                    <div className="stars">
                        {Array(5).fill().map((_, i) => (
                            <span key={i} className="star">★</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="testimonial-navigation">
                {/* <button onClick={goToPrevious} className="nav-button">Previous</button> */}
                {testimonials.map((_, index) => (
                    <span 
                        key={index} 
                        className={`nav-dot ${index === currentIndex ? 'active' : ''}`} 
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
                {/* <button onClick={goToNext} className="nav-button">Next</button> */}
            </div>
        </div>
    );
};

export default Testimonials;
