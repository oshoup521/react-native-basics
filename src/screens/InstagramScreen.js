import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const posts = [
  {
    id: '1',
    user: 'user1',
    image: require('../../assets/forest.jpg'),
    caption: 'Beautiful day!',
  },
  {
    id: '2',
    user: 'user2',
    image: require('../../assets/beach.jpg'),
    caption: 'Loving this view!',
  },
  {
    id: '3',
    user: 'user3',
    image: require('../../assets/mountain.jpg'),
    caption: 'Just climbed this!',
  }
];

const InstagramScreen = () => {
  const [likes, setLikes] = useState({});

  const toggleLike = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: !prevLikes[postId],
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Instagram</Text>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.user}>{item.user}</Text>
            <Image source={item.image} style={styles.image} />
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => toggleLike(item.id)}>
                <Ionicons
                  name={likes[item.id] ? 'heart' : 'heart-outline'}
                  size={24}
                  color={likes[item.id] ? 'red' : 'black'}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.caption}>{item.caption}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  postContainer: {
    marginBottom: 20,
  },
  user: {
    fontWeight: 'bold',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    flexDirection: 'row',
    padding: 10,
  },
  caption: {
    padding: 10,
  },
});

export default InstagramScreen;