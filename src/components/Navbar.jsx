import React from "react";

const Navbar = () => (
  <nav style={styles.navbar}>
    <h1>Responsive Page</h1>
  </nav>
);

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: "60px",
    backgroundColor: "#333",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
};

export default Navbar;
