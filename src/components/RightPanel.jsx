import React from "react";

const RightPanel = () => (
  <aside style={styles.panel}>
    <h3>Right Panel</h3>
    <p>Additional Information</p>
  </aside>
);

const styles = {
  panel: {
    position: "fixed",
    top: "60px",
    right: 0,
    width: "200px",
    backgroundColor: "#f4f4f4",
    height: "100vh",
    overflow: "auto",
  },
};

export default RightPanel;
