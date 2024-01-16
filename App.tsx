import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import PasswordGenerator from './components/PasswordGenerator';
// import FlatCards from './components/FlatCards';
// import ElevatedCards from './components/ElevatedCards';
// import FancyCards from './components/FancyCards';
// import ActionCards from './components/ActionCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* <FlatCards />
          <ElevatedCards />
          <FancyCards />
          <ActionCards /> */}
          <PasswordGenerator />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
