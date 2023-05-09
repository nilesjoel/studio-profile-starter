import React, { useState } from 'react';
import styled from 'styled-components';

interface DropdownProps {
  options: string[];
  selectedOption?: string;
  onSelectOption?: (option: string) => void;
}

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  background-color: #ffffff;
  border: 1px solid #ced4da;
  color: #495057;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  display: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 'block' : 'none')};
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #ffffff;
  border: 1px solid #ced4da;
  border-top: none;
  border-radius: 0 0 0.25rem 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

const DropdownItem = styled.li`
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  cursor: pointer;

  &:hover {
    background-color: #f8f9fa;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onSelectOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (option: string) => {
    if (onSelectOption) {
      onSelectOption(option);
    }
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={handleButtonClick}>
        {selectedOption || 'Select an option'}
      </DropdownButton>
      <DropdownList isOpen={isOpen}>
        {options.map((option) => (
          <DropdownItem key={option} onClick={() => handleItemClick(option)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default Dropdown;
