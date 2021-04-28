import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Button } from 'react-native-paper';

import { styles } from './styles';
import {
    IconArrowTop,
    IconAddToList,
    IconPlay2,
    IconPrev,
    IconNext,
    IconCross,
    IconList, IconPause,
} from '../../../components/IconSet';

const PlayerPreview = ({
    visible,
    rewindValue = 10,
    onToggle,
    onRewind,
    onPlayStop,
    onAddToList,
    onList,
    handleSkipBackwards,
    handleSkipForward,
    disableVideoSkipButtons,
    videoSkipValue,
    onClose,
    ...props
}) => (
    <View style={styles.player}>
        <View style={styles.playerInner}>
            <View style={styles.row}>
                <View style={styles.upIcon}>
                    <IconArrowTop />
                </View>

                {/* TODO: make preview dependent on media */}
                <Image
                    source={{
                        uri: 'https://api.monosnap.com/file/download?id=RopoUOY1libtJHqJzObWLfOj91Jtn8',
                    }}
                    style={styles.picture} />
            </View>


            <View style={[styles.row, { marginLeft: 20 }]}>
                {!disableVideoSkipButtons ?
                    <View style={styles.rewindBtnWrap}>
                        <Text style={[styles.text, styles.rewindBtnText]}>
                            {videoSkipValue}
                        </Text>
                        <Button
                            compact
                            style={{ width: 24 }}
                            onPress={() => handleSkipBackwards()}
                            icon={() => <IconPrev />} />
                    </View>
                    : null }

                {props.videoPaused ?
                    <Button
                        compact
                        style={{ width: 40 }}
                        onPress={() => props.pauseVideo(false)}
                        icon={() => <IconPlay2 />} />
                    :
                    <Button
                        compact
                        style={{ width: 40 }}
                        onPress={() => props.pauseVideo(true)}
                        icon={() => <IconPause />} />
                }


                {!disableVideoSkipButtons ?
                    <View style={styles.rewindBtnWrap}>
                        <Text style={[styles.text, styles.rewindBtnText]}>
                            {videoSkipValue}
                        </Text>
                        <Button
                            compact
                            style={{ width: 24 }}
                            onPress={() => handleSkipForward()}
                            icon={() => <IconNext />} />
                    </View> : null }


            </View>
            <View style={styles.row}>
                <Button
                    compact
                    contentStyle={{ padding: 8, maxWidth: 50 }}
                    onPress={onClose}
                    icon={() => <IconCross />} />

                <Button
                    compact
                    contentStyle={{ padding: 8, maxWidth: 50 }}
                    onPress={onList}
                    icon={() => <IconList />} />
            </View>
        </View>
    </View>
);

PlayerPreview.propTypes = {
    onAddToList: PropTypes.any,
    onList: PropTypes.any,
    onPlayStop: PropTypes.any,
    onRewind: PropTypes.func,
    onToggle: PropTypes.any,
    rewindValue: PropTypes.number,
    visible: PropTypes.any,
    videoPaused: PropTypes.bool,
    disableVideoSkipButtons: PropTypes.bool,
    pauseVideo: PropTypes.func,
    handleSkipBackwards: PropTypes.func,
    handleSkipForward: PropTypes.func,
    videoSkipValue: PropTypes.number,
    onClose: PropTypes.func,
};

export default PlayerPreview;
