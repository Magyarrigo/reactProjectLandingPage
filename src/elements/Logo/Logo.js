import "./Logo.css";

function Logo({ textFirst, textSecond }) {
  return (
    <div className="pageHeaderLogo">
      <div className="logo">
        <div className="logoIcon"/>
        <span className="logoTextFirst">{textFirst}</span>
        <span className="logoTextSecond">{textSecond}</span>
      </div>
    </div>
  );
}

export default Logo;
