import {ReactNode} from 'react';

export type PostsContextProps = {
  state: State;
  actions: Actions;
};

export type State = {
  posts: Posts;
  isLoading: boolean;
  lastGotten: string;
};

export type Actions = {
  setPosts: React.Dispatch<React.SetStateAction<Posts>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setLastGotten: React.Dispatch<React.SetStateAction<string>>;
};

export type PostsContextProviderProps = {
  children: ReactNode;
};

export type Posts = Array<{data: Post; kind: string}>;

export type Post = {
  title: string;
  author: string;
  thumbnail: string;
  ups: number;
  num_comments: number;
  created: number;
  id: number;
};

export type PostDisplayPorps = {post: Post};

export type PostStatsPorps = {
  iconRef: string;
  stat: number;
};
