import styles from './DropDown.module.css';
import { useState } from 'react';
import useBoolean from '../hooks/UseBoolean';

const DropDown = ({ dropdownOptions }) => {
    const { value: isDropDownOpen, toggle: toggleDropdown, setTrue, setFalse } = useState(false);

    return (
        <div className={styles.dropdown}>
            <button className={styles.toggle}>Toggle</button>
        </div>
    );
};

export default DropDown;