import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">SHIRA WEISS</div>
      <nav>
        <a href="#about">אודות</a>
        <a href="#portfolio">פרויקטים</a>
        <a href="#contact" className="btn-small">פגישת ייעוץ</a>
      </nav>
    </header>
  );
};

export default Header;