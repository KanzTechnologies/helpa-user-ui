import styled from "styled-components";
import { useCallback, useEffect, useRef, useState } from "react";

export const DropDownContainer = styled.div``;

export const DropDownLabel = styled.label`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textAccent};
  cursor: pointer;
`;

export const DropDownBody = styled.div`
  background: ${({ theme, color }) => color || theme.body};
  padding: 2rem 4rem 2rem 2rem;
  border: 1px solid rgba(151, 151, 151, 0.2);
  border-radius: 1rem;
  position: absolute;
  top: ${({ top }) => top || "20%"};
  z-index: 2;
  transition: all 1s ease;
`;

export const DropDownItems = styled.ul`
  font-size: 1.5rem;
`;

export const DropDownList = styled.li`
  list-style: none;
  margin-bottom: 1rem;
`;

const DropDown = ({ children, label, top }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef();

  const onMouseDown = useCallback(
    (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    },
    [containerRef, setIsOpen]
  );

  useEffect(() => {
    window.addEventListener("mousedown", onMouseDown);

    return () => window.removeEventListener("mousedown", onMouseDown);
  }, [onMouseDown]);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropDownContainer ref={containerRef}>
      <DropDownLabel onClick={toggleIsOpen}>{label}</DropDownLabel>
      {isOpen && <DropDownBody top={top}>{children}</DropDownBody>}
    </DropDownContainer>
  );
};

export default DropDown;
