import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Appbar } from 'react-native-paper';

const _goBack = () => console.log('Went back');


const AddComplaint = () => {

  return (
    <View flexDirection="column" style={{ alignItems: 'center', width: '100%', height: '100%', }}>
      <View style={{ width: '100%' }}>
        <Appbar.Header theme={{ color: "rgba(55, 155,216,1)" }}>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title="Add Complaint" />

        </Appbar.Header>
      </View>

      <View style={styles.infoBox}>
        <View style={{ alignSelf: 'flex-start' }}>
          <Text style={{ fontSize: 20, color: 'white' }}>Open Complaints</Text>
        </View>
        <View style={styles.complaintBox}>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: 'white' }}>2</Text>
          <View style={styles.imageBox}>
            {/* <Image
              // source={require('../assets/loading.png')}
            />  */}
          </View>
        </View>
      </View>

      <View style={styles.infoBox2}>
        <View style={{ alignSelf: 'flex-start' }}>
          <Text style={{ fontSize: 20, color: 'white' }}>Closed Complaints</Text>
        </View>
        <View style={styles.complaintBox}>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: 'white' }}>2</Text>
          <View style={styles.imageBox}>
          </View>
        </View>
      </View>

      <View style={{ bottom: 15, right: 20, position: 'absolute' }}>
        <View style={styles.floatBoxIcon}>
          <Text style={{ fontSize: 22, color: "white" }}>+</Text>
        </View>
        <View style={styles.floatBoxIcon}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: "white" }}>X</Text>
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  infoBox: {
    backgroundColor: 'rgba(29, 151, 209, 1)',
    width: '90%',
    minHeight: 110,
    justifyContent: 'space-around',
    paddingRight: 30,
    marginTop: 15,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'stretch',
    borderRadius: 15
  },
  infoBox2: {
    backgroundColor: 'rgba(24, 99, 148, 1)',
    width: '90%',
    minHeight: 110,
    marginTop: 15,
    justifyContent: 'space-around',
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'stretch',
    borderRadius: 15
  },
  complaintBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  imageBox: {
    backgroundColor: 'rgba(255,255,255,1)',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  floatBoxIcon: {
    backgroundColor: 'rgba(29, 151, 209, 1)',
    width: 50,
    height: 50,
    marginBottom: 10,
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

export default AddComplaint;
