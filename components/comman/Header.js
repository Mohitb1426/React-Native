import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Appbar, Menu, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
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
  const closeMenu = () => setVisible(false);
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Make Trip" />
        <Menu visible={visible} onDismiss={closeMenu} anchor={myButton}>
          <Menu.Item
            onPress={() => {
              console.log('Option 1 was pressed');
              closeMenu();
            }}
            title="Option 1"
          />
          <Menu.Item
            onPress={() => {
              console.log('Option 2 was pressed');
              closeMenu();
            }}
            title="Option 2"
          />
          <Menu.Item
            onPress={() => {
              console.log('Option 3 was pressed');
              closeMenu();
            }}
            title="Option 3"
            disabled
          />
        </Menu>
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    marginRight: 20,
    flexDirection: 'row',
  },
});
export default Header;
