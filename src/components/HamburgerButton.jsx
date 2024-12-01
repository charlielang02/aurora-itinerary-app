import './HamburgerButton.css';

const joinClassNames = (...classNames) => classNames.filter(s => s).join(' ');

const HamburgerButton = ({ className, isOpen, onToggle }) => {
  return (
    <label className={joinClassNames("hamburger", className, isOpen ? 'open' : '')}>
      <input type="checkbox" checked={isOpen} onChange={onToggle} />
      <div className="ham_bar1" />
      <div className="ham_bar2" />
      <div className="ham_bar3" />
    </label>
  );
}

export default HamburgerButton;