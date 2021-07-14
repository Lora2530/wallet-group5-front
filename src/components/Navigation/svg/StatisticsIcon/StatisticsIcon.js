import React from 'react';
import s from './StatisticsIcon.module.css';
const StatisticsIcon = () => {
  return (
    <svg
      viewBox="0 0 38 38"
      className={s.navIcons}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 0a6 6 0 00-6 6v26a6 6 0 006 6h26a6 6 0 006-6V6a6 6 0 00-6-6H6zm23.5 16.555c1.283 0 2.333-1.1 2.333-2.444 0-1.344-1.05-2.444-2.333-2.444-1.283 0-2.333 1.1-2.333 2.444 0 .22.023.428.081.623l-4.141 4.351A1.973 1.973 0 0022.5 19c-.21 0-.42.024-.607.085l-2.975-3.116c.059-.196.082-.416.082-.636 0-1.344-1.05-2.444-2.333-2.444-1.284 0-2.334 1.1-2.334 2.444 0 .22.024.44.082.636l-5.32 5.561a1.9 1.9 0 00-.595-.086c-1.283 0-2.333 1.1-2.333 2.445 0 1.344 1.05 2.444 2.333 2.444 1.283 0 2.333-1.1 2.333-2.444 0-.22-.023-.428-.081-.623l5.308-5.574c.187.061.397.086.607.086.21 0 .42-.025.606-.086l2.975 3.117a2.256 2.256 0 00-.081.635c0 1.345 1.05 2.445 2.333 2.445 1.283 0 2.333-1.1 2.333-2.445 0-.22-.023-.44-.081-.635l4.153-4.339c.187.061.385.085.595.085z"
        fill="#6E78E8"
      />
    </svg>
  );
};
export default StatisticsIcon;
