import React, { useState, useEffect } from 'react';
import styles from './ResumeSection.module.css';
import FileCopyIcon from '@mui/icons-material/FileCopy';

function ResumeSection() {
  const [visible, setVisible] = useState(false);
  const handleScroll = () => {
    window.pageYOffset > 900 ? setVisible(true) : setVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.resumeSectionWrapper}>
      <div
        className={visible ? `${styles.frameFocus}` : `${styles.frameFaded}`}
      >
        <div className={styles.iconWrapper}>
          <FileCopyIcon className={styles.icon} />
        </div>
        <div className={styles.descriptionWrapper}>
          <h1>Create Multiple Resume</h1>
          <p>
            For each of the profiles created, update details in the resume
            builder, and save the details for future purpose and download your
            resume with suitable template on the go, and apply for the job you
            wish for.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResumeSection;
