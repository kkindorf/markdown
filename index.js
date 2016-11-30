import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

class Mark extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ['# H1', '## H2', '### H3']};
    this.handleChange = this.handleChange.bind(this);
    
  };
  handleChange (event){
    console.log(event.target.value);
    this.setState({value: event.target.value});
    
  }
 render(){
   
  return ( 
        <div>
        <textarea className="form-control" rows="30" value={this.state.value.map(function(markType){return markType})} onChange={this.handleChange}></textarea>
          <div className="catcher" dangerouslySetInnerHTML={{ __html:  marked(this.state.value) }}></div>
        </div>
        
        );
    }
 }


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Mark/>, document.getElementById('app'));
})
