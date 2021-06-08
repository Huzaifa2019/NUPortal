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


const ComplaintOpenCloseDetails = () => {

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
        <Text style={{ fontSize: 23, color: 'white' }}>Complaint Open Details</Text>
      </View>
      <View style={styles.heading2}>
        <Text style={{ fontSize: 23, color: 'white' }}>Details</Text>
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
          <Text style={{ fontSize: 19, color: 'grey' }}>Strict Deadline for Assignments.</Text>
        </View>

     
      </View>
    
      <View style={styles.heading}>
        <Text style={{ fontSize: 23, color: 'white' }}>Complaint Closed Details</Text>
      </View>
      <View style={styles.heading2}>
        <Text style={{ fontSize: 23, color: 'white' }}>Comments</Text>
      </View>
      
      <View style={{ width: '90%'}} >
      <View style={{ alignSelf: 'flex-start', width: '100%', marginTop: 5 }}>
          <Text style={{ fontSize: 19, color: 'black' }}>Closed</Text>
        </View>

      </View>
      <View style={{  width: '100%', marginTop: 1, borderBottomWidth: 1,borderBottomColor: 'grey' }}>
        </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 10,
    width: '100%',
    paddingVertical: 3,
    paddingHorizontal: '5%',
    alignItems: 'center',
    backgroundColor: 'rgba(24, 99, 148, 1)'
  },
  heading2: {
    marginTop: 5,
    width: '100%',
    paddingVertical: 3,
    paddingHorizontal: '5%',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(29, 151, 209, 1)'
  }
});

export default ComplaintOpenCloseDetails;
