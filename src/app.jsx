import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createRoot} from "react-dom/client"
import Apps from './Apps.jsx';

function render() {
  const container =createRoot(document.getElementById("root"))
  container.render(
  <React.StrictMode>
    <Apps/>
  </React.StrictMode>);
}

render();