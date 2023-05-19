import React from 'react';
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer content">
        <div>rvolkov8</div>
        <Icon path={mdiGithub} size={0.9} color="#f5f5f5" />
      </div>
    </div>
  );
};

export default Footer;
