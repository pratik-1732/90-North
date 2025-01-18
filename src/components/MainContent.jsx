import React from "react";

const MainContent = () => (
  <main style={styles.content}>
    <h2>Main Content</h2>
    <p>This is the main content area.</p>
  </main>
);

const styles = {
  content: {
    marginLeft: "220px",
    marginRight: "220px",
    padding: "20px",
    paddingTop: "80px",
  },
};

export default MainContent;
