import React from 'react';

const disp = mess => () => console.log(mess);

export default class Basic extends React.Component {
  constructor() {
    super();
    this.state = { files: [] };
  }

  componentDidMount() {
    document.addEventListener(
      'drop',
      function(event) {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        event.stopPropagation();
        // move dragged elem to the selected drop target
        console.log('<<<------------')
        return true;
      },
      false
    );
  }

  onDrop = ev => {
    ev.preventDefault();
    ev.stopPropagation();
    console.log('DROOOOOOOOOOOOOOOOOP');
    console.log(ev.target);
  };

  dropPlace = () => (
    <div
      style={{
        width: 200,
        height: 200,
        backgroundColor: 'brown',
      }}
      onDragOver={disp('onDragOver ->')}
      onDrop={this.onDrop}
    />
  );

  render() {
    return (
      <section>
        <div className="dropzone">{this.dropPlace()}</div>
      </section>
    );
  }
}
