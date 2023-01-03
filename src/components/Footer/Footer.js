import React from 'react';

const Footer = () => {
    const htmlHeight=document.getElementsByTagName('html')[0].offsetHeight;
    return (
        <div>
        <div class="card w-100" style={{height:'180px',position:'absolute',top:`${htmlHeight}px`}}>
        <div class="card-body h-100 d-flex flex-column align-items-center justify-content-center">
          
          <h5 class="fw-bold text-info card-title">A Website For Giving Quiz</h5>
          <p class="card-text text-muted">Author : Jalal Ahmed Nafiz</p>
        </div>
      </div>
        </div>
    );
};

export default Footer;