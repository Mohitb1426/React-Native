import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/comman/Header';
import { useNavigation } from '@react-navigation/native';
import busImage from '../assests/images/Bus.png';
import flightImage from '../assests/images/Flight.png';
import hotelImage from '../assests/images/Hotel.png';
import trainsImage from '../assests/images/Train.png';

const HomeSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainWrapper}>
      <View>
        <Header />
      </View>
      <View style={styles.transportSection}>
        <TouchableOpacity
          style={styles.imageWrapper}
          onPress={() => navigation.navigate('FlightBooking')}>
          <Image source={flightImage} style={{ width: 60, height: 30 }} />
          <Text style={styles.wrapText}>Flights</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageWrapper}
          onPress={() => navigation.navigate('TrainsBooking')}>
          <Image source={trainsImage} style={{ width: 60, height: 30 }} />
          <Text style={styles.wrapText}>Trains</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageWrapper}
          onPress={() => navigation.navigate('BusBooking')}>
          <Image source={busImage} style={{ width: 60, height: 30 }} />
          <Text style={styles.wrapText}>Bus</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageWrapper}
          onPress={() => navigation.navigate('HotelBooking')}>
          <Image source={hotelImage} style={{ width: 60, height: 30 }} />
          <Text style={styles.wrapText}>Hotels</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.secondTransportSection}>
        <View style={styles.transportSection_second}>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image source={busImage} style={{ width: 55, height: 30 }} />
            <Text style={styles.wrapText}>Airport Cabs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image source={hotelImage} style={{ width: 55, height: 30 }} />
            <Text style={styles.wrapText}>Homestays</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={styles.wrapText}>Outstation Cabs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={styles.wrapText}>Activities & Tours</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transportSection_second}>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={styles.wrapText}>Hourly Stays</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25, bac: 'red' }}
            />
            <Text style={styles.wrapText}>Gift Cards</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image source={trainsImage} style={{ width: 25, height: 25 }} />
            <Text style={styles.wrapText}>Train PNR Status</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={styles.wrapText}>Forex</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.secondTransportSection}>
        <View style={styles.offersWrapper}>
          <Image
            source={{
              uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
            }}
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.offersText}>Offers</Text>
        </View>
        <View style={styles.transportSection_second}>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={styles.wrapText}>10% Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={styles.wrapText}>20% Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={styles.wrapText}>30% Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={styles.wrapText}>40% Off</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transportSection_second}>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={styles.wrapText}>50% Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={styles.wrapText}>60% Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={styles.wrapText}>65% Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={styles.wrapText}>68% Off</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transportSection_second}>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={styles.wrapText}>70% Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={styles.wrapText}>72% Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={styles.wrapText}>75% Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text style={styles.wrapText}>78% Off</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    marginRight: 20,
    alignItems: 'center',
    width: 70,
  },
  transportSection: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 70,
    borderWidth: 1,
    borderColor: 'thistle',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  mainWrapper: {
    flexDirection: 'column',
  },
  transportSection_second: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  secondTransportSection: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  offersText: {
    fontSize: 20,
    marginLeft: 10,
    color: 'green',
  },
  offersWrapper: {
    flexDirection: 'row',
  },
  wrapText: {
    flexShrink: 1,
    textAlign: 'center',
    color: 'green',
  },
});

export default HomeSection;
