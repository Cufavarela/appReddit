import {useContext} from 'react';
import {PostsContext} from '../context/postsContext';

export const usePosts = () => {
  const {actions} = useContext(PostsContext);

  const getPosts = () => {
    actions.setIsLoading(true);
    fetch('https://api.reddit.com/r/pics/hot.json?limit=5')
      // Podemos ir a buscar mas usando el after almacenado en algun lado que se yo
      .then(response => response.json())
      .then(json => {
        actions.setPosts(json.data.children);
        actions.setLastGotten(json.data.fullname);
        console.log(json);
      })
      .catch(error => {
        console.error(error);
        //set posts con un post de error?
      })
      .finally(() => actions.setIsLoading(false));
  };
  return {getPosts};
};
