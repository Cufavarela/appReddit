import React, {FC, useState} from 'react';
import {
  Posts,
  PostsContextProps,
  PostsContextProviderProps,
} from '../types/types';

export const PostsContext = React.createContext<PostsContextProps>({
  state: {
    posts: [],
    isLoading: false,
    lastGotten: '',
  },
  actions: {
    setPosts: () => {},
    setIsLoading: () => {},
    setLastGotten: () => {},
  },
});

export const PostsContextProvider: FC<PostsContextProviderProps> = ({
  children,
}) => {
  const [lastGotten, setLastGotten] = useState('');
  const [posts, setPosts] = useState<Posts>([]);
  const [isLoading, setIsLoading] = useState(false);

  const state = {
    posts,
    isLoading,
    lastGotten,
  };

  const actions = {
    setPosts,
    setIsLoading,
    setLastGotten,
  };

  return (
    <PostsContext.Provider value={{state, actions}}>
      {children}
    </PostsContext.Provider>
  );
};
