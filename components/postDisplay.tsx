import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PostDisplayPorps} from '../types/types';
import {PostStats} from './postStats';

export const PostDisplay = ({post}: PostDisplayPorps) => {
  const {
    title,
    author,
    thumbnail: image,
    ups: votes,
    num_comments: comments,
    created: createdAt,
    id,
  } = post;

  const navigation = useNavigation();

  const formatedDate = new Date(createdAt * 1000).toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <View style={styles.postContainer}>
      <View style={styles.titleContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PostsDetails', {id: id})}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          {author} • {formatedDate}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PostsDetails', {id: id})}>
          <Image
            style={styles.image}
            source={{
              uri: image,
            }}
          />
        </TouchableOpacity>
        <View style={styles.countersContainer}>
          <PostStats stat={votes} iconRef={'likes'} />
          <PostStats stat={comments} iconRef={'comments'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  titleContainer: {
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
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
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
