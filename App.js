import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import {Ionicons} from '@expo/vector-icons'
import IconButton from './components/IconButton';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator 
      screenOptions={({navigation}) => ({
      headerStyle:{backgroundColor: GlobalStyles.colors.primary500},
      headerTintColor: 'white',
      tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({tintColor}) => (
        <IconButton 
          ioniconsName="add" 
          size={24} 
          color={tintColor} 
          onPress={() => navigation.navigate('manageExpense')}
        />
      )})}
    >
        <BottomTabs.Screen 
          name='recentExpenses' 
          component={RecentExpenses} 
          options={{
            title: 'Recent Expenses',
            tabBarLabel: 'Recent',
            tabBarIcon: ({color, size}) => <Ionicons name='hourglass' color={color} size={size} />
          }}
        />
        <BottomTabs.Screen 
          name='allExpenses' 
          component={AllExpenses} 
          options={{
            title: 'All Expenses',
            tabBarLabel: 'All',
            tabBarIcon: ({color, size}) => <Ionicons name='calendar' color={color} size={size} />
          }}
        />
    </BottomTabs.Navigator>
  )
}



export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
          headerTintColor: 'white',
        }}>
          <Stack.Screen name='expensesOverview' component={ExpensesOverview} options={{headerShown: false}}/>
          <Stack.Screen name='manageExpense' component={ManageExpense}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
