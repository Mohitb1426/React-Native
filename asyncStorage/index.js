import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    const setData = await AsyncStorage.setItem(key, value);
    return setData;
  } catch (error) {
    console.log(error, 'error');
  }
};
// get item
export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log(JSON.parse(value), '***value');
    return JSON.parse(value);
  } catch (error) {
    console.log(error, 'error');
  }
};
