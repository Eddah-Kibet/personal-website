import { useState } from 'react';
import { useToast } from './hooks/useToast';
import { ToastContainer } from './components/Toast';
import Header from './components/Header';
// import Skills from './components/Skills';
// import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolio';

function App() {
  const { toasts, addToast, removeToast } = useToast();
  const [data] = useState(portfolioData);

  const handleContactClick = (type) => {
    addToast(`${type === 'email' ? 'Email' : 'Phone number'} copied to clipboard!`, 'success');
    // In a real app, you would copy to clipboard here
  };

  const handleProjectClick = (projectName, type) => {
    addToast(`Opening ${projectName} ${type === 'live' ? 'demo' : 'source code'}...`, 'info');
  };

  const handleFormSubmit = (formData) => {
    addToast('Message sent successfully! I\'ll get back to you soon.', 'success');
    console.log('Form submitted:', formData);
    // In a real app, you would send this to a backend
  };

  const handleLinkClick = (type) => {
    addToast(`Opening ${type}...`, 'info');
  };

  return (
    <div className="App">
      <Header personal={data.personal} onContactClick={handleContactClick} />
      
      <div className="container">
        {/* <Skills skills={data.skills} />
        <Experience experience={data.experience} /> */}
        <Projects projects={data.projects} onProjectClick={handleProjectClick} />
        
        {/* Education Section */}
        <section id="education" className="section">
          <h2>Education</h2>
          <div className="timeline-item">
            <h3>{data.education.degree}</h3>
            <div className="date">{data.education.period} | {data.education.school}</div>
            <ul>
              {data.education.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <Contact onFormSubmit={handleFormSubmit} />

        {/* Toast Container */}
        <ToastContainer toasts={toasts} removeToast={removeToast} />
      </div>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 {data.personal.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;