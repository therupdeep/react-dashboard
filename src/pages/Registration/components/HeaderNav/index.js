import React from 'react';

const HeaderNav = () => {
  return (
    <div>
      <div>Please complete all steps below to start selling</div>
      <nav class='navbar navbar-light bg-light'>
        <div class='container-fluid'>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <a class='nav-link active' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Features
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Pricing
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link disabled'>Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNav;
