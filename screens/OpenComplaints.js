import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { Appbar } from 'react-native-paper';

const _goBack = () => console.log('Went back');

const _search = () => console.log('Search  Clicked');


const OpenComplaints = () => {

  return (
    <View flexDirection="column" style={{ alignItems: 'center', width: '100%', height: '100%', }}>
      <View style={{ width: '100%' }}>
        <Appbar.Header theme={{ color: "rgba(55, 155,216,1)" }}>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title="Open Complaints" />
          <Appbar.Action icon="magnify" onPress={_search} />

        </Appbar.Header>
      </View>


      <View style={{ width: '95%', alignItems: 'center' }} >
        <View style={{ alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center', width: "100%" }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 14, color: 'grey', fontWeight: 'bold' }}>No. of Complaints: 2</Text>
          </View>
          <View style={styles.attachBox}>
            <View style={{ flex: 4, alignItems: 'center' }}>
              <Text style={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}>All</Text>
            </View>

            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 15, color: 'black', transform: [{ rotate: "90deg" }] }}>{'>'}</Text>
            </View>
          </View>

        </View>

        <View style={styles.complaintBox}>
          <View style>
            <Text style={{ fontSize: 16, color: 'grey' }}>02 June 2021 10:14 AM</Text>
          </View>
          <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, color: 'grey' }}>Student ID:</Text>
            <Text style={{ fontSize: 16, color: 'grey' }}>K173604</Text>
          </View>
          <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, color: 'grey' }}>Against:</Text>
            <Text style={{ fontSize: 16, color: 'grey' }}>Mr. A</Text>
          </View>
          <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, color: 'grey' }}>Type:</Text>
            <Text style={{ fontSize: 16, color: 'grey' }}>Academic</Text>
          </View>
          <View style={{ width: '100%', justifyContent: 'space-around', flexDirection: 'row' }}>
            <View style={styles.infoBox2}>
              <View style={{ width: 15, height: 15, backgroundColor: "white", borderRadius: 50 }} />
              <View style={{ alignItems: 'center', flex: 1 }}>
                <Text style={{ fontSize: 14, color: 'white', paddingHorizontal: 5 }}>VIEW DETAILS</Text>
              </View>
            </View>
            <View style={styles.infoBox2}>
              <View style={{ width: 15, height: 15, backgroundColor: "white", borderRadius: 50 }} />
              <View style={{ alignItems: 'center', flex: 1 }}>
                <Text style={{ fontSize: 14, color: 'white', paddingHorizontal: 5 }}>CANCEL</Text>
              </View>
            </View>
          </View>

        </View>

        <View style={styles.complaintBox}>
          <View style>
            <Text style={{ fontSize: 16, color: 'grey' }}>02 June 2021 10:14 AM</Text>
          </View>
          <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, color: 'grey' }}>Student ID:</Text>
            <Text style={{ fontSize: 16, color: 'grey' }}>K173604</Text>
          </View>
          <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, color: 'grey' }}>Against:</Text>
            <Text style={{ fontSize: 16, color: 'grey' }}>Mr. A</Text>
          </View>
          <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, color: 'grey' }}>Type:</Text>
            <Text style={{ fontSize: 16, color: 'grey' }}>Academic</Text>
          </View>
          <View style={{ width: '100%', justifyContent: 'space-around', flexDirection: 'row' }}>
            <View style={styles.infoBox2}>
              <View style={{ width: 15, height: 15, backgroundColor: "white", borderRadius: 50 }} />
              <View style={{ alignItems: 'center', flex: 1 }}>
                <Text style={{ fontSize: 14, color: 'white', paddingHorizontal: 5 }}>VIEW DETAILS</Text>
              </View>
            </View>
            <View style={styles.infoBox2}>
              <View style={{ width: 15, height: 15, backgroundColor: "white", borderRadius: 50 }} />
              <View style={{ alignItems: 'center', flex: 1 }}>
                <Text style={{ fontSize: 14, color: 'white', paddingHorizontal: 5 }}>CANCEL</Text>
              </View>
            </View>
          </View>

        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoBox: {
    backgroundColor: 'rgba(29, 151, 209, 1)',
    justifyContent: 'center',
    marginTop: 5,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    borderRadius: 10
  },

  complaintBox: {
    width: '100%',
    alignItems: 'center',
    elevation: 1,
    margin: 0,
    borderRadius: 1,
    borderColor: 'grey',
    paddingVertical: 5,
    paddingHorizontal: 10
  },

  infoBox2: {
    backgroundColor: 'rgba(29, 151, 209, 1)',
    justifyContent: 'center',
    marginTop: 5,
    width: '49%',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 10
  },
  attachBox: {
    justifyContent: 'center',
    marginTop: 5,
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },

});

export default OpenComplaints;
