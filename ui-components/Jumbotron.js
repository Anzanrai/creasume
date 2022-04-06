import React from 'react';

import styles from '../styles/Home.module.css';

const Jumbotron = () => {
  return (
    <div className={styles.jumbotron}>
      <div className={styles.jumbotronContent}>
        <div className={styles.jumbotronDescription}>
          <h1>Land your dream job with an attractive resume.</h1>
          <p>
            Create your attractive and professional resume with Crea-Sume.
            Crea-sume provides you with a platform to build your professional
            resume on the go. Just fill out your details and select your
            favourite template for your resume.
            <br />
            Select a template.
            <br />
            Fill your details in the crea-sume resume builder platform.
            <br />
            Preview your resume.
            <br />
            Download your resume.
            <br />
          </p>
          <span>
            <strong>It's totally free.</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
