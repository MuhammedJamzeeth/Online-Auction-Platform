import React, { useState } from "react";
import styled from "styled-components";

const Dropdown = styled.div`
  position: relative;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: #333;
  min-width: 200px;
  z-index: 1;
  a {
    color: #fff;
    padding: 12px 16px;
    display: block;
    text-decoration: none;
  }
`;

const DropdownButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const DropdownMenu = ({ options, name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Dropdown>
      <DropdownButton onClick={toggleDropdown}>{name}</DropdownButton>
      <DropdownContent isOpen={isOpen}>
        {options.map((option, index) => (
          <a key={index} href={option.link}>
            {option.label}
          </a>
        ))}
      </DropdownContent>
    </Dropdown>
  );
};

export default DropdownMenu;
