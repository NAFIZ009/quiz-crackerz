import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    // const htmlHeight=document.getElementsByTagName('html')[0].offsetHeight;
    // const location = useLocation()
    // const [height, setHeight] = useState(0)

    // useEffect(() => {
    //   setHeight(document.getElementsByTagName('body')[0].offsetHeight)
    //   console.log(location.pathname,height);
    // }, [location]);
    // window.addEventListener("resize",console.log(window.innerHeight))
    // ,position:'absolute',top:`${htmlHeight}px`
    // ,position:'absolute',top:`${height}px`
    return (
        <div>
        <div class="card w-100" style={{height:'180px'}}>
        <div class="card-body h-100 d-flex flex-column align-items-center justify-content-center">
          
          <h5 class="fw-bold text-info card-title">A Website For Giving Quiz</h5>
          <p class="card-text text-muted">Author : Jalal Ahmed Nafiz</p>
        </div>
      </div>
        </div>
    );
};

export default Footer;