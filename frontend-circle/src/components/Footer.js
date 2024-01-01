import React from 'react';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <footer>
      <p>© 2023 Job Posting Website</p>
      <p>Contact Us: contact@jobpostingsite.com</p>
      <Link to="/owner">Admins</Link>
    </footer>
  );
}

export default Footer;
