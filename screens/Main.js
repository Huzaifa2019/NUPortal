import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Appbar } from 'react-native-paper';

const _handleMore = () => console.log('Shown more');


const Main = () => {

  return (
    <View style={{ backgroundColor: 'rgba(210, 210, 210, 0.18)', }}>
      <View>
        <Appbar.Header theme={{ color: "rgba(55, 155,216,1)" }}>
          <Appbar.Content title="Student Portal" />
          <Appbar.Action icon="dots-vertical" onPress={_handleMore} />

        </Appbar.Header>
      </View>
      <View style={styles.infoBox}>
        <View>
          <Text style={{ fontSize: 18, }}>Huzaifa Hassan Kaka</Text>
          <Text style={{ fontSize: 14, paddingBottom: 5 }}>k173604@nu.edu.pk</Text>
        </View>
        <View style={styles.imageBox}>
          <Text style={{ fontSize: 27, color: "white" }}>K</Text>
        </View>
      </View>
      <View style={styles.grid}>
        <View style={{ flexDirection: "row", width: '100%', justifyContent: 'center', }}>
          <View style={styles.gridBox}>
            <View style={styles.imageBox2}>
            </View>
            <View>
              <Text style={{ fontSize: 14, paddingTop: 5 }}>Complaints</Text>
            </View>
          </View>
          <View style={styles.gridBox}>
            <View style={styles.imageBox2}>
            </View>
            <View>
              <Text style={{ fontSize: 14, paddingTop: 5 }}>Applications</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", width: '100%', justifyContent: 'center', }}>
          <View style={styles.gridBox}>
            <View style={styles.imageBox2}>
            </View>
            <View>
              <Text style={{ fontSize: 14, paddingTop: 5 }}>Library</Text>
            </View>
          </View>
          <View style={styles.gridBox}>
            <View style={styles.imageBox2}>
            </View>
            <View>
              <Text style={{ fontSize: 14, paddingTop: 5 }}>Announcements</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", width: '100%', justifyContent: 'center', }}>
          <View style={styles.gridBox}>
            <View style={styles.imageBox2}>
            </View>
            <View>
              <Text style={{ fontSize: 14, paddingTop: 5 }}>Suggestions</Text>
            </View>
          </View>
          <View style={styles.gridBox}>
            <View style={styles.imageBox2}>
            </View>
            <View>
              <Text style={{ fontSize: 14, paddingTop: 5 }}>Academic</Text>
            </View>
          </View>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  infoBox: {
    backgroundColor: 'rgba(233, 233, 233, 1)',
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
    alignItems: 'center'
  },
  imageBox: {
    backgroundColor: 'rgba(127, 88, 186, 1)',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  grid: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    height: '76%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridBox: {
    paddingTop: 10,
    paddingBottom: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "rgba(138, 138, 138, 0.5)",
    color: 'rgba(255, 255, 255, 0)',
    height: 118,
    width: '40%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  },
  imageBox2: {
    backgroundColor: 'rgba(29, 151, 209, 1)',
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
});

export default Main;
