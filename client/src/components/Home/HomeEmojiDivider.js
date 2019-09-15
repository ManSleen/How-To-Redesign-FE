import React from 'react';
import HammerEmojiIcon from '../../assets/icons/HammerEmojiIcon';
import PizzaEmoji from '../../assets/icons/PizzaEmoji';
import FloppyEmoji from '../../assets/icons/FloppyEmoji';
import GearEmoji from '../../assets/icons/GearEmoji';
import ViseEmoji from '../../assets/icons/ViseEmoji';
import WrenchEmoji from '../../assets/icons/WrenchEmoji';

import '../../scss/index.scss';

const HomeEmojiDivider = () => {
  return (
    <div className="home-emoji-divider">
      <HammerEmojiIcon />
      <FloppyEmoji />
      <GearEmoji />
      <PizzaEmoji />
      <ViseEmoji />
      <WrenchEmoji />
    </div>
  );
};

export default HomeEmojiDivider;
