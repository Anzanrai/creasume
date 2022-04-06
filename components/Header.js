import React, { useState } from 'react';

import CustomButton from '../ui-components/CustomButton';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import logo from '../public/logo.png';
import headerStyles from './Header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CustomLink from './CustomLink';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={headerStyles.primaryMenu}>
        <MenuIcon
          color={'primary'}
          onClick={() => setMenuOpen(true)}
          style={{ display: menuOpen ? 'block' : '' }}
        />
      </div>
      <div
        className={headerStyles.primaryMenuContent}
        style={{ right: menuOpen ? 0 : '-100vw' }}
      >
        <div
          className={headerStyles.primaryMenuClose}
          style={{ right: menuOpen ? 15 : '-100vw' }}
        >
          <CloseIcon onClick={() => setMenuOpen(false)} />
        </div>
        <div className={headerStyles.primaryMenuContentItems}>
          <ul>
            <li>
              <CustomLink redirectPage="/templates">Templates</CustomLink>
            </li>
            <li>
              <CustomLink redirectPage="/coverletter">Cover Letter</CustomLink>
            </li>
            <li>
              <CustomLink redirectPage="/guidelines">Guidelines</CustomLink>
            </li>
            <li>
              <CustomLink redirectPage="/Signup">Signup</CustomLink>
            </li>
            <li>
              <CustomLink redirectPage="/login">Login</CustomLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.headWrapper}>
        <div className={styles.logoWrapper}>
          <CustomLink redirectPage="/">
            <Image src={logo} />
          </CustomLink>
        </div>

        <div className={styles.membershipWrapper}>
          <div className={headerStyles.navWrapper}>
            <ul>
              <li>
                <CustomLink redirectPage="/templates">Templates</CustomLink>
              </li>
              <li>
                <CustomLink redirectPage="/coverletter">
                  Cover Letter
                </CustomLink>
              </li>
              <li>
                <CustomLink redirectPage="/guidelines">Guidelines</CustomLink>
              </li>
            </ul>
          </div>
          <div>
            <CustomLink redirectPage="/Signup">
              <CustomButton
                variant={'contained'}
                color={'primary'}
                label={'Signup'}
              />
            </CustomLink>
          </div>
          <div>
            <CustomLink redirectPage="/login">
              <CustomButton
                variant={'contained'}
                color={'secondary'}
                label={'Login'}
              />
            </CustomLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
