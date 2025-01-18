import React, { useState } from "react";

const LeftMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside style={{ ...styles.menu, width: collapsed ? "60px" : "200px" }}>
      <button style={styles.button} onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? ">" : "<"}
      </button>
      {!collapsed && (
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      )}
    </aside>
  );
};

const styles = {
  menu: {
    backgroundColor: "#f4f4f4",
    height: "100vh",
    paddingTop: "60px",
    position: "fixed",
    top: 0,
    left: 0,
    overflow: "auto",
  },
  button: {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "10px",
  },
};

export default LeftMenu;
