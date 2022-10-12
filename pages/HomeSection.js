import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/comman/Header';
import { useNavigation } from '@react-navigation/native';

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
          <Image
            source={{
              uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
            }}
            style={{ width: 25, height: 25 }}
          />
          <Text>Flights</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageWrapper}
          onPress={() => navigation.navigate('TrainsBooking')}>
          <Image
            source={{
              uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
            }}
            style={{ width: 25, height: 25 }}
          />
          <Text>Trains</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageWrapper}
          onPress={() => navigation.navigate('BusBooking')}>
          <Image
            source={{
              uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
            }}
            style={{ width: 25, height: 25 }}
          />
          <Text>Bus</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageWrapper}
          onPress={() => navigation.navigate('HotelBooking')}>
          <Image
            source={{
              uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
            }}
            style={{ width: 25, height: 25 }}
          />
          <Text>Hotels</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.secondTransportSection}>
        <View style={styles.transportSection_second}>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text>Flights</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text>Trains</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text>Bus</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text>Hotels</Text>
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
            <Text>Flights</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text>Trains</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text>Bus</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text>Hotels</Text>
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
            <Text>10% Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text>20% Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text>30% Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text>40% Off</Text>
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
            <Text>50% Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text>60% Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text>65% Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text>68% Off</Text>
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
            <Text>70% Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text>72% Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text>75% Off</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageWrapper}>
            <Image
              source={{
                uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
              }}
              style={{ width: 25, height: 25 }}
            />
            <Text>78% Off</Text>
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
    color: 'black',
    marginLeft: 10,
  },
  offersWrapper: {
    flexDirection: 'row',
  },
});

export default HomeSection;
