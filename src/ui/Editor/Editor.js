import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

const code = `function add(a, b) {
  return a + b;
}
`;

export default class App extends React.Component {
  static defaultProps = {
    code: ''
  }
  state = { code };

  render() {
    return (
      <Editor
        value={this.props.code}
        // onValueChange={code => this.setState({ code })}
        onValueChange={() => {}}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        className={this.props.className}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
    );
  }
}
