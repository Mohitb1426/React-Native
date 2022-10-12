import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import backArrow from '../assests/images/kindpng_193306.png';
import { useNavigation } from '@react-navigation/native';

const FlightBooking = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.mainCart}>
        <TouchableOpacity
          style={styles.backHeader}
          onPress={() => navigation.navigate('Home')}>
          <Image source={backArrow} style={{ width: 40, height: 25 }} />
          <Text style={styles.backText}> Back</Text>
        </TouchableOpacity>
      </View>
      <Text>FlightBooking</Text>
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
});
export default FlightBooking;
