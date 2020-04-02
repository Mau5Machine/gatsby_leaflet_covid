import React from "react";

import Container from "components/Container";

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; {new Date().getFullYear()}, Christian Martins</p>
      </Container>
    </footer>
  );
};

export default Footer;
