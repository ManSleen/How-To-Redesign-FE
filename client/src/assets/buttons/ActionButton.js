import React from 'react';

const ActionButton = ({ history, routeTo, text, type }) => {
  return (
    <div className="action-button-container">
      <button
        onClick={() => {
          if (history) {
            history.push(`${routeTo}`);
          }
        }}
        className="action-button"
        type={type ? type : 'button'}
      >
        <p>{text}</p>
        <svg
          width="17"
          height="12"
          viewBox="0 0 17 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5303 6.53033C16.8232 6.23744 16.8232 5.76256 16.5303 5.46967L11.7574 0.696699C11.4645 0.403806 10.9896 0.403806 10.6967 0.696699C10.4038 0.989593 10.4038 1.46447 10.6967 1.75736L14.9393 6L10.6967 10.2426C10.4038 10.5355 10.4038 11.0104 10.6967 11.3033C10.9896 11.5962 11.4645 11.5962 11.7574 11.3033L16.5303 6.53033ZM0 6.75H16V5.25H0V6.75Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default ActionButton;
