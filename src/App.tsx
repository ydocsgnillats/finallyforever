import React, { useRef, useState } from 'react';
import './App.css';

function App() {

  const homeRef = useRef<any>(null);
  const offeringRef = useRef<any>(null);
  const bookRef = useRef<any>(null);
  const testimonialRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);

  const handleHome = () => homeRef?.current?.scrollIntoView({ behavior: "smooth" });
  const handleOffering = () => offeringRef?.current?.scrollIntoView({ behavior: "smooth" });
  const handleBook = () => bookRef?.current?.scrollIntoView({ behavior: "smooth" });
  const handleTestimonial = () => testimonialRef?.current?.scrollIntoView({ behavior: "smooth" });
  const handleAbout = () => aboutRef?.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="App">
      <button className="scrollTop" onClick={handleHome}>Scroll To Top</button>
      <div ref={homeRef} className="Container">
        <div className="Navbar">
          <button onClick={handleOffering}>Offerings</button>
          <button onClick={handleBook}>Book Us</button>
          <button onClick={handleTestimonial}>Testimonials</button>
          <button onClick={handleAbout}>About Us</button>
        </div>
        <header>
          <p>
            It's Finally Forever...
          </p>
        </header>
      </div>
      <div ref={offeringRef} className="Container">
        <p>
          Offerings
        </p>
      </div>
      <div ref={bookRef} className="Container">
        <p>
          Book Us
        </p>
      </div>
      <div ref={testimonialRef} className="Container">
        <p>
          Testimonials
        </p>
      </div>
      <div ref={aboutRef} className="Container">
        <p>
          About Us
        </p>
      </div>
    </div>
  );
}

export default App;
