import styles from './DropDown.module.css';
import { useEffect, useRef, useState } from 'react';
import useBoolean from '../hooks/UseBoolean';

const DropDown = ({ dropdownOptions, placeholderText, onSelect }) => {
  const { value: isDropdownOpen, toggle: toggleDropdown, setFalse: closeDropdown } = useBoolean(false);
  const buttonRef = useRef(null);
  const [selectedItem, setselectedItem] = useState('');

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
        <p className={styles.arrow}>⮟</p>
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

export default DropDown;