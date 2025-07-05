import React from 'react';
import './Footer.css';
import devPhoto from '@/assets/images/dev.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';

const DeveloperInfo = () => (
  <div className="footer__devcontent">
    <img src={devPhoto} alt="Muhammad Jawad" className="footer__avatar" />
    <div className="footer__details">
      <div className="footer__name">Muhammad Jawad</div>
      <div className="footer__title">Frontend Developer</div>
      <div className="footer__socials">
        <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  </div>
);

const PoweredBy = () => (
  <div className="footer__appcontent">
    <div className="techstack__label">
      <SiReact className="techstack__icon" />
      <span>{`React + TypeScript`}</span>
    </div>
    <a
      href="https://github.com/your-repo-url"
      target="_blank"
      rel="noopener noreferrer"
      className="techstack__github"
    >
      <FaGithub />
      <span>{`View on GitHub`}</span>
    </a>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer__top">
      <div className="footer__section">
        <div className="footer__label">About Dev</div>
        <DeveloperInfo />
      </div>
      <div className="footer__section">
        <div className="footer__label">About App</div>
        <PoweredBy />
      </div>
    </div>
    <hr className="footer__divider" />
    <div className="footer__bottom">
      <div className="footer__copyright">
        &copy; {new Date().getFullYear()} Muhammad Jawad. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
