import React from 'react';
import Menu from './menu';

export default function () {
  const scrollToElement = (section) => {
    let elementTop = document.getElementById(`${section}-main`).offsetTop

    window.scroll({ top: elementTop, left: 0, behavior: 'smooth' });
  }

  return (
    <div id="menu">
      <Menu
        type="vertical"
        margin={60}
      >
        <div id="menu-btn" className="button">
          <img src="/bars.png" id="menu-icon" />
        </div>
        <div onClick={() => scrollToElement('about')}>
          about
        </div>
        <div onClick={() => scrollToElement('work')}>
          work
        </div>
        <div onClick={() => scrollToElement('contact')}>
          contact
        </div>
      </Menu>
    </div>
  )
}




