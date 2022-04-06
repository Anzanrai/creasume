import React, { useState, useEffect } from 'react';
import styles from './GuideSection.module.css';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CustomLink from './CustomLink';

function GuideSection() {
  const [visible, setVisible] = useState(false);
  const handleScroll = () => {
    window.pageYOffset > 1400 ? setVisible(true) : setVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.guideSectionWrapper}>
      <div className={visible ? styles.frameFocus : styles.frameFaded}>
        <div className={styles.guideIconWrapper}>
          <FactCheckIcon className={styles.icon} />
        </div>
        <div className={styles.descriptionWrapper}>
          <h1>Browse through the guidelines and available templates</h1>
          <p>
            Crea-sume has guidelines on writing the content for your resume.
            From the number of available templates, you can choose a template
            which best suits you and you are good to go.
          </p>
        </div>
        <CustomLink redirectPage="/Signup">
          <div className={styles.buttonWrapper}>
            <h4>Let's Get Started</h4>
          </div>
        </CustomLink>
      </div>
    </div>
  );
}

export default GuideSection;
