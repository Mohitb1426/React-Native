import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const UserList = () => {
  const [data, setData] = useState([]);

  const getUserList = async () => {
    try {
      const response = await axios.get('http://localhost:4000/user/');
      console.log(response.data, 'parseData');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserList();
  }, []);
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Email</DataTable.Title>
        <DataTable.Title>Password</DataTable.Title>
      </DataTable.Header>
      {data &&
        data.map(ele => {
          return (
            <DataTable.Row style={styles.tableHeader}>
              <DataTable.Cell>{ele?.id}</DataTable.Cell>
              <DataTable.Cell>{ele?.id}</DataTable.Cell>
              <DataTable.Cell>{ele?.id}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
    </DataTable>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
});
