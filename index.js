import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

class Mark extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: '# H1\n## H2\n### H3\n\n#### H4\n\n~~strikethrough~~\n\n*a whole lot of emphasis*\n**even more emphasis**\n# this an unordered list\n+  candy\n+  pizza\n+  lobster\n## this is an ordered list\n 1.  2\n 2.  3'};
    this.handleChange = this.handleChange.bind(this);
  };
  handleChange (event){
    this.setState({value: event.target.value});
  }
 render(){
  return (
        <div>
        <textarea className="form-control markdown" rows="30" value={this.state.value} onChange={this.handleChange}></textarea>
          <div className="catcher" dangerouslySetInnerHTML={{ __html:  marked(this.state.value) }}></div>
        </div>

        );
    }
 }


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Mark/>, document.getElementById('app'));
})
