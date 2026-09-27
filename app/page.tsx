"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <a href="#home" className="brand">
          <Image
            src="/aurevo-logo.png"
            alt="AUREVO Events"
            width={85}
            height={85}
            priority
          />
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Plan Your Event
        </a>
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="hero">
        <div className="hero-circle hero-circle-one"></div>
        <div className="hero-circle hero-circle-two"></div>

        <div className="hero-content">
          <p className="eyebrow">AUREVO EVENTS</p>

          <h1>
            Moments worth
            <br />
            <span>remembering.</span>
          </h1>

          <p className="hero-description">
            From intimate birthdays to grand celebrations, we create elegant,
            memorable and unforgettable experiences designed around you.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="gold-button">
              Plan Your Event
            </a>

            <a href="#gallery" className="text-button">
              Explore AUREVO →
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>EST. 2026</span>
          <span>EVENTS • EXPERIENCES • MEMORIES</span>
          <span>SCROLL ↓</span>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="about-section">
        <div className="editorial-number">01</div>

        <div className="about-left">
          <p className="section-label">ABOUT AUREVO</p>

          <h2 className="section-title">
            We don't just
            <br />
            organize <span>events.</span>
          </h2>
        </div>

        <div className="about-right">
          <p className="large-copy">We create experiences.</p>

          <p>
            AUREVO EVENTS is built around one simple idea — every celebration
            deserves to feel personal.
          </p>

          <p>
            From the smallest gathering to the biggest celebration, we bring
            together creativity, planning, design and execution to turn your
            ideas into unforgettable moments.
          </p>

          <div className="about-line"></div>

          <span className="about-signature">
            WHERE MOMENTS EVOLVE INTO MEMORIES.
          </span>
        </div>
      </section>

      {/* ================= WHY AUREVO ================= */}
      <section className="why-section">
        <div className="editorial-number">02</div>

        <div className="why-intro">
          <p className="section-label">WHY AUREVO</p>

          <h2 className="section-title">
            Your moment.
            <br />
            <span>Our craft.</span>
          </h2>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <span>01</span>
            <h3>Creative</h3>
            <p>
              Concepts designed to feel different, personal and visually
              unforgettable.
            </p>
          </div>

          <div className="why-card">
            <span>02</span>
            <h3>Personal</h3>
            <p>
              Every event is built around your personality, purpose and
              expectations.
            </p>
          </div>

          <div className="why-card">
            <span>03</span>
            <h3>Precise</h3>
            <p>
              From the first idea to the final detail, everything is planned
              with intention.
            </p>
          </div>

          <div className="why-card">
            <span>04</span>
            <h3>Unforgettable</h3>
            <p>
              We create moments people remember long after the event is over.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="services-section">
        <div className="editorial-number">03</div>

        <div className="services-heading">
          <p className="section-label">WHAT WE DO</p>

          <h2 className="section-title">
            Events with
            <br />
            <span>intention.</span>
          </h2>
        </div>

        <div className="services-list">
          <div className="service-item">
            <span>01</span>
            <h3>Birthdays & Private Celebrations</h3>
            <p>Personal celebrations designed around you.</p>
          </div>

          <div className="service-item">
            <span>02</span>
            <h3>College & Campus Events</h3>
            <p>Festivals, cultural events, parties and campus experiences.</p>
          </div>

          <div className="service-item">
            <span>03</span>
            <h3>Corporate Events</h3>
            <p>Professional experiences that represent your brand.</p>
          </div>

          <div className="service-item">
            <span>04</span>
            <h3>Engagements & Special Occasions</h3>
            <p>Elegant celebrations for life's important milestones.</p>
          </div>

          <div className="service-item">
            <span>05</span>
            <h3>Entertainment</h3>
            <p>Artists, performances, music and entertainment experiences.</p>
          </div>

          <div className="service-item">
            <span>06</span>
            <h3>Decorations & Photography</h3>
            <p>Atmosphere, aesthetics and memories captured beautifully.</p>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="process-section">
        <div className="editorial-number">04</div>

        <div className="process-heading">
          <p className="section-label">THE PROCESS</p>

          <h2 className="section-title">
            From idea
            <br />
            <span>to experience.</span>
          </h2>
        </div>

        <div className="process-line"></div>

        <div className="process-grid">
          <div>
            <span>01</span>
            <h3>Discover</h3>
            <p>
              We understand your vision, requirements and the feeling you want
              your event to create.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Design</h3>
            <p>
              We turn your ideas into a detailed event concept with the right
              visual direction.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Execute</h3>
            <p>
              Our team handles the details, coordination and execution from
              beginning to end.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Celebrate</h3>
            <p>
              You enjoy the moment while we make sure everything comes
              together perfectly.
            </p>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section id="gallery" className="gallery-section">
        <div className="editorial-number">05</div>

        <div className="gallery-orbit gallery-orbit-one"></div>
        <div className="gallery-orbit gallery-orbit-two"></div>

        <div className="gallery-header">
          <div>
            <p className="section-label">OUR WORLD</p>

            <h2 className="section-title">
              Moments.
              <br />
              <span>Captured.</span>
            </h2>
          </div>

          <p className="gallery-intro">
            Every event has a different energy. We create the atmosphere,
            details and experiences that make yours impossible to forget.
          </p>
        </div>

        <div className="cinematic-gallery">
          <article className="gallery-feature">
            <div className="gallery-image">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=90"
                alt="Elegant event celebration"
              />

              <div className="image-overlay"></div>

              <div className="gallery-number">01</div>

              <div className="gallery-caption">
                <span>INTIMATE</span>
                <h3>Celebrations</h3>
                <p>Birthdays • Private Events • Milestones</p>
              </div>
            </div>
          </article>

          <article className="gallery-secondary">
            <div className="gallery-image">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=90"
                alt="Large scale event experience"
              />

              <div className="image-overlay"></div>

              <div className="gallery-number">02</div>

              <div className="gallery-caption">
                <span>ELEVATED</span>
                <h3>Experiences</h3>
                <p>College • Corporate • Live Events</p>
              </div>
            </div>
          </article>

          <article className="gallery-wide">
            <div className="gallery-image">
              <img
                src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=90"
                alt="Event lighting and atmosphere"
              />

              <div className="image-overlay"></div>

              <div className="gallery-number">03</div>

              <div className="gallery-caption">
                <span>AFTERGLOW</span>
                <h3>Memories</h3>
                <p>Decor • Entertainment • Photography</p>
              </div>
            </div>
          </article>
        </div>

        <div className="gallery-footer">
          <span>AUREVO EVENTS</span>
          <span>WHERE MOMENTS EVOLVE INTO MEMORIES.</span>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="contact-section">
        <div className="editorial-number">06</div>

        <div className="contact-left">
          <p className="section-label">LET'S CREATE</p>

          <h2 className="section-title">
            Your event
            <br />
            starts <span>here.</span>
          </h2>

          <p>
            Tell us about your event and let's create something people will
            remember.
          </p>

          <div className="contact-details">
            <a href="tel:+918019842186">+91 80198 42186</a>

            <a href="mailto:aurevoevents@gmail.com">
              aurevoevents@gmail.com
            </a>

            <a
              href="https://www.instagram.com/_aurevoevents/"
              target="_blank"
              rel="noreferrer"
            >
              @_aurevoevents
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="cdd7ded6-0275-4dab-a55b-6ec311fa24fb"
          />

          <input
            type="hidden"
            name="subject"
            value="New AUREVO Events Enquiry"
          />

          <input
            type="hidden"
            name="from_name"
            value="AUREVO Events Website"
          />

          <input
            type="hidden"
            name="redirect"
            value="https://aurevo-events.vercel.app/"
          />

          <div className="form-group">
            <label>Your Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>

              <input
                type="tel"
                name="phone"
                placeholder="+91"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Event Type</label>

            <select name="event" required>
              <option value="">Select event type</option>
              <option value="Birthday">Birthday</option>
              <option value="Small Celebration">Small Celebration</option>
              <option value="Private Celebration">
                Private Celebration
              </option>
              <option value="College Event">College Event</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Engagement">Engagement</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Tell us about your event</label>

            <textarea
              name="requirements"
              rows={5}
              placeholder="Tell us your event date, location, guest count and requirements..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Enquiry →
          </button>
        </form>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-logo">
          <Image
            src="/aurevo-logo.png"
            alt="AUREVO Events"
            width={100}
            height={100}
          />
        </div>

        <div className="footer-center">
          <h3>Where Moments Evolve Into Memories.</h3>
          <p>© 2026 AUREVO EVENTS. All rights reserved.</p>
        </div>

        <div className="footer-social">
          <a
            href="https://www.instagram.com/_aurevoevents/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>

          <a href="mailto:aurevoevents@gmail.com">Email ↗</a>

          <a
            href="https://wa.me/918019842186"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp ↗
          </a>
        </div>
      </footer>
    </main>
  );
}