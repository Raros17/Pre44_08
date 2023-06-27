import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

import './SideLeft.css';

import { useState } from 'react';

const SideLeft = () => {
  const [isHomeClicked, setIsHomeClicked] = useState(false);
  const [isQuestionClicked, setIsQuestionClicked] = useState(false);

  const handleHomeClick = () => {
    setIsHomeClicked(true);
    setIsQuestionClicked(false);
    window.location.href = '/';
  };

  const handleQuestionClick = () => {
    setIsHomeClicked(false);
    setIsQuestionClicked(true);
    window.location.href = '/questions';
  };

  return (
    <div className="SideLeft">
      <ol className="SideLeft_Container">
        <li
          onClick={handleHomeClick}
          className={isHomeClicked ? 'bold background-gray' : ''}
        >
          Home
        </li>
        <li>PUBLIC</li>
        <li
          onClick={handleQuestionClick}
          className={isQuestionClicked ? 'bold background-gray' : ''}
        >
          <FontAwesomeIcon icon={faEarthAmericas} /> Question
        </li>
      </ol>
    </div>
  );
};

export default SideLeft;
