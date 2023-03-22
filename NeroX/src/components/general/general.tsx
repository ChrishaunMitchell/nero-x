import React, {ReactNode, PropsWithChildren} from "react";
import {Dimensions, View, Text} from "react-native"
import { TextInput } from "react-native/Libraries/Components/TextInput/TextInput";



export const Container: React.FC<PropsWithChildren> = ({ }) => {
    return <View className=" bg-sage flex-1 text-center"> </View>;
  };

export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height;

 /**
  * export type ContainerProps = {
    children?: ReactNode; 
  }; 
  */

 