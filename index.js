import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

class Mark extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: '# H1\n## H2\n### H3\n#### H4\n ~~strikethrough~~\n'};
    this.handleChange = this.handleChange.bind(this);
  };
  handleChange (event){
    this.setState({value: event.target.value});
  }
 render(){
  return (
        <div>
        <textarea className="form-control" rows="30" value={this.state.value} onChange={this.handleChange}></textarea>
          <div className="catcher" dangerouslySetInnerHTML={{ __html:  marked(this.state.value) }}></div>
        </div>

        );
    }
 }


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Mark/>, document.getElementById('app'));
})
