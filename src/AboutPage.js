import React from 'react';
import NavBar from './components/NavBar';
import './components/css/about.css';

function AboutPage() {
  return(
    <div className='styling'>
      <NavBar />
      <div className="about-section">
      <h1>About Us</h1>
      <p>Our software is about analysing and calculating the impact of a certain project for a business, and especially how valuable the project is in regard to the effort it takes. 
        A project is an individual or collaborative enterprise that is carefully planned to achieve a particular aim. A project can be anything;
        from making your website multi-lingual, to making sure the sorting system isworking in a distribution center. In our software you can divide a project in certain subtasks. 
        Subsequently, the project owner has to think about whatevery employee will do, and assign those certain tasks to that employee. 
        The employees or project owner itself then evaluates the complexity of that task; how time-consuming is it, how complex is the problem etc.
        Based on these questions the user will enter a number which resembles that complexity. Our software provides a calculation per project, how impactful that certain project is.
        For example, if a certain project is way too time-consuming (way too many complex points), and the value what you get back is minimal.
        Then the project owner can decide to terminate the project.
      </p>
      </div>

      <h2 className="about-h2">Our Team</h2>
      <div className="about-row">
        <div className="about-column">
          <div className="about-card">
            <div className="about-container">
              <h2 className="about-h2">Rutger Berger</h2>
              <p className="about-title">Frontend Developer</p>
              <p>Responsible for design and infrastructure</p>
              <p>rutgerberger01@gmail.com</p>
              <p><button className="about-button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="about-column">
          <div className="about-card">
            <div className="about-container">
              <h2 className="about-h2">Sven Paqué</h2>
              <p className="about-title">Frontend Developer</p>
              <p>Responsible for design and infrastructure</p>
              <p>sven.paque@gmail.com</p>
              <p><button className="about-button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage