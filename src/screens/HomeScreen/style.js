import { StyleSheet } from "react-native";
import { AppColors, AppStyles } from "../../constants";
import { scaleSize } from "../../utills";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.appFFFFFF,
        justifyContent: AppStyles.FlexAlignType.center,
        paddingHorizontal:scaleSize(20)
    },
    input: {
        borderWidth: scaleSize(1),
        paddingLeft:scaleSize(15),
        borderRadius:scaleSize(8)
    },
    button: {
        height: scaleSize(50),
        borderRadius: scaleSize(45),
        justifyContent: AppStyles.FlexAlignType.center,
        alignItems: AppStyles.FlexAlignType.center,
        marginTop:scaleSize(30)
    },
    buttonTitle: {
        color: AppColors.appFFFFFF
    }
})

export default styles