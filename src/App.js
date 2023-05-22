import React from "react";

const DurgaPrasad = () => {
  return <h1>My name is Durga Prasad</h1>
};
// eslint-disable-next-line
const PrintName = () => {
  return <DurgaPrasad />;
};

const App = () => {
  // eslint-disable-next-line
 /*const user = {
    firstName: "Durga",
    lastName: "Prasad", 
  };*/
return (
  <div>
    <PrintName />
    <PrintName />
    <PrintName />
    <PrintName />
    <PrintName />
    <PrintName />
  </div>
);
};

export default App;