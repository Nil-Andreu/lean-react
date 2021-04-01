import React, { Fragment } from 'react';
import { render } from 'react-dom';
import './index.css';

import MySection from './MySection.jsx';
import MyButton from './MyButton.jsx';

render(
  <Fragment>
    <MySection>
      <MyButton>
        My Button Text
      </MyButton>
    </MySection>
  </Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
