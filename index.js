/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {PostsContextProvider} from './context/postsContext';

AppRegistry.registerComponent(
  appName,
  () => props =>
    (
      <PostsContextProvider>
        <App {...props} />
      </PostsContextProvider>
    ),
  () => App,
);
