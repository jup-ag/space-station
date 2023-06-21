import React, { SVGProps } from 'react';

const LinkIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.328 2.32a3.006 3.006 0 014.328 0 3.169 3.169 0 010 4.4l-4.681 4.81a1.803 1.803 0 01-2.594 0 1.885 1.885 0 010-2.619l4.82-4.952a.6.6 0 01.86.837L5.24 9.748a.685.685 0 000 .945c.243.25.63.25.874 0l4.681-4.81c.73-.751.73-1.976 0-2.727a1.806 1.806 0 00-2.608 0l-4.68 4.81a3.253 3.253 0 000 4.509 3.008 3.008 0 004.34 0l5.722-5.88a.6.6 0 01.86.837l-5.721 5.88a4.208 4.208 0 01-6.062 0c-1.663-1.71-1.663-4.473 0-6.182l4.681-4.81z"
        fill="#5D6975"
      ></path>
    </svg>
  );
};

export default LinkIcon;
