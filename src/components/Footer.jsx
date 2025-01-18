import React from "react";

const Footer = () => (
  <footer style={styles.footer}>
    <p>Footer Content</p>
  </footer>
);

const styles = {
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    height: "40px",
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    lineHeight: "40px",
  },
};

export default Footer;
