import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { Appbar } from 'react-native-paper';

const _goBack = () => console.log('Went back');

const _cancel = () => console.log('Cancel Clicked');


const ParticularComplaintDetails = () => {

  return (
    <View flexDirection="column" style={{ alignItems: 'center', width: '100%', height: '100%', }}>
      <View style={{ width: '100%' }}>
        <Appbar.Header theme={{ color: "rgba(55, 155,216,1)" }}>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title="View Complaint" />
          <Appbar.Action icon="magnify" onPress={_cancel} />

        </Appbar.Header>
      </View>
      <View style={styles.heading}>
        <Text style={{ fontSize: 23, color: 'white' }}>Complaint Details</Text>
      </View>
      <View style={{ width: '90%'}} >

      <View style={{ alignSelf: 'flex-start', width: '100%', marginTop: 5 }}>
          <Text style={{ fontSize: 19, color: 'black' }}>Your ID:</Text>
          <Text style={{ fontSize: 19, color: 'grey' }}>K173604</Text>
        </View>

        <View style={{ alignSelf: 'flex-start', width: '100%', marginTop: 5 }}>
          <Text style={{ fontSize: 19, color: 'black' }}>Against ID:</Text>
          <Text style={{ fontSize: 19, color: 'grey' }}>Sir A</Text>
        </View>

        <View style={{ alignSelf: 'flex-start', width: '100%', marginTop: 5 }}>
          <Text style={{ fontSize: 19, color: 'black' }}>Type:</Text>
          <Text style={{ fontSize: 19, color: 'grey' }}>Academic</Text>
        </View>

        <View style={{ alignSelf: 'flex-start', width: '100%', marginTop: 5 }}>
          <Text style={{ fontSize: 19, color: 'black' }}>Description:</Text>
          <Text style={{ fontSize: 19, color: 'grey' }}>Assignments not checked.</Text>
        </View>

     
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 10,
    width: '100%',
    paddingVertical: 3,
    alignItems: 'center',
    backgroundColor: 'rgba(29, 151, 209, 1)'
  }
});

export default ParticularComplaintDetails;
