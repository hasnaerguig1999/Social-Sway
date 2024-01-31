import React from "react";

import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export const Portfolio = ({ route }) => {
  const { user } = route.params;




  return (
    <ScrollView style={styles.container} >
      <View style={styles.greenSection}>
        <Image source={{ uri: user.img }} style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <Text style={styles.bio}>Bio:</Text>
      <Text style={styles.desc}>{user.desc}</Text>
      {user.photos.map(photo => (
        <Post key={photo.id} post={photo} />
      ))}
    </ScrollView>
  );
};

const Post = ({ post }) => {
  return (
    <View style={styles.postContainer}>
      <Image source={{ uri: post.url }} style={styles.postImage} />
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.postDesc}>{post.photoDesc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 100,
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    color: 'white',

  },
  bio: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',

  },
  desc: {
    fontSize: 14,
    color: 'gray',
  },
  postContainer: {
    marginTop: 20,
  },
  postImage: {
    width: 100,
    height: 100,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postDesc: {
    fontSize: 14,
    color: 'gray',
  },
  greenSection: {
    backgroundColor: '#385A0E',
    padding: 10,

  },
});