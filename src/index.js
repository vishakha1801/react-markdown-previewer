import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import marked from 'marked';

const initialState=`# Welcome to my React Markdown Previewer
## This is a sub-heading...
### And here's some other cool stuff:
  
Here's some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
let's not forget embedded images:
![Grogu](https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg) 
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
And if you want to get really crazy, even tables:
Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
1. And there are numbered lists too.
1. Use just 1s if you want! 

`

class App extends React.Component {
  state = {
    text: initialState
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const { text } = this.state;
    
    const markdown = marked(text, { breaks: true });
    return(
      <div>
        <div className="col xs-12 text-center text-white">
              <h1 className="heading">React Markdown Previewer</h1>
              <hr />
        </div>
        <div className="row">
          <div className="col-6">
            <h3 className="heading text-center text-white">Enter your markdown:</h3>
            <textarea className="input form-control p-2" id="editor" value={text} onChange={this.handleChange}/>
          </div>
          
          <div className="col-6">
            <h3 className="heading text-center text-white">See the result:</h3>
            <div className="output preview rounded p-2" dangerouslySetInnerHTML={{__html: markdown}} id="preview" />
          </div>
        </div>
      </div>
      //<footer />
       //     <p>Made with ❤ by Vishakha
     // </footer>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

