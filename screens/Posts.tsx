import React, {useContext, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {PostDisplay} from '../components/postDisplay';
import {PostsContext} from '../context/postsContext';
import {usePosts} from '../hooks/usePosts';

function PostsScreen(): JSX.Element {
  const {state} = useContext(PostsContext);
  const {getPosts} = usePosts();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        {state.isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <View style={styles.container}>
            <FlatList
              style={styles.listContainer}
              data={state.posts}
              renderItem={({item}) => <PostDisplay post={item.data} />}
              ListFooterComponent={<View style={{height: 50}} />}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  loadingContainer: {
    marginTop: 50,
  },
  header: {
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  listContainer: {
    padding: 15,
  },
});

export default PostsScreen;
