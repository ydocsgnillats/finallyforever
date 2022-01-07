import React, { useRef, useState } from 'react';
import './App.scss';
import Card from './components/Card';
import testrose from 'testrose.jpeg';

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
      <div ref={offeringRef} className="Container Offerings">
        <header>
          <p>
            Offerings
          </p>
        </header>
        <div>
          <Card
            title="Wedding Night Extravagance"
            text="The scene will be perfectly set for your romantic evening - Includes a bottle of champagne on ice, two toasting glasses, an indulgent confection, snack basket with some of the couples favorite treats, a dozen fresh red roses, 1000 silk rose petals arranged in a heart on the bed or as a walkway, and a special gift for the newlyweds! $450"
          />
          <Card
            title="Prep a Proposal"
            text="You’re looking to wow your special person and we’re rooting for you! Our proposal package includes 2000 silk rose petals arranged in a heart or as a walkway, a “will you marry me?” banner, a dozen fresh red roses, romantic balloon bouquet, 24 flameless flickering candles, and a special gift for the happy couple! $400"
          />
          <Card
            title="Bach/Bachelorette Total Transformation"
            text="Work with us to design a theme fitting of the bride and groom and we will do the rest to elevate your space to the next level! From extra wild to a sophisticated and elegant celebration - We have you covered. This package will include a bachelor or bachelorette banner, complimentary alcohol selection to get your party started, a mystery novelty gift to add to the fun, a balloon bouquet, snack basket, and a hangover recovery kit. $450"
          />
          <Card
            title="Bridal/Groom Suite Set Up"
            text="The scene will be perfectly set for your romantic evening - Includes a bottle of champagne on ice, two toasting glasses, an indulgent confection, snack basket with some of the couples favorite treats, a dozen fresh red roses, 1000 silk rose petals arranged in a heart on the bed or as a walkway, and a special gift for the newlyweds! $450"
          />
        </div>
      </div>
      <div ref={bookRef} className="Container Book">
        <p>
          Book Us
        </p>
      </div>
      <div ref={testimonialRef} className="Container Testimonial">
        <p>
          Testimonials
        </p>
      </div>
      <div ref={aboutRef} className="Container About">
        <p>
          About Us
        </p>
      </div>
    </div>
  );
}

export default App;
