import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
} from 'react-native';
import { globalStyles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

import ReviewForm from '../components/ReviewForm';
import Card from '../components/Card';

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: 'Cách lấy 10 điểm môn vật lí',
      paragraph: 'lorem ipsum',
      id: '1',
      rating: 5,
    },
    {
      title: 'Cách lấy 10 điểm môn hình học không gian',
      paragraph: 'lorem ipsum',
      id: '2',
      rating: 4,
    },
    {
      title: 'Cách lấy 10 điểm môn hóa học',
      paragraph: 'lorem ipsum',
      id: '3',
      rating: 3,
    },
  ]);

  const [modalLoad, setModalLoad] = useState(false);

  const submitHandler = ({ title, body, rating }) => {
    setReviews([
      {
        title,
        paragraph: body,
        rating: Math.round(Number(rating)),
        id: Math.random().toString(),
      },
      ...reviews,
    ]);
    setModalLoad(false);
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalLoad} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={{ width: '100%', ...styles.container }}>
              <MaterialIcons
                style={styles.modalClose}
                name="close"
                size={40}
                onPress={() => setModalLoad(false)}
              />

              <Text style={globalStyles.text}>What's in your mind?</Text>

              <ReviewForm submitHandler={submitHandler} />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </Modal>

      <View style={{ height: '85%' }}>
        <FlatList
          style={{ flex: 1 }}
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailsScreen', item)}>
              <Card>
                <Image
                  style={{ width: '100%', height: 150, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}
                  source={{
                    uri:
                      'https://i.picsum.photos/id/521/800/450.jpg?hmac=yYfT9YPFm9YLOK3IDL-Pu-Oh6GQM_ez7hfY8eA-vuCI',
                  }}
                />
                <View style={styles.container}>

                <Text style={globalStyles.title}>{item.title}</Text>
                </View>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.modalOpen}>
        <MaterialIcons
          name="add"
          size={48}
          color="coral"
          onPress={() => setModalLoad(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: 'center',
    flex: 1,
  },
  modalClose: {
    alignSelf: 'flex-end',
  },
  modalOpen: {
    borderWidth: 4,
    borderColor: 'coral',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
});
