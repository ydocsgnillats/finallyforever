import React, { useRef, useState, useEffect } from 'react';
import './App.scss';
import Card from './components/Card';
import Page from './components/Page';
import BottomInfo from './components/BottomInfo';
import Form from './components/Form';
import { cardOneContent, cardTwoContent, cardThreeContent, cardFourContent, cardFiveContent } from './content/cardContent';

function App() {

  const homeRef = useRef<any>(null);
  const offeringRef = useRef<any>(null);
  const bookRef = useRef<any>(null);
  const testimonialRef = useRef<any>(null);
  const aboutRef = useRef<any>(null);

  const [showCards, setShowCards] = useState(true);
  const [showPage, setShowPage] = useState(0);

  const handleHome = () => homeRef?.current?.scrollIntoView({ behavior: "smooth" });
  const handleOffering = () => offeringRef?.current?.scrollIntoView({ behavior: "smooth" });
  const handleBook = () => bookRef?.current?.scrollIntoView({ behavior: "smooth" });
  const handleTestimonial = () => testimonialRef?.current?.scrollIntoView({ behavior: "smooth" });
  const handleAbout = () => aboutRef?.current?.scrollIntoView({ behavior: "smooth" });

  const cardClicked = (c: any) => {
    setShowCards(false);
    setShowPage(c);
  }

  const goBack = () => {
    setShowPage(0);
    setShowCards(true);
  }

  useEffect(() => {
    const close = (e: any) => {
      if (e.keyCode === 27) {
        goBack();
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  const Pages = () => {
    switch (showPage) {
      case 1:
        return (<Page {...cardOneContent} back={() => goBack()} />)
        break;
      case 2:
        return (<Page {...cardTwoContent} back={() => goBack()} />)
        break;
      case 3:
        return (<Page {...cardThreeContent} back={() => goBack()} />)
        break;
      case 4:
        return (<Page {...cardFourContent} back={() => goBack()} />)
        break;
      case 5:
        return (<Page {...cardFiveContent} back={() => goBack()} />)
        break;
    }
  }

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
          <p className={showCards ? "" : "hidden"} >
            Offerings
          </p>
        </header>
        {showCards && <div>
          <Card
            {...cardOneContent}
            click={() => cardClicked(1)}
          />
          <Card
            {...cardTwoContent}
            click={() => cardClicked(2)}
          />
          <Card
            {...cardThreeContent}
            click={() => cardClicked(3)}
          />
          <Card
            {...cardFourContent}
            click={() => cardClicked(4)}
          />
          <BottomInfo
            {...cardFiveContent}
            click={() => cardClicked(5)}
          />
        </div>}
        {
          showPage > 0 && Pages()
        }
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
