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
      <div ref={homeRef} className="Container Home">
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
        <div className="content">
          <p>
            Finally Forever helps you bring the romance, excitement, and success of your special occasion to a new level. Are you planning to create an ambiance for yourself and your special someone? Or maybe you’re making sure a special moment goes perfect for your loved one… We are here to breathe life into your ideas!

            We are the only luxury service located in Atlanta which lets you design a unique experience based on your vision for your special moment!
            Create your own luxury experience or select from our thoughtfully designed packages.

            With Finally Forever it’s easy to SAY YES to celebrating your special occasion in style.

            From Yes to I DO, We’re here for you!

          </p>
        </div>
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
