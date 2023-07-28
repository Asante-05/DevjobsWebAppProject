import React from 'react';

const DimmingOverlay = ({ show }) => {
  return show ? <div className="fixed inset-0 bg-black opacity-50 z-10" /> : null;
};

export default DimmingOverlay;
