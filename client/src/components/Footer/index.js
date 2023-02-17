import React from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faMugHot} from '@fortawesome/free-solid-svg-icons';

function Footer() {



  return (<>

      <div className="footer"  >
      <ul>
        <li>
          <a
            href="https://github.com/timothy-wardlow/Deja-Brew"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#827397"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/timothy-wardlow/Deja-Brew"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faMugHot}
              color="#827397"
              className="anchor-icon"
            />
          </a>
        </li>


      </ul>


      </div>

      <div className="btmfoot">
        Site not intended for commercial use, demonstration for educational purposes only

        </div>


      </> );
}

export default Footer;