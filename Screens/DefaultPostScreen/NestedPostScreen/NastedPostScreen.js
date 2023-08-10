import { FlatList, Image } from 'react-native';
// import { Dimensions, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { styles } from './NestedPostScreen.styled';
import { useEffect, useState } from 'react';
import PostsItem from '../../../component/PostItem/PostItem';

const NestedPostScreen = ({ route }) => {
  const [posts, setPosts] = useState([
    {
      // id: 'catty',
      postImg:
        'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FAwesomeProject-71fbbe2e-6fda-4603-96ba-05ca137c0f17/Camera/5421a1be-1b95-42a6-94f6-5e0afc2cf8dd.jpg',
      postName: 'nature',
      postAddress: 'Ukraine',
      postLocation: {  latitude: 37.4220936,
        longitude: -122.083922, },
    },
  ]);

  useEffect(() => {
    if (!route.params) return;

    setPosts(prev => [...prev, route.params]);
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image style={styles.avatarImg} source={require("../../../assets/images/avatar.jpg")}/>
        <View>
          <Text style={styles.avatarName}>Natali Romanova</Text>
          <Text style={styles.avatarEmail}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        style={styles.postsWrapper}
        data={posts}
        renderItem={({ item }) => (
          <PostsItem
            postName={item.postName}
            postImg={item.postImg}
            postAddress={item.postAddress}
            postLocation={item.postLocation}
          />
        )}
        keyExtractor={(item, idx) => idx.toString()}
      />
      <View style={styles.navTabs}></View>
    </View>
  );
};

export default NestedPostScreen;

