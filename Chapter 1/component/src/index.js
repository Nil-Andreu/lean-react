import React, { Fragment } from 'react';
import { render } from 'react-dom';
import './index.css';

import MySection from './MySection.jsx';
import MyButton from './MyButton.jsx';
import MyComponent from './MyComponent';

render(
  <Fragment>
    <MySection>
      <MyButton>
        My Button Text
      </MyButton>
    </MySection>
    <MyComponent>
      <MyComponent.First /> {/*With the < /> is to say that it only render the component, with no children or props*/}
      <MyComponent.Second />
    </MyComponent>
  </Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
