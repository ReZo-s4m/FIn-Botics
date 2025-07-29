import React from "react";

const Mainlayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      {/* Add your navbar or sidebar if needed */}
      {children}
    </div>
  );
};

export default Mainlayout;
