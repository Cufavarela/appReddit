import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import {PostStats} from '../components/postStats';
import {PostsContext} from '../context/postsContext';
import {Post} from '../types/types';
import {formatDate} from '../utils/formatDate';

function PostsDetailsScreen({route}): JSX.Element {
  const {id} = route.params;
  const {state} = useContext(PostsContext);
  const [selectedPost, setSelectedPost] = useState<Post>();

  const getPostDetails = (postId: number) => {
    state.posts.forEach(post => {
      if (post.data.id === postId) {
        return setSelectedPost(post.data);
      }
    });
  };

  const formatedDate = selectedPost ? formatDate(selectedPost.created) : '';

  useEffect(() => {
    getPostDetails(id);
  }, [id]);

  return (
    <SafeAreaView>
      {selectedPost ? (
        <View style={styles.postContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{selectedPost.title}</Text>
            <Text style={styles.text}>
              {selectedPost.author} • {formatedDate}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Image
              style={styles.image}
              source={{
                uri: selectedPost.thumbnail,
              }}
            />
            <View style={styles.countersContainer}>
              <PostStats stat={selectedPost.ups} iconRef={'likes'} />
              <PostStats
                stat={selectedPost.num_comments}
                iconRef={'comments'}
              />
            </View>
          </View>
        </View>
      ) : (
        <Text>Cufa capo</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    marginTop: 10,
    marginBottom: 20,
    padding: 15,
  },
  titleContainer: {
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#188180',
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
  textGreen: {
    fontSize: 16,
    fontWeight: '400',
    color: '#188180',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 15,
  },
  countersContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 30,
  },
  commentsContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default PostsDetailsScreen;
