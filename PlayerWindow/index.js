import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { IconFullscreen, IconPlay } from '../../IconSet';
import { styles } from './styles';
import common from '../../../assets/styles/common';
import variables from '../../../assets/styles/variables';

const PlayerWindow = ({ ...props }) => (
    <View style={{ position: 'relative' }}>
        {/* TODO: make picture dependent on media */}
        <Image
            style={common.q_picture}
            source={{
                uri: 'https://api.monosnap.com/file/download?id=RopoUOY1libtJHqJzObWLfOj91Jtn8',
            }} />
        <View style={styles.window}>
            <Pressable
                style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.5 : 1,
                    },
                ]}
                onPress={() => console.log('pressed')}>
                <IconPlay f={variables.whiteColor} />
            </Pressable>
            <View style={styles.track}>
                <View style={styles.trackProgress} />
            </View>
            <Pressable
                style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.5 : 1,
                    },
                ]}
                onPress={() => console.log('pressed')}>
                <IconFullscreen f={variables.whiteColor} />
            </Pressable>
        </View>
    </View>
);

export default PlayerWindow;
