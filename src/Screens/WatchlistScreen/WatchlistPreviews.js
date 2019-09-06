import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import runtimeText from '../../utils/runtimeText';
import colors from '../../Constants/colors';

const WatchlistPreviews = props => {

  const [showBorder, setShowBorder] = useState(false);

  return (
    <View style={showBorder ? [styles.watchlistPreviews, styles.watchlistPreviewsBorder] : styles.watchlistPreviews}>
      <FlatList
        contentContainerStyle={styles.flatList}
        keyExtractor={movie => movie.id.toString()}
        onScroll={e => setShowBorder(e.nativeEvent.contentOffset.y >= 1 && props.watchlist.length > 0)}
        scrollEventThrottle={16}
        data={props.watchlist}
        renderItem={({item: movie}) => (
          <TouchableOpacity style={styles.movie} onPress={() => props.selectMovie(movie)}>
            <View style={styles.imageShadow}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path}} 
                />
              </View>
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>
                {movie.title}
              </Text>
              <Text style={styles.info}>
                {movie.vote_average} | {runtimeText(movie.runtime)} | {movie.release_date.slice(0, 4)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  watchlistPreviews: {
    marginTop: 5,
    borderTopWidth: 1,
    borderColor: colors.base01,
  },
  watchlistPreviewsBorder: {
    borderColor: colors.base02,
  },
  flatList: {
    paddingBottom: 150,
    paddingHorizontal: 28,
  },  
  movie: {
    flexDirection: 'row',
    marginVertical: 10, 
    flex: 1
  },
  imageShadow: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  imageContainer: {
    borderRadius: 15,
    height: 140,
    width: 100,
    overflow: 'hidden',
    backgroundColor: colors.base02
  },
  image: {
    flex: 1,
    resizeMode: 'cover'
  },
  details: {
    flex: 2,
    justifyContent: 'center',
    marginLeft: 15
  },
  title: {
    marginBottom: 8,
    color: colors.text01,
    fontSize: 22,
    fontWeight: '700',
  },
  info: {
    color: colors.text03,
    fontSize: 18,
    fontWeight: '600',
  }
});

export default WatchlistPreviews;

