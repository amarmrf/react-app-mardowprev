import React from 'react';
import './App.css';
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
let marked = require("marked")

marked.setOptions({
  breaks: true
})

let init = `# Welcome to my React Markdown Previewer!

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

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

- And then there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)

`
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markdown: init
    }
    this.handleChange=this.handleChange.bind(this)
  }
  
  handleChange(e){
    this.setState({markdown:e.target.value})
  }


  render (){
    return (
    <div className="App container">
    <div>
      <FormGroup controlId="fromControlsTextarea">
        <FormLabel>
        Markdown Input:
        </FormLabel>
        <FormControl id="editor" as="textarea" 
        placeholder="Write your markdown text here." value={this.state.markdown} onChange={this.handleChange}
        style={{minHeight:300}} 
        />
      </FormGroup>
    </div>
    <div>
        <h1> Markdown Output:</h1>
        <div dangerouslySetInnerHTML={{__html:marked(this.state.markdown)}}id="preview"></div>
    </div>
    </div>
  )}
}

export default App;
