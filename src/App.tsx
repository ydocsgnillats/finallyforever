import React, { useRef, useState } from 'react';
import './App.scss';
import Card from './components/Card';
import BottomInfo from './components/BottomInfo';
import Form from './components/Form';

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
    <div className="app">
      <button className="scrollTop" onClick={handleHome}>Scroll To Top</button>
      <div ref={homeRef} className="container Home">
        <div className="navbar">
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
        <p className="subtitle">
          and it's time to <span className="bold">celebrate!</span>
        </p>
        <div className="content">
          <p>
            Finally Forever helps you bring the romance, excitement, and success of your special occasion to a new level. Are you planning to create an ambiance for yourself and your special someone? Or maybe you’re making sure a special moment goes perfect for your loved one… We are here to breathe life into your ideas!

            We are the only luxury service located in Atlanta which lets you design a unique experience based on your vision for your special moment!
            Create your own luxury experience or select from our thoughtfully designed packages.

            With Finally Forever it’s easy to SAY YES to celebrating your special occasion in style.
          </p>
          <span className="signoff">From Yes to I DO, We’re here for you!</span>
        </div>
      </div>
      <div ref={offeringRef} className="container offerings">
        <header>
          <p>
            Offerings
          </p>
        </header>
        <div>
          <Card
            title="Wedding Night Extravagance"
            text="The scene will be perfectly set for your romantic evening - Includes a bottle of champagne on ice, two toasting glasses, an indulgent confection, snack basket with some of the couples favorite treats, a dozen fresh red roses, 1000 silk rose petals arranged in a heart on the bed or as a walkway, and a special gift for the newlyweds!"
            extras=
            {`Champagne upgrade - $50 for Moet and Chandon Imperial Rose, 
              Market Price honored for Dom Perignon (as available) 
              Bridal Lingerie - Inquire for more information!
              Upgrade to Two Dozen Red Roses - $20
            `}
            price="$450"
          />
          <Card
            title="Prep a Proposal"
            text="You’re looking to wow your special person and we’re rooting for you! Our proposal package includes 2000 silk rose petals arranged in a heart or as a walkway, a “will you marry me?” banner, a dozen fresh red roses, romantic balloon bouquet, 24 flameless flickering candles, and a special gift for the happy couple!"
            extras=
            {`Bottle of champagne and two toasting flutes (if location permits) - $70
              Bluetooth speaker (waterproof, LED color changing) - $50
              Upgrade to Two Dozen Fresh Red Roses - $20
            `}
            price="$400"
          />
          <Card
            title="Bach/Bachelorette Total Transformation"
            text="Work with us to design a theme fitting of the bride and groom and we will do the rest to elevate your space to the next level! From extra wild to a sophisticated and elegant celebration - We have you covered. This package will include a bachelor or bachelorette banner, complimentary alcohol selection to get your party started, a mystery novelty gift to add to the fun, a balloon bouquet, snack basket, and a hangover recovery kit."
            extras=
            {`$100 in 1 dollar bills - $100
              Pinata pre filled with assorted mini liquor bottles (12 bottles included) - $50
              Alcohol selection upgrade - $50
              Bluetooth speaker (waterproof, LED color changing) - $50
              Party Veil - $20
              Beer Bong Funnel with Valve - $30
              Chambong (acrylic, set of 6) - $50
            `}
            price="$450"
          />
          <Card
            title="Bridal/Groom Suite Set Up"
            text="The scene will be perfectly set for your romantic evening - Includes a bottle of champagne on ice, two toasting glasses, an indulgent confection, snack basket with some of the couples favorite treats, a dozen fresh red roses, 1000 silk rose petals arranged in a heart on the bed or as a walkway, and a special gift for the newlyweds!"
            extras=
            {`Chambong (acrylic, set of 6) - $50
              Bluetooth speaker (waterproof, LED color changing) - $50
            `}
            price="$450"
          />
          <BottomInfo
            title="Design a Custom Experience"
            text="Each service includes a virtual meeting 
            to discuss inspiration and ideas for your booking 
            so that all special requests and details can be planned 
            the way you envision! Enhancements can be added to each package 
            - ultimately we are happy to design the experience to fit your vision!"
          />
        </div>
      </div>
      <div ref={bookRef} className="container book">
        <header>
          <p>
            Book Us
          </p>
        </header>
        <Form />
      </div>
      <div ref={testimonialRef} className="container testimonial">
        <header>
          <p>
            Testimonials
          </p>
        </header>
      </div>
      <div ref={aboutRef} className="container about">
        <p>
          About Us
        </p>
      </div>
    </div>
  );
}

export default App;
