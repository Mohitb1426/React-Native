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
import hotelImage from '../assests/images/Hotel.png';
import { useNavigation } from '@react-navigation/native';
import { getPeople, loadUsers } from '../action/FlightList';
import { useDispatch, useSelector } from 'react-redux';
import { GET_FLIGHT_LIST } from '../constant/index';

const Item = ({ title, id }) => (
  <View style={styles.contentView}>
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={hotelImage} style={{ width: 120, height: 50 }} />
        <Text style={styles.contentIDText}>Price : {id}</Text>
      </View>
      <View style={styles.contentStyle}>
        <Text style={styles.contentTitleText}> {title}</Text>
        <Text style={styles.contentTimingText}>
          Timing : {id} AM - {id + 1} PM
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);
const HotelBooking = () => {
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
      <Text style={styles.MainHeaderStyle}>Hotels</Text>
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
    color: 'green',
  },
  contentStyle: {
    flexDirection: 'column',
  },
  contentView: {
    alignContent: 'center',
    borderWidth: 2,
    borderColor: 'green',
    borderBottomColor: 'green',
    borderRadius: 10,
    height: 120,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    marginTop: 20,
  },
  mainWrapper: {
    paddingHorizontal: 10,
  },
  contentIDText: {
    color: 'green',
    marginLeft: 10,
    fontSize: 19,
  },
  contentTitleText: {
    flexShrink: 1,
    color: 'green',
  },
  contentTimingText: {
    fontSize: 15,
    color: 'red',
  },
  MainHeaderStyle: {
    fontSize: 20,
    color: 'green',
    marginTop: 20,
    textAlign: 'center',
  },
});
export default HotelBooking;
