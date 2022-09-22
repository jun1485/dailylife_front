/* eslint-disable react/style-prop-object */
function Spinner() {
  return (
    // <? xml version = "1.0" encoding = "utf-8" ?>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: 'auto',
        background: 'transperent',
        display: 'block',
        'shapeRendering': 'auto',
        'animationPlayState': 'running',
        'animationDelay': '0s',
        width: '100px',
        height: '100px',
        viewBox: '0 0 100 100',
        preserveAspectRatio: 'xMidYMid',
      }}
    >
      <circle cx="50" cy="50" fill="none" stroke="#fcc400" strokeWidth="9" r="34" strokeDasharray="160.22122533307947 55.40707511102649" style={{ 'animationPlayState': 'running', 'animationDelay': '0s' }}>
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.819672131147541s" values="0 50 50;360 50 50" keyTimes="0;1" style={{ 'animationPlayState': 'running', 'animationDelay': '0s' }} />
      </circle>
    </svg>
  );
}

export default Spinner;
