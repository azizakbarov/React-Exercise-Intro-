import React from "react";

const Employee = (props) => {
  console.log(props);
  //const {firstName, lastName, age} = props 
  return (
    <>
      <h6>
    
        Employee name: {props.firstName} {props.lastName} {props.age};
      </h6>
    </>
  );
};

export default Employee;
