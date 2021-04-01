import React from 'react';
import ReactDOM from 'react-dom';

import MySection from './MySection.jsx';
import MyButton from './MyButton.jsx';

ReactDOM.render(
  <React.StrictMode>
    <MySection>
      <MyButton>
        My Button Text
      </MyButton>
    </MySection>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
