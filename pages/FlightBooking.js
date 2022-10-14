import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import backArrow from '../assests/images/kindpng_193306.png';
import { useNavigation } from '@react-navigation/native';
import { getPeople, loadUsers } from '../action/FlightList';
import { useDispatch, useSelector } from 'react-redux';
import { GET_FLIGHT_LIST } from '../constant/index';

const Item = ({ title, id }) => (
  <View style={styles.contentView}>
    <TouchableOpacity style={styles.contentStyle}>
      <Text style={styles.contentIDText}>Id : {id}</Text>
      <Text style={styles.contentTitleText}> {title}</Text>
    </TouchableOpacity>
  </View>
);

const FlightBooking = () => {
  const dataOutput = useSelector(state => state.flightList.people);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [flightData, setFlightData] = useState([]);

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  useEffect(() => {
    console.log(dataOutput, 'dataOutput');
    setFlightData(dataOutput);
  }, [dataOutput]);
  const renderItem = ({ item }) => <Item title={item?.title} id={item?.id} />;

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.mainCart}>
        <TouchableOpacity
          style={styles.backHeader}
          onPress={() => navigation.navigate('Home')}>
          <Image source={backArrow} style={{ width: 40, height: 25 }} />
          <Text style={styles.backText}> Back</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={flightData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  backHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  mainCart: {
    borderWidth: 1,
    borderBottomColor: 'black',
    borderRadius: 0,
    height: 50,
    justifyContent: 'center',
  },
  backText: {
    marginLeft: 10,
  },
  contentStyle: {
    flexDirection: 'row',
  },
  contentView: {
    borderWidth: 1,
    borderBottomColor: 'black',
    borderRadius: 0,
    height: 50,
    justifyContent: 'center',
  },
  mainWrapper: {
    paddingHorizontal: 10,
  },
  contentIDText: {
    color: 'green',
    marginLeft: 10,
  },
  contentTitleText: {
    flexShrink: 1,
    marginLeft: 20,
    color: 'green',
  },
});
export default FlightBooking;
