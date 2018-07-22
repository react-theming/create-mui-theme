import { request } from 'graphql-request';

const endpoint = 'https://api.graph.cool/simple/v1/cjjwqys1q9395016079r79f4i';

export const STATUS = {
  NEW: 'NEW',
  FETCHING: 'FETCHING',
  READY: 'READY',
  ERROR: 'ERROR',
};

export const requestTheme = toolUrl => {
  console.log('requestTheme start -> ​toolUrl', toolUrl);
  const query = `
  query createTheme($toolUrl: String){
    createTheme(query: $toolUrl) {
      overrides
      theme
    }
  }`;
  return request(endpoint, query, { toolUrl }).then(data => data.createTheme);
};

const multiFetch = async fetchList =>
  await Promise.all(
    fetchList.map(async item => {
      item.prefetch(item);
      return item.put(await item.fetch());
    })
  );

export const fetchThemes = async (themesList, updState) => {
  const fetchList = themesList
    .filter(theme => theme.status === STATUS.NEW)
    .map(theme => ({
      comment: theme.query,
      prefetch: () => updState({ ...theme, status: STATUS.FETCHING }),
      fetch: async () => await requestTheme(theme.query),
      put: res => {
        updState({ ...theme, ...res, status: STATUS.READY });
      },
    }));
  console.log('​exportfetchThemes -> fetchList finish', fetchList);
  const result = await multiFetch(fetchList);
};
