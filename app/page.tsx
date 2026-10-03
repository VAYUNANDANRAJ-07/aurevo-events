"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(
          data.message || "Something went wrong. Please try again."
        );
      }
    } catch {
      setError("Unable to send your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="nav-logo">
          <Image
            src="/aurevo-logo.png"
            alt="AUREVO Events"
            width={85}
            height={85}
            priority
          />
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#why">Why AUREVO</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-overlay" />

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

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Plan Your Event
            </a>

            <a href="#services" className="btn btn-outline">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>PLAN</span>
          <span>DESIGN</span>
          <span>CELEBRATE</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <div className="editorial-number">01</div>

        <div className="section-inner">
          <p className="section-label">ABOUT AUREVO</p>

          <div className="about-grid">
            <div>
              <h2>
                We don't just organize events.
                <br />
                <span>We create experiences.</span>
              </h2>
            </div>

            <div className="about-text">
              <p>
                At AUREVO EVENTS, every celebration begins with an idea and
                becomes a memory.
              </p>

              <p>
                From planning and design to entertainment and execution, we
                bring together every detail to create experiences that feel
                personal, elegant and unforgettable.
              </p>

              <a href="#contact" className="text-link">
                Let's create something memorable →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY AUREVO */}
      <section className="section dark-section" id="why">
        <div className="editorial-number">02</div>

        <div className="section-inner">
          <p className="section-label light-label">WHY AUREVO</p>

          <h2 className="section-title">
            Details create the
            <br />
            <span>difference.</span>
          </h2>

          <div className="feature-grid">
            <div className="feature-card">
              <span>01</span>
              <h3>Creative</h3>
              <p>
                Fresh ideas and thoughtful concepts designed around your
                celebration.
              </p>
            </div>

            <div className="feature-card">
              <span>02</span>
              <h3>Personal</h3>
              <p>
                Every event is shaped around your story, style and vision.
              </p>
            </div>

            <div className="feature-card">
              <span>03</span>
              <h3>Precise</h3>
              <p>
                From the smallest detail to the biggest moment, everything is
                carefully planned.
              </p>
            </div>

            <div className="feature-card">
              <span>04</span>
              <h3>Unforgettable</h3>
              <p>
                Experiences designed to stay with you long after the event
                ends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section" id="services">
        <div className="editorial-number">03</div>

        <div className="section-inner">
          <p className="section-label">WHAT WE DO</p>

          <h2 className="section-title">
            Events designed
            <br />
            <span>around you.</span>
          </h2>

          <div className="services-list">
            <div className="service-item">
              <span>01</span>
              <div>
                <h3>Birthdays & Private Celebrations</h3>
                <p>
                  Beautiful celebrations created for the people and moments
                  that matter most.
                </p>
              </div>
            </div>

            <div className="service-item">
              <span>02</span>
              <div>
                <h3>College & Campus Events</h3>
                <p>
                  Energetic and memorable experiences for campus communities.
                </p>
              </div>
            </div>

            <div className="service-item">
              <span>03</span>
              <div>
                <h3>Corporate Events</h3>
                <p>
                  Professional experiences that bring teams, brands and people
                  together.
                </p>
              </div>
            </div>

            <div className="service-item">
              <span>04</span>
              <div>
                <h3>Engagements & Special Occasions</h3>
                <p>
                  Elegant celebrations designed around your most important
                  milestones.
                </p>
              </div>
            </div>

            <div className="service-item">
              <span>05</span>
              <div>
                <h3>Entertainment</h3>
                <p>
                  Music, artists, DJs and entertainment that bring your event
                  to life.
                </p>
              </div>
            </div>

            <div className="service-item">
              <span>06</span>
              <div>
                <h3>Decorations & Photography</h3>
                <p>
                  Visual details and memories captured beautifully from every
                  angle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process-section dark-section" id="process">
        <div className="editorial-number">04</div>

        <div className="section-inner">
          <p className="section-label light-label">OUR PROCESS</p>

          <h2 className="section-title">
            From idea
            <br />
            <span>to unforgettable.</span>
          </h2>

          <div className="process-grid">
            <div className="process-item">
              <span>01</span>
              <h3>Discover</h3>
              <p>
                We understand your event, vision, requirements and expectations.
              </p>
            </div>

            <div className="process-item">
              <span>02</span>
              <h3>Design</h3>
              <p>
                We transform your ideas into a creative event experience.
              </p>
            </div>

            <div className="process-item">
              <span>03</span>
              <h3>Execute</h3>
              <p>
                Our team coordinates every detail to bring the vision to life.
              </p>
            </div>

            <div className="process-item">
              <span>04</span>
              <h3>Celebrate</h3>
              <p>
                You enjoy the moment while we take care of everything else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section gallery-section" id="gallery">
        <div className="editorial-number">05</div>

        <div className="section-inner">
          <p className="section-label">THE AUREVO EXPERIENCE</p>

          <h2 className="section-title">
            Moments.
            <br />
            <span>Captured beautifully.</span>
          </h2>

          <div className="gallery-grid">
            <div className="gallery-image gallery-large">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=90"
                alt="Elegant celebration"
              />
              <div className="gallery-caption">Celebrations</div>
            </div>

            <div className="gallery-image gallery-small">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=90"
                alt="Event experience"
              />
              <div className="gallery-caption">Experiences</div>
            </div>

            <div className="gallery-image gallery-wide">
              <img
                src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=90"
                alt="Beautiful event"
              />
              <div className="gallery-caption">Memories</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section dark-section" id="contact">
        <div className="editorial-number">06</div>

        <div className="section-inner">
          <p className="section-label light-label">LET'S CREATE</p>

          <div className="contact-grid">
            <div className="contact-heading">
              <h2>
                Let's make your
                <br />
                <span>moment unforgettable.</span>
              </h2>

              <p>
                Tell us about your event and our team will get in touch with
                you.
              </p>

              <div className="contact-details">
                <a href="mailto:aurevoevents@gmail.com">
                  aurevoevents@gmail.com
                </a>

                <a href="tel:+918019842186">
                  +91 80198 42186
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

            {/* SUCCESS MESSAGE */}
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>

                <p className="success-label">ENQUIRY SENT</p>

                <h3>
                  Thank you for
                  <br />
                  <span>choosing AUREVO.</span>
                </h3>

                <p>
                  Your enquiry has been successfully received. Our team will
                  get back to you shortly.
                </p>

                <button
                  className="btn btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="access_key"
                  value="27b8d615-864a-436c-9fee-377504b2c1db"
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

                <div className="form-group">
                  <label htmlFor="name">YOUR NAME</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">EMAIL</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Your email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">PHONE</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="+91"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="event">EVENT TYPE</label>

                  <select id="event" name="event" required>
                    <option value="">Select event type</option>
                    <option value="Birthday">
                      Birthday
                    </option>
                    <option value="Small Celebration">
                      Small Celebration
                    </option>
                    <option value="Private Celebration">
                      Private Celebration
                    </option>
                    <option value="College Event">
                      College Event
                    </option>
                    <option value="Corporate Event">
                      Corporate Event
                    </option>
                    <option value="Engagement">
                      Engagement
                    </option>
                    <option value="Anniversary">
                      Anniversary
                    </option>
                    <option value="Entertainment">
                      Entertainment
                    </option>
                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="requirements">
                    TELL US ABOUT YOUR EVENT
                  </label>

                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={5}
                    placeholder="Tell us about your event, date, location, guests or anything else..."
                    required
                  />
                </div>

                {error && (
                  <div className="form-error">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary submit-button"
                  disabled={loading}
                >
                  {loading ? "SENDING..." : "SEND ENQUIRY →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
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