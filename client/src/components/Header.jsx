import { FaLinkedin, FaGithub, FaBlog, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Header = ({ personal, onContactClick }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="profile-img"></div>
        <h1>{personal.name}</h1>
        <div className="tagline">{personal.title}</div>
        
        <div className="contact-info">
          <span><FaMapMarkerAlt /> {personal.location}</span>
          <a href={`mailto:${personal.email}`} onClick={(e) => {
            e.preventDefault();
            onContactClick('email');
          }}>
            <FaEnvelope /> {personal.email}
          </a>
          <a href={`tel:${personal.phone}`} onClick={(e) => {
            e.preventDefault();
            onContactClick('phone');
          }}>
            <FaPhone /> {personal.phone}
          </a>
        </div>
        
        <div className="social-links">
          <a href={personal.links.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href={personal.links.github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href={personal.links.blog} target="_blank" rel="noopener noreferrer">
            <FaBlog /> Blog
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;