import {StyleSheet} from 'react-native'
import { AppColors, AppStyles } from '../../constants'
import { scaleSize } from '../../utills'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:AppColors.appFFFFFF
    },
    fontStyle:{
        flex:1
    },
    listView:{
        flexDirection:AppStyles.FlexDirection.row,
        paddingLeft:scaleSize(20)
    },
    fontStyleTitle:{
        flex:1,
        fontSize:scaleSize(20),
        fontWeight:'bold'
    },
    backImage:{
        width:scaleSize(20),
        height:scaleSize(20),
        margin:20
    },
    emptyText:{
        marginTop:'50%',
        textAlign:AppStyles.TextAlign.center
    }
})

export default styles