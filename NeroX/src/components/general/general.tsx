import React, {ReactNode, PropsWithChildren} from "react";
import {Dimensions, View, Text} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native/Libraries/Components/TextInput/TextInput";

interface props {
  children: ReactNode;
  bgColor?: string;
}


export const Container = ({children, bgColor = 'bg-white'}: props) => {
  const containerstyle = ['flex', 'item-center', 'justify-center', 'h-screen', bgColor].join(' ')
  return(
    <SafeAreaView>
      <View className={containerstyle}>
        <View className="Container mx-auto px-4">
          {children}
        </View>
      </View>
    </SafeAreaView>
  )
}

export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height;

 /**
  * export type ContainerProps = {
    children?: ReactNode; 
  }; 
  */

 