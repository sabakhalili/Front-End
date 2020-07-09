import * as React from 'react';
import {View,StyleSheet,TouchableHighlight} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Text,
  Drawer,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import * as  Animatable from 'react-native-animatable';


function Sidebar({...props}) {
  return (
    <DrawerContentScrollView {...props}>
     <View style={styles.drawerContent}>
     <View style={styles.logocontent}>
        <Animatable.Image 
            source={require('../assets/JVRLogo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>
              <View style={styles.userInfoSection}>
                <View style={{flexDirection:'row',marginTop: 15}}>
                  <Avatar.Image 
                  source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                  }}
                  size={50}
                  />
                  <View style={{marginLeft:15, flexDirection:'column'}}>
                  <Title style={styles.title}>John Doe</Title>
                    <Caption style={styles.caption}>@j_doe</Caption>
                     <Caption style={styles.caption}>8826637320</Caption>
                  </View>
                </View>
              </View>
    </View>
    <View style={{marginTop:15,marginBottom:20}}>
            
          </View>
          <View style={{marginTop:15,marginBottom:20}} >
          <Text>
            Profile Completion
          </Text>
          </View>
    <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  logocontent: {
      alignItems:'center'
  },
  logo: {
    width: 50,
    height: 50,
  },
  signIn: {
    width: '50%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 70,
    marginTop:20
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
})
export default Sidebar;