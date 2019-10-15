import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-copyright">© 2019</div>
      <h3 className="footer-logo">How-To</h3>
      <div className="footer-github-logo">
        <a
          target="_blank"
          href="https://github.com/ManSleen/How-To-Redesign-FE"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9875 1.17019e-06C6.25938 -0.00312383 0 6.25313 0 13.975C0 20.0813 3.91562 25.2719 9.36875 27.1781C10.1031 27.3625 9.99063 26.8406 9.99063 26.4844V24.0625C5.75 24.5594 5.57812 21.7531 5.29375 21.2844C4.71875 20.3031 3.35938 20.0531 3.76562 19.5844C4.73125 19.0875 5.71562 19.7094 6.85625 21.3938C7.68125 22.6156 9.29062 22.4094 10.1062 22.2063C10.2844 21.4719 10.6656 20.8156 11.1906 20.3062C6.79688 19.5187 4.96562 16.8375 4.96562 13.65C4.96562 12.1031 5.475 10.6813 6.475 9.53438C5.8375 7.64375 6.53438 6.025 6.62813 5.78438C8.44375 5.62188 10.3312 7.08438 10.4781 7.2C11.5094 6.92188 12.6875 6.775 14.0063 6.775C15.3313 6.775 16.5125 6.92813 17.5531 7.20938C17.9062 6.94063 19.6562 5.68438 21.3438 5.8375C21.4344 6.07813 22.1156 7.65938 21.5156 9.525C22.5281 10.675 23.0438 12.1094 23.0438 13.6594C23.0438 16.8531 21.2 19.5375 16.7938 20.3125C17.1712 20.6837 17.4708 21.1263 17.6753 21.6146C17.8797 22.1028 17.9848 22.6269 17.9844 23.1562V26.6719C18.0094 26.9531 17.9844 27.2313 18.4531 27.2313C23.9875 25.3656 27.9719 20.1375 27.9719 13.9781C27.9719 6.25313 21.7094 1.17019e-06 13.9875 1.17019e-06Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
