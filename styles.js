import { StyleSheet } from 'react-native';
import variables from '../../assets/styles/variables';

export const styles = StyleSheet.create({
    content: {
        paddingBottom: 24,
        flex: 1,
        borderRadius: 0,
    },
    player: {
        display: 'flex',
        opacity: 100,
        height: '100%',
    },
    swipeUpDownStyles: {
        zIndex: 1000,
        backgroundColor: 'white',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        padding: 0,
    },
});

export default styles;
