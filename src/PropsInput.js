import React, { useState } from 'react';

const PropsInput = ({ onPropsChange }) => {
  const [propsData, setPropsData] = useState({});

  const handlePropChange = (e) => {
    const { name, value } = e.target;
    setPropsData({ ...propsData, [name]: value });
    onPropsChange(propsData); // Pass props data to the parent component
  };

  const renderInputFields = () => {
    return (
      <div>
        <h2>Enter Props:</h2>
        <input
          type="text"
          name="propName"
          placeholder="Prop Name"
          onChange={handlePropChange}
        />
        <input
          type="text"
          name="propValue"
          placeholder="Prop Value"
          onChange={handlePropChange}
        />
        {/* Add button to add more props */}
      </div>
    );
  };

  return <div>{renderInputFields()}</div>;
};

export default PropsInput;
