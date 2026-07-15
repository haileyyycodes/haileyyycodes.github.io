import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <p className="section-label">// CONTACT</p>

        <p className="contact-prompt">
          <span className="prompt-symbol">$</span> open to full-time and
          contract work. reach out.
        </p>

        <a href="mailto:haileymariejohn@gmail.com" className="contact-email">
          haileymariejohn@gmail.com
        </a>

        <div className="contact-actions">
          <a
            href="mailto:haileymariejohn@gmail.com"
            className="btn btn-secondary"
          >
            Email
          </a>
          <a href="#" className="btn btn-secondary">
            GitHub
          </a>
          <a href="#" className="btn btn-secondary">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
