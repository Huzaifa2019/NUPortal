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


const AddNewComplaint = () => {

  return (
    <View flexDirection="column" style={{ alignItems: 'center', width: '100%', height: '100%', }}>
      <View style={{ width: '100%' }}>
        <Appbar.Header theme={{ color: "rgba(55, 155,216,1)" }}>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title="Add New Complaint" />
          <Appbar.Action icon="magnify" onPress={_cancel} />

        </Appbar.Header>
      </View>
      <View style={{ width: '90%', alignItems: 'center' }} >
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 22, color: 'grey' }}>Canteen Complaint</Text>
        </View>

        <View style={{ alignSelf: 'flex-start', width: '100%', marginBottom: 15 }}>
          <Text style={{ fontSize: 19, color: 'black' }}>Your ID</Text>
          <TextInput value="K173604" style={{ paddingBottom: 2, fontSize: 18, color: 'black', width: '100%', borderColor: 'grey', borderBottomWidth: 1 }} />
        </View>

        <View style={{ alignSelf: 'flex-start', width: '100%', marginBottom: 15 }}>
          <Text style={{ fontSize: 19, color: 'black' }}>Against</Text>
          <TextInput value="Canteen Management" style={{ paddingBottom: 2, fontSize: 18, color: 'black', width: '100%', borderColor: 'grey', borderBottomWidth: 1 }} />
        </View>

        <View style={{ alignSelf: 'flex-start', width: '100%', marginBottom: 15 }}>
          <Text style={{ fontSize: 19, color: 'black' }}>Complaint Details</Text>
          <TextInput value="Food Quality is not good."    style={{ paddingBottom: 2, fontSize: 18, color: 'black', width: '100%', borderColor: 'grey', borderBottomWidth: 1 }} />
        </View>

        <View style={{ alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center',width: "100%" }}>
          <View style={styles.attachBox}>
            <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold' }}>Attach File</Text>
          </View>
          <View  style={{flex: 1, alignItems: 'center'}}>
            <Text style={{ fontSize: 14, color: 'grey', fontWeight: 'bold' }}>No File Selected</Text>
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>SUBMIT</Text>
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
  attachBox: {
    backgroundColor: 'rgba(29, 151, 209, 1)',
    justifyContent: 'center',
    marginTop: 5,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10
  },

});

export default AddNewComplaint;
