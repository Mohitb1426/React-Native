import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Appbar, Menu, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import app from '../../database/firebase';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const myButton = (
    <TouchableOpacity
      style={styles.imageWrapper}
      onPress={() => {
        openMenu();
      }}>
      <Image
        source={{
          uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png',
        }}
        style={{ width: 25, height: 25, marginRight: 20 }}
      />
    </TouchableOpacity>
  );
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => {
    setVisible(true);
    console.log(visible, '********visible');
  };

  const onLogout = async () => {
    try {
      await app.auth().signOut();
      navigation.navigate('Login');
    } catch (error) {
      closeMenu();
      alert(error);
    }
  };
  const closeMenu = () => setVisible(false);
  return (
    <Provider>
      <View style={styles.menuWrapper}>
        <Appbar.Header>
          <Appbar.Content title="Make Trip" />
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={myButton}
            style={styles.menuWrapper}>
            <Menu.Item onPress={onLogout} title="Logout" />
          </Menu>
        </Appbar.Header>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    marginRight: 20,
    flexDirection: 'row',
  },
  menuWrapper: {
    zIndex: 999,
  },
});
export default Header;
