import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Appbar } from 'react-native-paper';

const _goBack = () => console.log('Went back');


const SelectComplaint = () => {

  return (
    <View flexDirection="column" style={{ alignItems: 'center', width: '100%', height: '100%', }}>
      <View style={{ width: '100%' }}>
        <Appbar.Header theme={{ color: "rgba(55, 155,216,1)" }}>
          <Appbar.BackAction onPress={_goBack} />
          <Appbar.Content title="Select Complaint" />

        </Appbar.Header>
      </View>

      <View style={styles.infoBox}>
        <View style={styles.SelectComplaintBox}>
          <View style={styles.SelectComplaintImageBox}>
            {/* <Image
              // source={require('../assets/loading.png')}
            />  */}
          </View>
          <Text style={{ fontSize: 21, color: 'white' }}>Ragging</Text>
          <View style={{ flex: 1 }}></View>
          <Text style={{ fontSize: 35, fontWeight: "bold", color: 'white' }}>{'>'}</Text>
        </View>
      </View>
      
      <View style={styles.infoBox}>
        <View style={styles.SelectComplaintBox}>
          <View style={styles.SelectComplaintImageBox}>
            {/* <Image
              // source={require('../assets/loading.png')}
            />  */}
          </View>
          <Text style={{ fontSize: 21, color: 'white' }}>Harrassment</Text>
          <View style={{ flex: 1 }}></View>
          <Text style={{ fontSize: 35, fontWeight: "bold", color: 'white' }}>{'>'}</Text>
        </View>
      </View>
      
      <View style={styles.infoBox}>
        <View style={styles.SelectComplaintBox}>
          <View style={styles.SelectComplaintImageBox}>
            {/* <Image
              // source={require('../assets/loading.png')}
            />  */}
          </View>
          <Text style={{ fontSize: 21, color: 'white' }}>Academic</Text>
          <View style={{ flex: 1 }}></View>
          <Text style={{ fontSize: 35, fontWeight: "bold", color: 'white' }}>{'>'}</Text>
        </View>
      </View>
      
      <View style={styles.infoBox}>
        <View style={styles.SelectComplaintBox}>
          <View style={styles.SelectComplaintImageBox}>
            {/* <Image
              // source={require('../assets/loading.png')}
            />  */}
          </View>
          <Text style={{ fontSize: 21, color: 'white' }}>Canteen</Text>
          <View style={{ flex: 1 }}></View>
          <Text style={{ fontSize: 35, fontWeight: "bold", color: 'white' }}>{'>'}</Text>
        </View>
      </View>

      <View style={styles.infoBox}>
        <View style={styles.SelectComplaintBox}>
          <View style={styles.SelectComplaintImageBox}>
            {/* <Image
              // source={require('../assets/loading.png')}
            />  */}
          </View>
          <Text style={{ fontSize: 21, color: 'white' }}>General</Text>
          <View style={{ flex: 1 }}></View>
          <Text style={{ fontSize: 35, fontWeight: "bold", color: 'white' }}>{'>'}</Text>
        </View>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  infoBox: {
    backgroundColor: 'rgba(29, 151, 209, 1)',
    width: '85%',
    minHeight: 75,
    justifyContent: 'space-around',
    marginTop: 20,
    paddingRight: 25,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'stretch',
    borderRadius: 15
  },
  SelectComplaintBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  SelectComplaintImageBox: {
    backgroundColor: 'rgba(255,255,255,1)',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginRight: 15
  },
  
});

export default SelectComplaint;
