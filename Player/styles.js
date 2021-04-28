import { StyleSheet } from 'react-native';
import variables from '../../../assets/styles/variables';

export const styles = StyleSheet.create({
    player: {
        backgroundColor: variables.whiteColor,
        shadowColor: variables.light2GreyColor,
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 10,
    },
    playerHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderBottomColor: variables.light2GreyColor,
        borderBottomWidth: 2,
    },
    playerFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 18,
        paddingBottom: 21,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    playerInner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    playerVideoWrap: {
        position: 'relative',
        height: (variables.windowWidth - 20) * (9 / 16), // Standard video ratio 16:9, 20 padding
    },
    playerVideo: {
        position: 'relative',
        padding: 0,
        margin: 0,
        height: '100%',
        width: '100%',
    },
    playerSpeed: { position: 'absolute', top: 16, right: 8 },
    speedChooser: {
        flexDirection: 'row',
        padding: 8,
        position: 'relative',
        marginRight: -8,
        marginTop: -8,
        height: 40,
        borderRadius: 10,
        backgroundColor: variables.whiteColor,
        shadowColor: 'rgba(49, 71, 96, 0.4)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 10,
        shadowOpacity: 1,
        elevation: 10,
    },
    speedItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 24,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: variables.light2GreyColor,
        marginLeft: 12,
    },
    speedItemText: {
        fontSize: 16,
        fontFamily: variables.font500,
        color: variables.greyBlueColor,
    },
    picture: {
        width: 72,
        height: 72,
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
    listItem: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingTop: 16,
        paddingBottom: 9,
    },
    listItemText: {
        justifyContent: 'center',
        maxWidth: variables.screenWidth - 250,
    },
    listItemIcon: {
        marginRight: 16,
    },
    listItemTitle: {
        fontSize: 16,
        fontFamily: variables.font500,
        lineHeight: 18,
        color: variables.greyBlueColor,
        width: '100%',
    },
    slider: {
        width: 300,
        opacity: 1,
        height: 50,
        marginTop: 50,
    },
    timeLapsed: {
        textAlign: 'left',
        marginLeft: 15,
        flexDirection: 'row',
        width: 40,
    },
    timeFull: {
        textAlign: 'right',
        marginRight: 15,
        flexDirection: 'row',
        marginTop: -20,
    },
});

export default styles;
