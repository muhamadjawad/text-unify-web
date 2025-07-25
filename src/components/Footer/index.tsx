import './Footer.css';
import devPhoto from '@/assets/images/dev.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';
import { INFO } from '@/utils/info';
import PkFlag from '@/assets/images/pakistan.png'

const DeveloperInfo = () => (
  <div className="footer__devcontent">
    <img src={devPhoto} alt="Muhammad Jawad" className="footer__avatar" />
    <div className="footer__details">
      <div className="footer__name">
        Muhammad Jawad&nbsp;
        <img
          src={PkFlag}
          alt="Pakistan Flag"
          className="footer__flag"
        />
      </div>

      <div className="footer__title">{`Frontend Developer`}</div>
      <div className="footer__socials">
        <a href={INFO.MY_LINKEDIN} aria-label="LinkedIn" target="__blank" rel="noopener noreferrer"  >
          <FaLinkedin />
        </a>
        <a href={INFO.MY_GITHUB} aria-label="GitHub" target="__blank" rel="noopener noreferrer">
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
      href={INFO.APP_GIT_REPO}
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
        <div className="vertical__separator" />
        <DeveloperInfo />
      </div>
      <div className="footer__section">
        <div className="footer__label">About App</div>
        <div className="vertical__separator" />
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
