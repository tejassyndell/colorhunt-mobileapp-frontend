/* eslint-disable */
import React from 'react';

const OdooContentComponent = ({ content }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default OdooContentComponent;
