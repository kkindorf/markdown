import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

class Mark extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: "## Hi I'm [Kevin][Kevin]. \n### This is a markdown previewer\n\n[Kevin]: https://kkindorf.github.io/ \n\n# H1\n\n## H2\n\n### H3\n\n#### H4\n\n~~strikethrough~~\n\n*a whole lot of emphasis*\n\n**even more emphasis**\n\n# this an unordered list\n+  candy\n+  pizza\n+  lobster\n\n## this is an ordered list\n 1.  2\n 2.  3\n\n"};
    this.handleChange = this.handleChange.bind(this);
  };
  handleChange (event){
    this.setState({value: event.target.value});
  }
 render(){
  return (
        <div className="container-fluid">
            <div className="row">
              <div className="wrapper">
                  <textarea className="form-control markdown" rows="28" value={this.state.value} onChange={this.handleChange}></textarea>
                  <div className="catcher" dangerouslySetInnerHTML={{ __html:  marked(this.state.value) }}>
                  </div>
              </div>
            </div>
        </div>

        );
    }
 }


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Mark/>, document.getElementById('app'));
})
