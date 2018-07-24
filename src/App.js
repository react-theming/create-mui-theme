import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SplitPane from 'react-split-pane';

import { requestTheme, fetchThemes, STATUS } from './api';
import { themeName, themeCode, themeJson } from './theme-api';
import Title from './ui/Title';
import DropDialog from './ui/DropDialog';
import HelpDialog from './ui/HelpDialog';
import ThemesList from './ui/ThemesList';
import Editor from './ui/Editor';
import Inspector from './ui/Inspector';

const genID = () => `id_${Math.round(Math.random() * 10000000)}`;

class App extends React.PureComponent {
  state = {
    dragover: false,
    themesList: [
      // {
      //   id: genID(),
      //   ind: 0,
      //   name: 'Theme 1',
      //   query:
      //     'primary.color=000000&secondary.color=FFFFFF',
      //   status: STATUS.NEW,
      // },
    ],
    selectedTheme: null,
    showHelp: false,
  };

  componentDidMount() {
    this.onAddQuery('primary.color=3f51b5&secondary.color=f50057');
    window.addEventListener(
      'dragover',
      e => {
        this.setState({ dragover: true });
        e.preventDefault();
      },
      false
    );
    window.addEventListener(
      'dragleave',
      e => {
        this.setState({ dragover: false });
        e.preventDefault();
      },
      false
    );
    window.addEventListener(
      'drop',
      e => {
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
    const newThemeList = this.state.themesList.filter(
      thm => thm.id !== theme.id
    );
    if (theme.theme) {
      theme.name = themeName(theme.theme.palette) || theme.name;
      theme.theme.themeName = theme.name;
      theme.overrides.themeName = theme.name;
    }
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
    const id = genID();
    const newThemeList = [
      ...themesList,
      {
        id,
        ind: themesList.length,
        name: `Theme ${themesList.length + 1}`,
        query,
        status: STATUS.NEW,
      },
    ];
    this.setState({ themesList: newThemeList, selectedTheme: { id } }, () =>
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
        minSize={300}
        maxSize={800}
        defaultSize={'70%'}
        style={{ position: 'relative' }}
        pane2Style={{ height: 1 }}
      >
        <SplitPane
          split="vertical"
          minSize={300}
          maxSize={800}
          defaultSize={500}
          // primary="second"
        >
          {themesListRender()}
          <Inspector selectedTheme={this.state.selectedTheme} expandLevel={1} />
        </SplitPane>
        {themesCodeRender()}
      </SplitPane>
    </div>
  );

  onHelp = () => this.setState({ showHelp: !this.state.showHelp });

  render() {
    const { themesList } = this.state;
    const themesListRender = () => (
      <ThemesList
        themesList={themesList}
        onAdd={this.onAddQuery}
        onClick={this.onSelectTheme}
        currentThemeId={this.state.selectedTheme && this.state.selectedTheme.id}
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
        <Title onHelp={this.onHelp} />
        <HelpDialog
          open={this.state.showHelp}
          onClose={() => this.setState({ showHelp: false })}
        />
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
    flexDirection: 'column',
  },
  main: {
    height: 100,
    flexGrow: 1,
  },
})(App);
