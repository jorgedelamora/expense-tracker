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

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTabs.Navigator 
      screenOptions={{
      headerStyle:{backgroundColor: GlobalStyles.colors.primary500},
      headerTintColor: 'white',
      tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
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
        <Stack.Navigator>
          <Stack.Screen name='expensesOverview' component={ExpensesOverview} options={{headerShown: false}}/>
          <Stack.Screen name='manageExpense' component={ManageExpense}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
