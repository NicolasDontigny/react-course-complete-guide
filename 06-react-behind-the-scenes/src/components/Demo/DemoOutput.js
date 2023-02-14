import React from 'react';

const DemoOutput = (props) => {
  console.log('DEMO OUTPUT RUNNING');
  return <p>{props.show ? 'This is new!' : ''}</p>;
};

// Only re-render function if props value change
// Comes at a cost: React needs to compare the values of the props
// Useful if there are many other children components, with maybe nested components, that will not need to be re-rendered that often
export default React.memo(DemoOutput);
