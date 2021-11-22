/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Image } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { HomeScreen, MenuScreen, PreCreate, Details, Sitting, Create, TimeSlot, failBooking, successfulBooking, Contact } from '../screens';
import { AllReservations } from '../screens/AllReservations';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
    
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
      
      <Stack.Screen name='MenuX'component={MenuScreen} options={ {title: 'Menu',
                      headerTitle: (props) => ( // App Logo
                        <Image
                        style={{width:140, height:40}}
                        source={require('../assets/images/BeanSceneLogo4.png')}/>
                      ),
                      //headerTitleStyle: { flex: 1, textAlign: 'center' },
                    } }/>
      <Stack.Screen name='Login'component={MenuScreen}options={ {title: 'Login',
                      headerTitle: (props) => ( // App Logo
                        <Image
                        style={{width:140, height:40}}
                        source={require('../assets/images/BeanSceneLogo4.png')}/>
                      ),
                      //headerTitleStyle: { flex: 1, textAlign: 'center' },
                    } }/>
      <Stack.Screen name='Booking'component={PreCreate}options={ {title: 'Booking',
                      headerTitle: (props) => ( // App Logo
                        <Image
                        style={{width:140, height:40}}
                        source={require('../assets/images/BeanSceneLogo4.png')}/>
                      ),
                      //headerTitleStyle: { flex: 1, textAlign: 'center' },
                    } }/>
      <Stack.Screen name='ReservationDetails'component={Details}options={ {title: 'Booking Summry',
                      headerTitle: (props) => ( // App Logo
                        <Image
                        style={{width:140, height:40}}
                        source={require('../assets/images/BeanSceneLogo4.png')}/>
                      ),
                      //headerTitleStyle: { flex: 1, textAlign: 'center' },
                    } }/>
      <Stack.Screen name='AllReservation' component={AllReservations}options={ {title: 'List of the Reservations',
                      headerTitle: (props) => ( // App Logo
                        <Image
                        style={{width:140, height:40}}
                        source={require('../assets/images/BeanSceneLogo4.png')}/>
                      ),
                      //headerTitleStyle: { flex: 1, textAlign: 'center' },
                    } }/>
      <Stack.Screen name='Create' component={Create}options={ {title: 'Create New Resrevation',
                      headerTitle: (props) => ( // App Logo
                        <Image
                        style={{width:140, height:40}}
                        source={require('../assets/images/BeanSceneLogo4.png')}/>
                      ),
                      //headerTitleStyle: { flex: 1, textAlign: 'center' },
                    } }/>
      <Stack.Screen name='TimeSlot' component={TimeSlot}options={ {title: 'Time Slot',
                      headerTitle: (props) => ( // App Logo
                        <Image
                        style={{width:140, height:40}}
                        source={require('../assets/images/BeanSceneLogo4.png')}/>
                      ),
                      //headerTitleStyle: { flex: 1, textAlign: 'center' },
                    } }/>
      <Stack.Screen name='Fail' component={failBooking}options={ {title: 'Fail Booking',
                      headerTitle: (props) => ( // App Logo
                        <Image
                        style={{width:140, height:40}}
                        source={require('../assets/images/BeanSceneLogo4.png')}/>
                      ),
                      //headerTitleStyle: { flex: 1, textAlign: 'center' },
                    } }/>
      <Stack.Screen name='Succeed' component={successfulBooking}options={ {title: 'Successful Booking',
                      headerTitle: (props) => ( // App Logo
                        <Image
                        style={{width:140, height:40}}
                        source={require('../assets/images/BeanSceneLogo4.png')}/>
                      ),
                      //headerTitleStyle: { flex: 1, textAlign: 'center' },
                    } }/>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
    <BottomTab.Screen name='Home'component={HomeScreen} 
      options={ {title: 'BeanSceneApp',
                  headerTitle: (props) => ( // App Logo
                    <Image
                    style={{width:140, height:40}}
                    source={require('../assets/images/BeanSceneLogo4.png')}/>
                  ),
                  headerTitleStyle: { flex: 1, textAlign: 'center' },
                  tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color}/>,
                } }/>
      
    <BottomTab.Screen name='Sitting' component={Sitting}
        options={  {title: 'Booking' ,
                      headerTitle: (props) => ( // App Logo
                        <Image
                        style={{width:140, height:40}}
                        source={require('../assets/images/BeanSceneLogo4.png')}/>
                      ),
                      headerTitleStyle: { flex: 1, textAlign: 'center' ,fontWeight: 'bold', color:'#1f1300'},
                      headerStyle:{backgroundColor:'#fff',},
                      headerTintColor: '#1f1300',
                      tabBarIcon: ({ color }) => <MaterialIcons name="dinner-dining" size={35} color={color} />,
                    } } />
    <BottomTab.Screen name='Contact' 
                  component={Contact}  
                    options={{
                      title:'Contact',
                      headerTitle: (props) => ( // App Logo
                        <Image
                        style={{width:140, height:40}}
                        source={require('../assets/images/BeanSceneLogo4.png')}/>
                      ),
                      headerTitleStyle: { flex: 1, textAlign: 'center' },
                      tabBarIcon: ({ color }) => <TabBarIcon name="info" color={color}/>, 
                    }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
