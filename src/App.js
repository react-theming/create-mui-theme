import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SplitPane from 'react-split-pane';
import { ObjectInspector } from 'react-inspector';
import { event } from 'global';

import { requestTheme, fetchThemes, STATUS } from './api';
import { themeName, themeCode, themeJson } from './theme-api';
import Title from './ui/Title';
import DropDialog from './ui/DropDialog';
import ThemesList from './ui/ThemesList';
import Editor from './ui/Editor';

const genID = () => `id_${Math.round(Math.random() * 10000000)}`;

class App extends Component {
  state = {
    dragover: false,
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

  componentDidMount() {
    window.addEventListener(
      'dragover',
      e => {
        e = e; //|| event;
        e.dataTransfer.items[0].getAsString(console.log);
        this.setState({ dragover: true });
        e.preventDefault();
      },
      false
    );
    window.addEventListener(
      'dragleave',
      e => {
        e = e; //|| event;
        this.setState({ dragover: false });
        e.preventDefault();
      },
      false
    );
    window.addEventListener(
      'drop',
      e => {
        e = e; //|| event;
        this.setState({ dragover: false }, () =>
          e.dataTransfer.items[0].getAsString(this.onAddQuery)
        );

        e.preventDefault();
      },
      false
    );
  }

  handleNewQuery = ev => {
    const { value } = ev.target;
    requestTheme(value);
  };

  updateThemesList = theme => {
    console.log('​App -> theme', theme);
    const newThemeList = this.state.themesList.filter(
      thm => thm.id !== theme.id
    );
    theme.name = (theme.theme && themeName(theme.theme.palette)) || theme.name;
    newThemeList.push(theme);
    this.setState(
      {
        themesList: newThemeList.sort((t1, t2) => t2.ind - t1.ind),
      },
      () =>
        this.state.selectedTheme &&
        this.onSelectTheme(this.state.selectedTheme.id)
    );
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
    this.setState({ selectedTheme: theme });
  };

  layout = ({ themesListRender, themesPropsRender, themesCodeRender }) => (
    <div className={this.props.classes.main}>
      <SplitPane
        split="horizontal"
        minSize={200}
        maxSize={600}
        defaultSize={300}
        style={{ position: 'relative' }}
        pane2Style={{ height: 1}}
      >
        <SplitPane
          split="vertical"
          minSize={300}
          maxSize={800}
          defaultSize={500}
          // primary="second"
        >
          {themesListRender()}
          <div style={{ padding: 8 }}>
            <ObjectInspector data={this.state.selectedTheme} expandLevel={1} />
          </div>
        </SplitPane>
        {themesCodeRender()}
      </SplitPane>
    </div>
  );

  render() {
    const { themesList } = this.state;
    const themesListRender = () => (
      <ThemesList
        themesList={themesList}
        onAdd={this.onAddQuery}
        onClick={this.onSelectTheme}
      />
    );
    const themesCodeRender = () => (
      <Editor
        code={themeCode(
          this.state.selectedTheme && this.state.selectedTheme.overrides
        )}
        json={themeJson(
          this.state.selectedTheme && this.state.selectedTheme.theme
        )}
      />
    );
    const themesPropsRender = () => {};
    return (
      <div className={this.props.classes.app}>
        <Title />
        <DropDialog
          open={this.state.dragover}
          onClose={() => this.setState({ dragover: false })}
        />
        {this.layout({ themesListRender, themesPropsRender, themesCodeRender })}
      </div>
    );
  }
}

export default withStyles({
  app: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    height: 100,
    flexGrow: 1,
  }
})(App);
