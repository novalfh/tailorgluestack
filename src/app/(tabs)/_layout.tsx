import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';


export default function TabsLayout () {
    return (
        <Tabs screenOptions={{headerShown:false}}>
            <Tabs.Screen name="index" options={{tabBarLabel:'home', tabBarShowLabel:false, tabBarIcon:({focused, color, size}) => {
                return <AntDesign name="aim" size={size} color={color} />
            }}}/>
            <Tabs.Screen name='profile' options={{tabBarShowLabel:false}}/>
        </Tabs>
    )
}