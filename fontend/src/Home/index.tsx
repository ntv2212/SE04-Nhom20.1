import * as React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerContent,{DRAWER_WIDTH} from "./Drawer"
import HomePage from "./HomePage"
import Favorite from "./Favorite"
import TransactionHistory from "./TransactionHistory"
import { HomeRoutes } from "../components/Navigation";
import EditProfile from "../Home/EditProfile"
import Settings from "./Settings";

export {assets } from "./Drawer"

const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigator = () => (
  <Drawer.Navigator drawerContent={()=> <DrawerContent/>} drawerStyle={{
    width : DRAWER_WIDTH
  }} >
    <Drawer.Screen name="HomePage" component={HomePage} />
    <Drawer.Screen name="Favorite" component={Favorite} />
    <Drawer.Screen name="TransactionHistory" component={TransactionHistory}/>
    <Drawer.Screen name="EditProfile" component={EditProfile}/>
    <Drawer.Screen name="Settings" component={Settings}/>
  </Drawer.Navigator>
);