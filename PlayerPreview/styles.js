import { StyleSheet } from 'react-native';
import variables from '../../../assets/styles/variables';

export const styles = StyleSheet.create({
    player: {
        width: '100%',
        height: 66,
        shadowColor: variables.light2GreyColor,
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        zIndex: 20,
        elevation: 10,
        justifyContent: 'center',
    },
    row: { flexDirection: 'row', alignItems: 'center' },
    playerInner: {
        zIndex: 1000,
        width: '100%',
        padding: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    picture: {
        width: 40,
        height: 40,
    },
    text: {
        fontSize: 12,
        fontFamily: variables.font300,
        color: variables.greyBlueColor,
    },
    rewindBtn: {
        width: 25,
    },
    rewindBtnWrap: {
        position: 'relative',
        marginHorizontal: 16,
    },
    rewindBtnText: {
        position: 'absolute',
        top: '25%',
        left: 0,
        right: 0,
        bottom: 0,
        textAlign: 'center',
    },
    upIcon: {
        marginRight: 5,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
