import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import { ObjectInspector } from 'react-inspector';

import { requestTheme, fetchThemes, STATUS } from './api';
import { themeName } from './theme-api'
import Title from './ui/Title';
import ThemesList from './ui/ThemesList';
import DropText from './ui/DropText';

const genID = () => `id_${Math.round(Math.random() * 10000000)}`;

class App extends Component {
  state = {
    themesList: [
      {
        id: genID(),
        ind: 0,
        name: 'Theme 1',
        query:
          'primary.color=42A5F5&secondary.color=7B1FA2&primary.text.color=212121&secondary.text.color=ECEFF1',
        status: STATUS.NEW,
      },
    ],
    selectedTheme: null,
  };
  handleNewQuery = ev => {
    const { value } = ev.target;
    requestTheme(value);
  };

  updateThemesList = theme => {
    console.log('​App -> theme', theme);
    const newThemeList = this.state.themesList.filter(
      thm => thm.id !== theme.id
    );
    theme.name = theme.theme && themeName(theme.theme.palette) || theme.name;
    newThemeList.push(theme);
    this.setState({
      themesList: newThemeList.sort((t1, t2) => t2.ind - t1.ind),
    }, () => this.state.selectedTheme && this.onSelectTheme(this.state.selectedTheme.id));
  };

  onAddQuery = query => {
    const { themesList } = this.state;
    const newThemeList = [
      ...themesList,
      {
        id: genID(),
        ind: themesList.length,
        name: `Theme ${themesList.length + 1}`,
        query,
        status: STATUS.NEW,
      },
    ];
    this.setState({ themesList: newThemeList }, () =>
      fetchThemes(this.state.themesList, this.updateThemesList)
    );
  };

  onSelectTheme = id => {
    const theme = this.state.themesList.find(thm => thm.id === id);
    this.setState({selectedTheme: theme})
  }

  layout = ({ themesListRender, themesPropsRender, themesCode }) => (
    <div>
      <SplitPane
        split="horizontal"
        minSize={200}
        maxSize={600}
        defaultSize={300}
        style={{ position: 'relative' }}
      >
        <SplitPane
          split="vertical"
          minSize={300}
          maxSize={800}
          defaultSize={500}
          // primary="second"
        >
          {themesListRender()}
          <div style={{padding: 8}}><ObjectInspector data={this.state.selectedTheme} expandLevel={1} /></div>
        </SplitPane>
        <div>{themesCode}</div>
      </SplitPane>
    </div>
  );

  render() {
    const { themesList } = this.state;
    const themesListRender = () => (
      <ThemesList themesList={themesList} onAdd={this.onAddQuery} onClick={this.onSelectTheme}/>
    );
    const themesPropsRender = () => {};
    return (
      <div className="App">
        <Title />
        {this.layout({ themesListRender, themesPropsRender })}
      </div>
    );
  }
}

export default App;
