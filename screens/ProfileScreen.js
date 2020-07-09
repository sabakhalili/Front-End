import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EditProfile from './Drawer/EditProfile';
import DashBoard from './Drawer/DashBoard';
import SavedJobs from './Drawer/SavedJobs';
import Performancepage from './Drawer/Performancepage'
import Sidebar from './DrawerContent';
import Tests from './Drawer/Testsfoder/Tests';
import Messages from './Drawer/Messagefile/Messages';
import AppliedJobs from './Drawer/AppliedJobs';


const mDrawer = createDrawerNavigator();




export default function ProfileScreen(){
  return (
    
    <mDrawer.Navigator drawerContent={props=><Sidebar {...props}/>} >
      
      <mDrawer.Screen name="Dashboard" component={DashBoard} 
      options={{
        drawerIcon:({focused,color,size})=>(
        <Icon name="monitor-dashboard" style={{fontSize:size,color:color}}
        />
        ),
      }}/>
       <mDrawer.Screen name="EditProfile" component={EditProfile} 
      options={{
        drawerIcon:({focused,color,size})=>(
        <Icon name="pencil-outline" style={{fontSize:size,color:color}}
        />
        ),
      }}/>
       <mDrawer.Screen name="Performance Page" component={Performancepage} 
      options={{
        drawerIcon:({focused,color,size})=>(
        <Icon name="chart-line" style={{fontSize:size,color:color}}
        />
        ),
      }}/>
      <mDrawer.Screen name="Tests" component={Tests} 
      options={{
        drawerIcon:({focused,color,size})=>(
        <Icon name="clipboard-account" style={{fontSize:size,color:color}}
        />
        ),
      }}/>
      <mDrawer.Screen name="Messages" component={Messages} 
      options={{
        drawerIcon:({focused,color,size})=>(
        <Icon name="android-messages" style={{fontSize:size,color:color}}
        />
        ),
      }}/>
      <mDrawer.Screen name="Applied Jobs" component={AppliedJobs} 
      options={{
        drawerIcon:({focused,color,size})=>(
        <Icon name="briefcase" style={{fontSize:size,color:color}}
        />
        ),
      }}/>
      <mDrawer.Screen name="Saved Jobs" component={SavedJobs} 
      options={{
        drawerIcon:({focused,color,size})=>(
        <Icon name="content-save" style={{fontSize:size,color:color}}
        />
        ),
      }}/>
    </mDrawer.Navigator>
    
  );
}


