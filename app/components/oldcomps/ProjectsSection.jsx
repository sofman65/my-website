// ProjectsSection.js
import React from 'react';
import '../styles/ProjectsSection.css';

const projects = [
  {
    title: "Quality of Experience Prediction Trends for Live Video Streaming Events",
    description: "Implemented deep learning architecture to predict the quality of experience for live video streaming, including data preprocessing and EDA analysis to extract valuable insights.",
    tools: "Deep Learning, Python",
    href: "https://github.com/sofman65/Quality-of-Experience-Trend-Prediction-in-Real-Streaming-Data.git",
  },
  {
    title: "Binary Classification Model for HEDNO Datathon - Power Theft Detection",
    description: "Developed a Q-learning based model to classify power theft incidents, incorporating data preprocessing, feature engineering, and model validation to ensure accuracy.",
    tools: "Reinforcement Learning, Python",
    href: "https://github.com/sofman65/Hedno_Datathon_PowerTheft_Detection.git",
  },
  {
    title: "Stock Market Index Trend and ROI Prediction - Time Series Forecasting",
    description: "Analyzed stock market data, applying LSTM models for trend prediction. This project involved extensive EDA and sequential regression modeling to forecast trends and ROI.",
    tools: "ML & AI, Python",
    href: "https://github.com/sofman65/Stock-Trend-Prediction-Project-in-CSI-300-Index.git",
  },
  {
    title: "Natural Language Processing (NLP) for Sentiment Analysis",
    description: "Conducted sentiment analysis on Efood restaurant reviews using various ML techniques and deep learning methods, including a Multi-layer Perceptron Classifier for improved accuracy.",
    tools: "ML & AI, Python",
    href: "https://github.com/sofman65/Machine_Learning_Projects/blob/main/Sentiment_Analysis_in_IMDB_Reviews.ipynb",
  },
  {
    title: "Chat-bot Development for Event Management Industry",
    description: "Developed and fine-tuned a chatbot using Retrieval-Augmented Generation (RAG) for the event management industry, including EDA, data preprocessing, and dimensionality reduction.",
    tools: "ML & AI, Next.js",
    href: "", // Provide the GitHub link if available
  },
  {
    title: "Card Management System PowerCard Project",
    description: "Developed and managed the PowerCard platform, focusing on the implementation of a comprehensive card management system, ensuring secure transactions, scalability, and integration with third-party services.",
    tools: "Java, Spring Boot, MySQL, RESTful APIs",
    href: "", // Provide the GitHub link if available
  },
  {
    title: "E-Morfosi Platform",
    description: "Designed and implemented the E-Morfosi platform, an e-learning solution aimed at enhancing educational experiences through interactive content, robust backend systems, and scalable architecture.",
    tools: "React, Node.js, MongoDB, Docker",
    href: "", // Provide the GitHub link if available
  },
  {
    title: "Multiple Linear Regression Model of Energy Use in Appliances",
    description: "Created a multiple linear regression model for predicting energy use in appliances, with steps including EDA, PCA, and model estimation using Gradient Boosting Regressor.",
    tools: "ML & AI, Python",
    href: "", // Provide the GitHub link if available
  },
  {
    title: "Regression with a Deep Neural Network (DNN) using Keras",
    description: "Implemented a regression model using a deep neural network (DNN) with Keras, experimenting with various neural network architectures and hyperparameters.",
    tools: "Deep Learning, Python, Keras",
    href: "", // Provide the GitHub link if available
  },

];



const ProjectsSection = () => {
  return (
    <section id="projects" className="ProjectsSection">
      <h2>Projects</h2>
      <div className="ProjectsList">
        {projects.map((project, index) => (
          <div key={index} className="ProjectCard">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="ProjectTools">{project.tools}</p>
            {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer">View Project</a>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
