// AboutMe.js
import React, { useState} from 'react';
import '../styles/AboutMe.css';
import AboutMeSkills from './AboutMeSkills';
import ImageModal from './ImageModal'







const AboutMe = () => {
  const [isImageModalOpen, setImageModelOpen] = useState(false)



  const handleImageClick = () => {setImageModelOpen(true)}
  
  const handleCloseModal = () => {setImageModelOpen(false)}
  
  
  

  return (
    <section id="about" className="AboutMe">
      <div className="AboutMeContainer">
        <h2>About Me</h2>
        <div className="AboutMeContent">
           <img src= "/images/C0001.00_53_45_07.Still001.jpg" alt="Sofianos Lampropoulos" className="PersonalImage" onClick={handleImageClick}/> 
           <ImageModal 
           isOpen = {isImageModalOpen}
           handleClose = {handleCloseModal}
           imageSrc = "/images/C0001.00_53_45_07.Still001.jpg"/> 
            <p>
              With a deep-seated passion for Time Series Anomaly Detection using Deep Learning, I have dedicated my
              academic and professional career to mastering the intricacies of Artificial Intelligence. As an
              Electrical and Computer Engineer, my quest for knowledge and innovation is reflected in my rigorous
              research and practical application of computational methodologies to unravel complex data anomalies.
            
            
              My academic work, crowned by a Master’s thesis on “Anomaly Detection in Time Series Sensor Data using
              Statistical and Machine Learning Techniques,” marked the beginning of an enduring journey into the realm
              of machine learning and statistical analysis. Currently, as a Ph.D. candidate, I am advancing my research
              in "Deep Learning for Time Series Anomaly Detection in Subsequences," aspiring to contribute
              groundbreaking solutions in anomaly detection.
            
            
              The practical applications of my expertise are complemented by my tenure as a Data Engineer Intern and an
              Application Developer, where I have honed my skills in database schema design, exploratory data analysis,
              and the development of robust machine learning models.
            </p>
        </div>
        <div className="AboutMeEducation">
          <h3>Education</h3>
          <div className='Education'></div>
            <div className='EducationItem'></div>
            <img src= "/images/UTH-logo-text-english.png" alt="UTH Logo" className="EducationLogo" />
          <p>
             <br />
            5-year Diploma (Integrated M.Sc.) in Electrical and Computer Engineering, <b>GPA: 7.63/10</b> 
          </p>
        </div>
        <div className="AboutMeExperience">
        <h3>Experience</h3>
        <div className="Experience">
          <div className="ExperienceItem">
            <img src= "/images/oliveex.png" alt="Oliveex Logo" className="ExperienceLogo" />
            <div>
              <h4>Data Engineer Intern at Oliveex - Volos, Thessaly</h4>
              <ul>
                <li>Assisted with the design and implementation of database schema.</li>
                <li>Conducted exploratory data analysis and descriptive statistics.</li>
                <li>Performed feature engineering for enhanced model performance.</li>
                <li>Developed machine learning models for time series prediction of sensor label data.</li>
                <li>Applied deep learning techniques for outlier detection in sensor time series data using LSTM, LSTM Autoencoder, Isolation Forest, DBSCAN, and Interquantile Range.</li>
                <li>Utilized Git for version control and collaboration.</li>
              </ul>
            </div>
          </div>
          <div className="ExperienceItem">
            <img src= "/images/Nexi.png" alt="Nexi Logo" className="ExperienceLogo" />
            <div>
              <h4>Application Developer at Nexi Greece</h4>
                <ul>
                  <li>Engaged in the design, development, and maintenance of software applications.</li>
                  <li>Collaborated with cross-functional teams to gather and address software requirements.</li>
                  <li>Employed agile methodologies for timely delivery and quality code.</li>
                  <li>Utilized debugging and troubleshooting skills to ensure optimal application performance.</li>
                  <li>Continuously updated technical knowledge and skills to adapt to emerging technologies.</li>
                  <li>Participated in code reviews to maintain code quality and ensure consistent design patterns.</li>
                </ul>
              </div>
            </div>
          </div>
        <AboutMeSkills/>
        <div className="AboutMeLanguages">
          <h3>Languages</h3>
          <p>
            English: Proficient (C2)
          </p>
        </div>
        <div className="AboutMeInterests">
          <h3>Hobbies</h3>
          <p>
            In my free time, I enjoy travelling, engaging in sports, reading, and weight-lifting.
          </p>
        </div>
      </div>
      </div>
    </section>
  );

}

export default AboutMe;

