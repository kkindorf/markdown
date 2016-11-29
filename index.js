import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
let mark = marked("Hi!");
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

const Hello = () => {
  return <div>{mark}</div>;

}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Hello/>, document.getElementById('app'));
})
