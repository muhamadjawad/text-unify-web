import React from 'react';
import './Footer.css';
import devPhoto from '@/assets/images/dev.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer__top">
      <img src={devPhoto} alt="Muhammad Jawad" className="footer__avatar" />
      <div className="footer__info">
        <div className="footer__name">Muhammad Jawad</div>
        <div className="footer__links">
          <a href="#" className="footer__icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="#" className="footer__icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
    <div className="footer__bottom">
      <div className="footer__powered">Powered by React &amp; TS</div>
      <div className="footer__repo">
        <span>Repo: </span>
        <a href="#" className="footer__repo-link">(add link)</a>
      </div>
      <div className="footer__copyright">&copy; {new Date().getFullYear()} Muhammad Jawad. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer; 