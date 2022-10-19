import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import backArrow from '../assests/images/kindpng_193306.png';
import flightImage from '../assests/images/Flight.png';
import { useNavigation } from '@react-navigation/native';
import { getPeople, loadUsers } from '../action/FlightList';
import { useDispatch, useSelector } from 'react-redux';
import { GET_FLIGHT_LIST } from '../constant/index';
import { getData, storeData } from '../asyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Item = ({ title, id }) => (
  <View style={styles.contentView}>
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image source={flightImage} style={{ width: 150, height: 50 }} />
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

const FlightBooking = () => {
  const dataOutput = useSelector(state => state.flightList.people);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [flightData, setFlightData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    dispatch(getPeople());
    setTimeout(() => {
      setLoader(false);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getParseData = useCallback(async () => {
    const setData = await storeData('FLIGHT_DATA', JSON.stringify(dataOutput));
    const allFlightData = await getData('FLIGHT_DATA');
    console.log(allFlightData, 'allFlightData');
    setFlightData(allFlightData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getParseData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Text style={styles.MainHeaderStyle}>Flights</Text>
      {loader ? (
        <View style={styles.container}>
          <ActivityIndicator
            animating={loader}
            color="#bc2b78"
            size="large"
            style={styles.activityIndicator}
          />
        </View>
      ) : (
        <SafeAreaView>
          <FlatList
            data={flightData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      )}
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
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: 250,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
});
export default FlightBooking;
