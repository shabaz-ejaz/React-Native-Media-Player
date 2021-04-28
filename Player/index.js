import PropTypes from 'prop-types';
import React from 'react';
import { Image, Pressable, Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import VideoPlayer from 'react-native-video';
import Slider from '@react-native-community/slider';
import { uniqueId } from 'underscore';
import { styles } from './styles';
import {
    IconArrowTop,
    IconArrowDown,
    IconList,
    IconNext,
    IconPause,
    IconPlay2,
    IconPlayNext,
    IconPlayPrev,
    IconPrev,
    IconRemoveFromList,
} from '../../../components/IconSet';
import common from '../../../assets/styles/common';
import variables from '../../../assets/styles/variables';
import loadingImage from '../images/loading.gif';


const Player = React.forwardRef((props, ref) => {

    // eslint-disable-next-line no-bitwise
    const secondsToTime = (time) => `${~~(time / 60)}:${time % 60 < 10 ? '0' : ''}${time % 60}`;

    // Return JSX
    return props.visible ? (
        <View style={[styles.player, props.style]}>
            <View style={styles.playerHeader}>
                <Pressable style={styles.row} onPress={props.onToggle}>
                    <View style={{ marginRight: 14 }}>
                        <IconArrowDown />
                    </View>
                    <Text style={common.h3}>Now playing</Text>
                </Pressable>
                <View style={styles.row}>
                    <Button
                        compact
                        style={{ width: 24, marginLeft: 16 }}
                        onPress={props.onRemoveFromList}
                        icon={() => <IconRemoveFromList />} />
                    <Button
                        compact
                        style={{ width: 24, marginLeft: 16 }}
                        onPress={props.onList}
                        icon={() => <IconList />} />
                </View>
            </View>

            <View style={{ padding: 10 }}>
                <View style={styles.listItem}>
                    <View style={styles.listItemIcon}>
                        <Image
                            source={{
                                uri:
                                    'https://api.monosnap.com/file/download?id=RopoUOY1libtJHqJzObWLfOj91Jtn8',
                            }}
                            style={styles.picture} />
                    </View>
                    <View style={styles.listItemText}>
                        <Text style={styles.listItemTitle}>{props.videoTitle}</Text>
                        <View style={{ marginTop: 8 }}>
                            <Text style={common.text3}>Video</Text>
                            <Text style={common.text3}>{secondsToTime(Math.floor(props.videoProgress))} of {secondsToTime(Math.floor(props.videoDuration))}</Text>
                        </View>
                    </View>
                    {!props.disableVideoSpeedOption ?
                        <Pressable compact style={styles.playerSpeed} onPress={props.onList}>
                            {!props.speedVisibility && (<Pressable
                                style={[
                                    styles.speedItem,
                                    {
                                        backgroundColor: variables.lightGreyColor,
                                        borderWidth: 0,
                                    },
                                ]}
                                onPress={() => props.setSpeedVisibility(true)}>
                                <Text
                                    style={[
                                        styles.speedItemText,
                                        { color: variables.whiteColor },
                                    ]}>
                                    {props.speedValue}x
                                </Text>
                            </Pressable>)}

                            {props.speedVisibility && (
                                <View style={styles.speedChooser}>
                                    {props.videoSpeedOptions.map((item, idx) => (
                                        <Pressable
                                            key={uniqueId}
                                            style={[
                                                styles.speedItem,
                                                {
                                                    marginLeft: idx === 0 ? 0 : 12,
                                                    backgroundColor:
                                                        props.speedValue === item
                                                            ? variables.light2GreyColor
                                                            : variables.whiteColor,
                                                },
                                            ]}
                                            onPress={() => props.handleSpeedPress(item)}>
                                            <Text style={styles.speedItemText}>
                                                {item}x
                                            </Text>
                                        </Pressable>
                                    ))}
                                </View>
                            )}
                        </Pressable>

                        : null}

                </View>

                <View style={styles.playerVideoWrap}>
                    <VideoPlayer
                        source={{ uri: props.uri }} // Can be a URL or a local file.
                        poster={Image.resolveAssetSource(loadingImage).uri}
                        posterResizeMode="stretch"
                        ref={ref}
                        paused={props.videoPaused}
                        rate={props.speedValue}
                        onLoad={props.onLoad}
                        onProgress={props.onProgress}
                        onEnd={props.onEnd}
                        playInBackground
                        playWhenInactive
                        muted={false}
                        ignoreSilentSwitch="ignore"
                        useTextureView={false}
                        resizeMode="contain"
                        style={styles.playerVideo} />
                </View>

                <View>
                    <Slider
                        style={{ width: '100%', height: 20 }}
                        minimumValue={0}
                        step={0.1}
                        thumbTintColor={variables.greenColor}
                        value={props.videoProgress}
                        maximumValue={props.videoDuration}
                        onValueChange={(value) => props.onProgress(value, true)}
                        minimumTrackTintColor={variables.greenColor}
                        maximumTrackTintColor="#000000" />

                    <Text style={[styles.timeLapsed, { color: props.textColour }]}>
                        {secondsToTime(Math.floor(props.videoProgress))}
                    </Text>

                    <Text style={[styles.timeFull, { color: props.textColour }]}>
                        {secondsToTime(Math.floor(props.videoDuration))}
                    </Text>

                </View>


                <View style={styles.playerFooter}>

                    <View style={styles.row}>
                        <Button
                            compact
                            style={{ width: 24, marginRight: 16 }}
                            onPress={() => props.onPlayPrevNext('prev')}
                            icon={() => <IconPlayPrev />} />
                    </View>
                    <View style={styles.row}>

                        {!props.disableVideoSkipButtons ?
                            <View style={styles.rewindBtnWrap}>
                                <Text style={[styles.text, styles.rewindBtnText]}>
                                    {props.videoSkipValue}
                                </Text>
                                <Button
                                    compact
                                    style={{ width: 24 }}
                                    onPress={() => props.handleSkipBackwards()}
                                    icon={() => <IconPrev />} />
                            </View>
                            : null}


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

                        {!props.disableVideoSkipButtons ?
                            <View style={styles.rewindBtnWrap}>
                                <Text style={[styles.text, styles.rewindBtnText]}>
                                    {props.videoSkipValue}
                                </Text>
                                <Button
                                    compact
                                    style={{ width: 24 }}
                                    onPress={() => props.handleSkipForward()}
                                    icon={() => <IconNext />} />
                            </View> : null}
                    </View>
                    <View style={styles.row}>
                        <Button
                            compact
                            style={{ width: 24, marginLeft: 16 }}
                            onPress={() => props.onPlayPrevNext('next')}
                            icon={() => <IconPlayNext />} />
                    </View>
                </View>
            </View>
        </View>
    ) : (
        <View />
    );
});

Player.propTypes = {
    ref: PropTypes.string,
    uri: PropTypes.string,
    videoTitle: PropTypes.string,
    onList: PropTypes.any,
    onPlayPrevNext: PropTypes.any,
    onRemoveFromList: PropTypes.any,
    onRewind: PropTypes.func,
    onToggle: PropTypes.any,
    paused: PropTypes.bool,
    rate: PropTypes.number,
    onLoad: PropTypes.func,
    onProgress: PropTypes.func,
    onEnd: PropTypes.func,
    videoSkipValue: PropTypes.number,
    disableVideoSkipButtons: PropTypes.bool,
    disableVideoSpeedOption: PropTypes.bool,
    visible: PropTypes.any,
    videoSpeedOptions: PropTypes.array,
    speedVisibility: PropTypes.bool,
    setSpeedVisibility: PropTypes.func,
    handleSpeedPress: PropTypes.func,
    handleSkipBackwards: PropTypes.func,
    handleSkipForward: PropTypes.func,
    pauseVideo: PropTypes.func,
    speedValue: PropTypes.number,
    videoPaused: PropTypes.bool,
    videoProgress: PropTypes.any,
    videoDuration: PropTypes.number,
    textColour: PropTypes.string,
};

export default Player;
