import styles from './Dropdown.module.css';
import { useEffect, useRef, useState } from 'react';
import useBoolean from '../hooks/UseBoolean';

const ArrowHeadDown = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6,19.5l12,11.9a1.9,1.9,0,0,0,2.8,0l12-11.9A2,2,0,0,0,36,16H12a2,2,0,0,0-1.4,3.5Z"/>
    </svg>
  );
}

const Dropdown = ({ dropdownOptions, placeholderText, onSelect, selectedItemRef }) => {
  const { value: isDropdownOpen, toggle: toggleDropdown, setFalse: closeDropdown } = useBoolean(false);
  const buttonRef = useRef(null);
  const [selectedItem, setselectedItem] = useState('');

  // Links the value of the remote selected item variable with the local one. It's not pretty, but it works ¯\_(ツ)_/¯
  useEffect(() => {
    setselectedItem(selectedItemRef);
  }, [selectedItemRef]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Close the dropdown if the user clicks anywhere outside of the dropdown button
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [buttonRef.current]);

  const onOptionClicked = (optionText) => {
    setselectedItem(optionText);
    onSelect(optionText);
  }

  return (
    <div className={styles.dropdown}>
      <div ref={buttonRef} className={styles.btn_container} onClick={toggleDropdown}>
        <button className={styles.toggle}>
          {selectedItem || placeholderText}
        </button>
        <ArrowHeadDown className={`${styles.arrow} ${isDropdownOpen ? styles.arrow_rotated : ''}`} />
      </div>
      <div className={`${styles.options} ${isDropdownOpen ? styles.visible : ''}`}>
        {dropdownOptions.map((option, i) => {
          return (
            <button className={styles.option_btn} key={i} onClick={() => onOptionClicked(option)}>
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;