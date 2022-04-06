import React, { useState, useEffect } from 'react';
import styles from './ProfileSection.module.css';
import PersonIcon from '@mui/icons-material/Person';

function ProfileSeciton() {
  const [offsetY, setOffsetY] = useState(false);
  const handleScroll = () => {
    window.pageYOffset > 375 ? setOffsetY(true) : setOffsetY(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // console.log(window.pageYOffset);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.iconWrapper}>
        <PersonIcon
          className={
            offsetY
              ? `${styles.iconBackground} ${styles.leftIconMoved}`
              : `${styles.iconBackground} ${styles.leftIcon}`
          }
        />
        <PersonIcon
          className={
            offsetY
              ? `${styles.iconForeground} ${styles.frameFocus}`
              : styles.iconForeground
          }
        />
        <PersonIcon
          className={
            offsetY
              ? `${styles.iconBackground} ${styles.rightIconMoved}`
              : `${styles.iconBackground} ${styles.rightIcon}`
          }
        />
      </div>
      <div
        className={
          offsetY
            ? `${styles.descriptionWrapper} ${styles.frameFocus}`
            : `${styles.descriptionWrapper} ${styles.frameFaded}`
        }
      >
        <div className={styles.heading}>
          <h1>Create Multiple Profiles</h1>
        </div>
        <div className={styles.description}>
          <p>
            You think you have skills suitable for different roles, create
            multiple profiles in the platform. Fill out data in the resume
            builder platform for each profile. Download your resume, and send
            out your resume for the job.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileSeciton;
