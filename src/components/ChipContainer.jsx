import styles from '../styles/chip.module.css';

// Functions to darken RGB colors based on a given percentage p
// Optimized for speed instead of readability
// Full credit goes to Pimp Trizkit https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors/73660199#73660199
function rgbLinearShade(p, c) {
  var i=parseInt,r=Math.round,[a,b,c,d]=c.split(","),P=p<0,t=P?0:255*p,P2=P?1+p:1-p;
  return"rgb"+(d?"a(":"(")+r(i(a[3]=="a"?a.slice(5):a.slice(4))*P2+t)+","+r(i(b)*P2+t)+","+r(i(c)*P2+t)+(d?","+d:")");
}

function rgbToRgba(rgbString, alpha) {
  return rgbString.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
}

const ChipContainer = ({ data, color = "rgb(33, 181, 142)", className }) => {
  const chipStyle = {
    '--chip-outline-color': rgbLinearShade(-0.15, color),
    '--chip-bg-top-color': color,
    '--chip-bg-bottom-color': rgbToRgba(rgbLinearShade(-0.4, color), 0.7),
    '--chip-text-shadow-color': rgbLinearShade(-0.5, color)
  };

  return (
    <div className={`${styles.chip_container} ${className}`}>
      {data.tags.map((tag, i) => {
          return (
            <div key={i} className={styles.chip} style={chipStyle}>
              {tag}
            </div>
          );
      })}
    </div>
  );
}

export default ChipContainer;