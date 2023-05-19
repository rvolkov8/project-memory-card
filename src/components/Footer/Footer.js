import React from 'react';
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';

const Footer = () => {
  // return (
  //   <div className="footer container">
  //     <div className="footer content">
  //       <div>rvolkov8</div>
  //       <Icon path={mdiGithub} size={0.9} color="#f5f5f5" />
  //     </div>
  //   </div>
  // );

  return (
    <div className="footer container">
      <a
        href="https://github.com/rvolkov8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="nickname">rvolkov8</div>
        <Icon
          className="github-icon"
          path={mdiGithub}
          size={0.9}
          color="#f5f5f5"
        />
      </a>
    </div>
  );
};

export default Footer;
