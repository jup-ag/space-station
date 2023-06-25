//@ts-nocheck

import Layout from '@theme/Layout';
import React, { useEffect } from 'react';

const BoardToken = '4faae8bc-b06c-f2f7-10da-9ec215d29adc';

const Feedback: React.FC = () => {
  useEffect(() => {
    (function(w,d,i,s){function l(){if(!d.getElementById(i)){var f=d.getElementsByTagName(s)[0],e=d.createElement(s);e.type="text/javascript",e.async=!0,e.src="https://canny.io/sdk.js",f.parentNode.insertBefore(e,f)}}if("function"!=typeof w.Canny){var c=function(){c.q.push(arguments)};c.q=[],w.Canny=c,"complete"===d.readyState?l():w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})(window,document,"canny-jssdk","script");

    Canny('render', {
      boardToken: BoardToken,
      theme: 'light', // options: light [default], dark, auto
    });
  }, []);


  return (
    <Layout wrapperClassName='bg-jupiter-light '>
      <div className="h-full mt-8 max-w-[1500px] rounded min-h-[500px] p-4 w-full mx-auto bg-white">
        <div data-canny />
      </div>
    </Layout>
  );
};

export default Feedback;
