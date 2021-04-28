import { StyleSheet } from 'react-native';
import variables from '../../../assets/styles/variables';

export const styles = StyleSheet.create({
    window: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 8,
    },
    track: {
        position: 'relative',
        flexGrow: 1,
        marginHorizontal: 8,
        height: 4,
        backgroundColor: 'rgba(255,255,255,0.4)',
    },
    trackProgress: {
        height: 4,
        width: 100,
        position: 'absolute',
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        backgroundColor: variables.whiteColor,
    },
});

export default styles;
