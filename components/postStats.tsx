import {Image, StyleSheet, Text, View} from 'react-native';
import {PostStatsPorps} from '../types/types';

export const PostStats = ({stat, iconRef}: PostStatsPorps) => {
  const getIcon = (icon: String) => {
    switch (icon) {
      case 'comments':
        return (
          <Image
            style={styles.icon}
            source={require('../assets/commentsIcon.png')}
          />
        );
      case 'likes':
        return (
          <Image
            style={styles.icon}
            source={require('../assets/likesIcon.png')}
          />
        );
      default:
        return (
          <Image
            style={styles.icon}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          />
        );
    }
  };

  return (
    <View style={styles.statsContainer}>
      {getIcon(iconRef)}
      <Text style={styles.textGreen}>{stat}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textGreen: {
    fontSize: 16,
    fontWeight: '400',
    color: '#188180',
  },
  statsContainer: {
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
