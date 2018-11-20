import * as React from 'react';
import { View, Button } from 'react-native';
import { createDrawerNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

class TabOne extends React.Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Open Drawer"
        />
      </View>
    );
  }
}

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />

        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Open Drawer"
        />

      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
    );
  }
}

const BottomNavigator = createBottomTabNavigator(
  {
    HomeTab: TabOne,
    SettingsTab: TabOne,
    DetailsTab: TabOne,
  }
);

const MyApp = createDrawerNavigator({
  BottomNavigator: {
    screen: BottomNavigator,
  },
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

export default createAppContainer(MyApp);