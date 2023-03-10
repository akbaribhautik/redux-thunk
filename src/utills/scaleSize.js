import { Dimensions, PixelRatio, Platform } from "react-native";

const IOSBaseWidth = 375;
const androidBaseWidth = 375;
const {width:DEVICE_WIDTH} = Dimensions.get('window');

export const scaleSize = (size)=>{
    let baseWidth = IOSBaseWidth;
    if(Platform.OS == 'android'){
        baseWidth = androidBaseWidth
    }

    const deviceWidth = DEVICE_WIDTH;
    const multiplier = deviceWidth /baseWidth
   
     return size*multiplier;
};

export const scaleFont = (size) =>{
    return(
        (1/PixelRatio.getFontScale())*
        scaleSize(size)*
        Math.max(0.9, PixelRatio.getFontScale())
    )
};

