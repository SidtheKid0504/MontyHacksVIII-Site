'use client';

import { useRef, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import hotAirBalloon1 from '../../public/hot-air-balloon-1.svg';
import logo from '../../public/logo.svg';
import { FaInstagram, FaEnvelope, FaDiscord } from 'react-icons/fa';

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const scheduleRef = useRef(null);
  const sponsorsRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const navbarHeight = 60;
      const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  const [openQuestion, setOpenQuestion] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const faqData = {
    general: [
      {
        question: "What is a hackathon?",
        answer: "A hackathon is a fun event where you team up with friends to create tech projects—like apps, games, or websites—in just one day! It’s a great way to learn, build, and have fun."
      },
      {
        question: "When is MontyHacks VIII?",
        answer: "MontyHacks VIII is on May 31st, 2025. It's a one-day event packed with coding, workshops, and prizes!"
      },
      {
        question: "What is this year's theme?",
        answer: 'The theme for this year is Exploration!'
      },
      {
        question: "What's the cost?",
        answer: "It's completely free! Thanks to our sponsors, we provide food, merch, and prizes at no cost to you."
      },
      {
        question: "What can I win?",
        answer: "We have awesome prizes like tech gadgets, gift cards, and a special beginner category so everyone has a chance to win!"
      },
      {
        question: "What should I bring?",
        answer: "Bring your laptop, charger, and excitement! We'&apos;'ll provide everything else, including food and resources."
      },
      {
        question: "I still have questions!",
        answer: (
          <>
            Email us at{' '}
            <a href="mailto:montycompsci@gmail.com" className={styles.faqLink}>
              montycompsci@gmail.com
            </a>!
          </>
        )
      }
    ],
    registration: [
      {
        question: "Who can attend?",
        answer: "MontyHacks VIII is open to middle and high school students ages 13 and up. You don&apos;t need any prior experience!"
      },
      {
        question: "When is the registration deadline?",
        answer: "Registration closes on May 15th, 2025, or when spots fill up—whichever comes first. Sign up early!"
      },
      {
        question: "How do teams work?",
        answer: "You can compete solo or in teams of up to 4. You can form a team beforehand or join one at the event."
      },
      {
        question: "What if I don't have a team?",
        answer: "No worries! You can compete alone or also find other people interested in forming a team on the day of the hackathon."
      },
    ]
  };

  const scheduleData = [
    { time: "8:00 AM", icon: "→", event: "Check In", location: "MHS Main Entrance" },
    { time: "8:30 AM", icon: "🎤", event: "Opening Ceremony", location: "MPAC" },
    { time: "9:00 AM", icon: "💻", event: "Hacking Starts & Team Formation", location: "Commons" },
    { time: "9:30 AM", icon: "🍳", event: "Breakfast", location: "Commons" },
    { time: "1:00 PM", icon: "🍕", event: "Lunch", location: "Commons" },
    { time: "6:00 PM", icon: "🍔", event: "Dinner", location: "Commons" },
    { time: "7:00 PM", icon: "⏰", event: "Hacking Ends", location: "Commons" },
    { time: "7:30 PM", icon: "⚖", event: "Judging Starts", location: "Commons" },
    { time: "9:00 PM", icon: "🏆", event: "Closing Ceremony & Awards", location: "MPAC" },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.floatingBalloon1}></div>
      <div className={styles.floatingBalloon2}></div>
      <div className={styles.floatingBalloon3}></div>
      <div className={styles.floatingCloud1}></div>
      <div className={styles.floatingCloud2}></div>
      <div className={styles.floatingCloud3}></div>
      <div className={styles.floatingCloud4}></div>
      <div className={styles.floatingCloud5}></div>
      <div className={styles.floatingCloud6}></div>
      <div className={styles.floatingCloud7}></div>
      <div className={styles.floatingCloud8}></div>
      <div className={styles.floatingCloud9}></div>
      <nav className={styles.navbar}>
        <Image src={logo} width={150} height={150} alt="logo"/>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
          <li><button onClick={() => { scrollToSection(homeRef); toggleMenu(); }}>Home</button></li>
          <li><button onClick={() => { scrollToSection(aboutRef); toggleMenu(); }}>About</button></li>
          <li><button onClick={() => { scrollToSection(scheduleRef); toggleMenu(); }}>Schedule</button></li>
          <li><button onClick={() => { scrollToSection(faqRef); toggleMenu(); }}>FAQ</button></li>
          <li><button onClick={() => { scrollToSection(sponsorsRef); toggleMenu(); }}>Sponsors</button></li>
        </ul>
      </nav>
      <section className={styles.hero} ref={homeRef} id="home">
        <div className={styles.heroContent}>
          <div className={styles.heroImage}>
            <Image src={hotAirBalloon1} width={500} height={500} alt="" />
          </div>
          <div className={styles.heroText}>
            <h1>
              Explore With Us At <br /><br /><span className={styles.title}>MontyHacks VIII</span>
            </h1>
            <p className={styles.subtitle}>May 31st, 2025</p>
            <div className={styles.buttonGroup}>
              <button onClick={() => scrollToSection(aboutRef)} className={styles.cta}>
                Learn More
              </button>
              <button onClick={() => window.location.assign('https://forms.gle/roiDHNcSW44WvGwQ8')} className={styles.cta}>
                Register Now!
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section} ref={aboutRef} id="aboutUs">
        <h2 className={styles.aboutHeader}>About</h2>
        <div className={styles.content}>
          <p>
            MontyHacks VIII is a one-day event where middle and high school students from all over the country come together to create tech projects in just one day. This year&apos;s theme is &apos;Exploration&apos; and we&apos;re excited to have a variety of projects to showcase and inspire our attendees.
          </p>
        </div>
      </section>
      <section ref={scheduleRef} className={styles.schedule} id="schedule">
        <div className={styles.scheduleContainer}>
          <h2 className={styles.scheduleTitle}>Schedule</h2>
          <div className={styles.timeline}>
            {scheduleData.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineTime}>{item.time}</div>
                <div className={styles.timelineIcon}>{item.icon}</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineEvent}>{item.event}</div>
                  <div className={styles.timelineLocation}>{item.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section ref={faqRef} className={styles.faq} id="faq">
        <div className={styles.faqContainer}>
          <h2 className={styles.faqTitle}>FAQ</h2>
          <div className={styles.faqColumns}>
            <div className={styles.faqColumn}>
              <h3 className={styles.faqColumnTitle}>General</h3>
              {faqData.general.map((item, index) => (
                <div key={index} className={styles.faqItem}>
                  <span className='faq-dot'></span>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggleQuestion(`general-${index}`)}
                  >
                    <span className={styles.faqDot}></span>
                    {item.question}
                  </button>
                  <div
                    className={`${styles.faqAnswer} ${
                      openQuestion === `general-${index}` ? styles.faqAnswerOpen : ''
                    }`}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.faqColumn}>
              <h3 className={styles.faqColumnTitle}>Registration</h3>
              {faqData.registration.map((item, index) => (
                <div key={index} className={styles.faqItem}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggleQuestion(`registration-${index}`)}
                  >
                    <span className={styles.faqDot}></span>
                    {item.question}
                  </button>
                  <div
                    className={`${styles.faqAnswer} ${
                      openQuestion === `registration-${index}` ? styles.faqAnswerOpen : ''
                    }`}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section ref={sponsorsRef} className={styles.sponsors} id="sponsors">
        <div className={styles.sponsorsContainer}>
          <h2 className={styles.sponsorsTitle}>Sponsors</h2>
          <p className={styles.sponsorsCta}>
            Interested in sponsoring MontyHacks VIII? Email us at{' '}
            <a href="mailto:montycompsci@gmail.com" className={styles.faqLink}>
              montycompsci@gmail.com
            </a>!
          </p>
          <div className={styles.sponsorLogos}></div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>Contact Us Here</p>
          <div className={styles.socialLinks}>
            <a
              href="mailto:montycompsci@gmail.com"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email MontyHacks"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/montyhacks?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow MontyHacks on Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://discord.gg/hm5RrqZY"
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join Our Discord"
            >
              <FaDiscord />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}