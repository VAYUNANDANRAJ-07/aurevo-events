"use client";

export default function Home() {
  return (
    <main>

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <a href="#home" className="nav-logo">
          <img src="/aurevo-logo.png" alt="AUREVO Events" />
        </a>

        <nav>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>


      {/* ================= HERO ================= */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-label">AUREVO EVENTS</p>

          <h1>
            Moments
            <br />
            <span>worth remembering.</span>
          </h1>

          <p className="hero-description">
            We create elegant, memorable and unforgettable
            experiences designed around you.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="gold-button">
              PLAN YOUR EVENT
            </a>

            <a href="#services" className="outline-button">
              EXPLORE
            </a>
          </div>
        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="section about-section">
        <p className="section-label">
          01 — ABOUT US
        </p>

        <div className="about-layout">
          <div className="about-heading">
            <h2>
              We don't just
              <br />
              organize events.
              <br />
              <span>We create experiences.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              AUREVO EVENTS is an event experience company focused on
              creating elegant, memorable and unforgettable celebrations.
            </p>

            <p>
              From the first idea to the final moment, we take care of
              every detail to create experiences that people remember.
            </p>
          </div>
        </div>
      </section>


      {/* ================= WHY AUREVO ================= */}
      <section className="section why-aurevo">
        <div className="why-heading">
          <p className="section-label">
            02 — WHY AUREVO
          </p>

          <h2>
            Your event.
            <br />
            <span>Our obsession.</span>
          </h2>
        </div>

        <div className="why-grid">

          <div className="why-card">
            <span>01</span>
            <h3>CREATIVE</h3>
            <p>
              Fresh concepts and creative ideas designed around
              your event and your audience.
            </p>
          </div>

          <div className="why-card">
            <span>02</span>
            <h3>PERSONAL</h3>
            <p>
              Every event is different. We build experiences that
              reflect your vision and personality.
            </p>
          </div>

          <div className="why-card">
            <span>03</span>
            <h3>PRECISE</h3>
            <p>
              From planning to execution, every detail is handled
              with care and precision.
            </p>
          </div>

          <div className="why-card">
            <span>04</span>
            <h3>UNFORGETTABLE</h3>
            <p>
              We don't just manage events. We create moments people
              remember long after the event ends.
            </p>
          </div>

        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section id="services" className="section services-section">
        <p className="section-label">
          03 — WHAT WE DO
        </p>

        <h2>Our Services</h2>

        <div className="service-grid">

          <div className="service-card">
            <h3>College Events</h3>
          </div>

          <div className="service-card">
            <h3>Corporate Events</h3>
          </div>

          <div className="service-card">
            <h3>Private Celebrations</h3>
          </div>

          <div className="service-card">
            <h3>Entertainment</h3>
          </div>

          <div className="service-card">
            <h3>Decorations</h3>
          </div>

          <div className="service-card">
            <h3>Photography &amp; Video</h3>
          </div>

        </div>
      </section>


      {/* ================= PROCESS ================= */}
      <section className="section process-section">
        <p className="section-label">
          04 — OUR PROCESS
        </p>

        <h2>From Vision to Reality.</h2>

        <div className="process-grid">

          <div className="process-card">
            <div className="process-number">
              01
            </div>

            <h3>DISCOVER</h3>

            <p>
              We understand your vision, requirements,
              audience and expectations.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">
              02
            </div>

            <h3>DESIGN</h3>

            <p>
              We develop creative concepts and plan every
              element of your event.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">
              03
            </div>

            <h3>EXECUTE</h3>

            <p>
              We bring the plan to life with precise
              coordination and attention to detail.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">
              04
            </div>

            <h3>DELIVER</h3>

            <p>
              We make sure every moment is seamless,
              memorable and unforgettable.
            </p>
          </div>

        </div>
      </section>


      {/* ================= GALLERY ================= */}
      <section className="section gallery-section">
        <p className="section-label">
          05 — EXPERIENCES
        </p>

        <h2>Moments We Create.</h2>

        <div className="gallery">

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"
              alt="Elegant event celebration"
            />

            <div className="gallery-overlay">
              <span>CELEBRATION</span>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1200&q=80"
              alt="Corporate event"
            />

            <div className="gallery-overlay">
              <span>CORPORATE</span>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
              alt="Live event"
            />

            <div className="gallery-overlay">
              <span>ENTERTAINMENT</span>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80"
              alt="Wedding celebration"
            />

            <div className="gallery-overlay">
              <span>MEMORIES</span>
            </div>
          </div>

        </div>
      </section>


      {/* ================= CONTACT ================= */}
      <section id="contact" className="section contact-section">

        <p className="section-label">
          06 — LET'S TALK
        </p>

        <h2>
          Let's create something
          <br />
          <span>unforgettable.</span>
        </h2>


        <div className="contact-layout">

          {/* ================= WEB3FORMS ================= */}
          <form
            className="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
          >

            {/* YOUR WEB3FORMS ACCESS KEY */}
            <input
              type="hidden"
              name="access_key"
              value="PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE"
            />

            {/* EMAIL SUBJECT */}
            <input
              type="hidden"
              name="subject"
              value="New AUREVO Events Enquiry"
            />

            {/* FROM NAME */}
            <input
              type="hidden"
              name="from_name"
              value="AUREVO Events Website"
            />

            {/* REDIRECT AFTER SUBMISSION */}
            <input
              type="hidden"
              name="redirect"
              value="https://aurevo-events.vercel.app/"
            />

            {/* ================= NAME ================= */}
            <label htmlFor="name">
              YOUR NAME
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />


            {/* ================= EMAIL ================= */}
            <label htmlFor="email">
              YOUR EMAIL
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              required
            />


            {/* ================= PHONE ================= */}
            <label htmlFor="phone">
              PHONE NUMBER
            </label>

            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              required
            />


            {/* ================= EVENT ================= */}
            <label htmlFor="event">
              YOUR EVENT
            </label>

            <input
              id="event"
              type="text"
              name="event"
              placeholder="College / Corporate / Private"
              required
            />


            {/* ================= REQUIREMENTS ================= */}
            <label htmlFor="requirements">
              YOUR REQUIREMENTS
            </label>

            <textarea
              id="requirements"
              name="requirements"
              placeholder="Tell us about your event..."
              rows={6}
              required
            />


            {/* ================= SUBMIT ================= */}
            <button
              type="submit"
              className="gold-button submit-button"
            >
              SEND ENQUIRY
            </button>

          </form>


          {/* ================= CONTACT INFORMATION ================= */}
          <div className="contact-info">

            <div className="contact-detail">
              <span>PHONE</span>
              <a href="tel:+918019842186">
                +91 80198 42186
              </a>
            </div>


            <div className="contact-detail">
              <span>EMAIL</span>
              <a href="mailto:aurevoevents@gmail.com">
                aurevoevents@gmail.com
              </a>
            </div>


            <div className="contact-detail">
              <span>INSTAGRAM</span>

              <a
                href="https://www.instagram.com/_aurevoevents/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @_aurevoevents
              </a>
            </div>


            <div className="contact-detail">
              <span>LOCATION</span>
              <p>Hyderabad, Telangana</p>
            </div>

          </div>

        </div>


        {/* ================= CONTACT BUTTONS ================= */}
        <div className="contact-buttons">

          <a
            href="https://wa.me/918019842186"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-button"
          >
            WHATSAPP
          </a>


          <a
            href="mailto:aurevoevents@gmail.com"
            className="outline-button"
          >
            EMAIL US
          </a>


          <a
            href="https://www.instagram.com/_aurevoevents/"
            target="_blank"
            rel="noopener noreferrer"
            className="outline-button"
          >
            INSTAGRAM
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer>

        <div className="footer-logo">
          AUREVO
        </div>

        <p>
          © 2026 AUREVO EVENTS. All rights reserved.
        </p>

        <p>
          Where Moments Evolve Into Memories.
        </p>

      </footer>

    </main>
  );
}