import React from "react";

const amIAbove18 = false;

const Header = () => {
  return <h1> this is {amIAbove18 ? <p>i am above 18</p> : <p>null</p>}</h1>;
};

export default Header;
