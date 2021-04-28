import React, { useState, useRef, useEffect } from 'react';
import { View } from 'react-native';
import { useHistory } from 'react-router-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import Hint from '../dataDisplay/Hint';

import PlayerPreview from '../MediaPlayerComponent/PlayerPreview';
import Player from '../MediaPlayerComponent/Player';
import { styles } from './styles';
import { togglePlayerOpen, togglePlayerMinimised, togglePlayerQueueOpen } from '../../core/media/mediaActions';
import SwipeUpDown from '../../components/react-native-swipe-up-down';

const MediaPlayerComponent = ({
    uri,
    videoTitle,
    videoSkipValue = 10,
    disableVideoSkipButtons = false,
    disableVideoSpeedOption = false,
    videoSpeedOptions = [1.0, 1.5, 2.0, 2.5],
    textColour = '#314760',
    minimised = false,
}) => {
    // Router stuff
    const history = useHistory();
    const dispatch = useDispatch();

    const { playerOpen, playerMinimised } = useSelector(state => state.media);
    // Assign state
    const [hintVisible, setHintVisible] = useState(false);
    // Assign state
    const [speedVisibility, setSpeedVisibility] = useState(false);
    const [speedValue, setSpeedValue] = useState(1.0);
    const [videoPaused, setVideoPaused] = useState(true);
    const [videoProgress, setVideoProgress] = useState(0);
    const [videoDuration, setVideoDuration] = useState(0);
    const videoRef = useRef();

    const [updated, setUpdated] = useState(false);

    // Define utility functions
    const handleSpeedPress = (speed) => {
        setSpeedValue(speed);
        setSpeedVisibility(false);
    };

    const handleProgress = (progress, updatedWithSlider = false) => {
        if (updatedWithSlider) {
            const progressValue = Math.round(progress * 100) / 100;
            setVideoProgress(progressValue);
            videoRef.current.seek(progressValue, 0.5);
        } else {
            const progressUpdated = progress.currentTime;
            setVideoProgress(progressUpdated);
        }
    };

    const handleLoad = (meta) => {
        setVideoDuration(meta.duration);
    };

    const pauseVideo = (status) => {
        setVideoPaused(status);
    };

    const handleSkipForward = () => {
        let nextTime = videoProgress + videoSkipValue;
        let nextProgress = videoProgress + videoSkipValue;

        if (nextTime >= videoDuration) {
            nextTime = videoDuration;
            nextProgress = videoDuration;
        }

        setVideoProgress(nextProgress);
        videoRef.current.seek(nextTime, 0.5);
        return true;
    };

    const handleSkipBackwards = () => {
        let nextTime = videoProgress - videoSkipValue;
        let nextProgress = videoProgress - videoSkipValue;

        if (nextTime < 0) {
            nextTime = 0;
            nextProgress = 0;
        }
        videoRef.current.seek(nextTime, 2);
        setVideoProgress(nextProgress);
        return true;
    };

    const handleEnd = () => {
        setVideoPaused(true);
        setVideoProgress(0);
    };

    const handleShowQueue = () => {
        dispatch(togglePlayerQueueOpen(true));
        history.push('/media/queue');
    };

    const handlePlayerPreviewClose = (e) => {
        e.stopPropagation();
        setVideoPaused(true);
        dispatch(togglePlayerOpen(false));
        dispatch(togglePlayerMinimised(false));
    };

    // Return JSX
    return (
        <SwipeUpDown
            minimised={minimised}
            itemMini={
                <View>
                    <PlayerPreview
                        videoPaused={videoPaused}
                        visible
                        pauseVideo={pauseVideo}
                        onToggle={() => dispatch(togglePlayerMinimised())}
                        onPlayStop={() => setVideoPaused(false)}
                        onClose={handlePlayerPreviewClose}
                        disableVideoSkipButtons={disableVideoSkipButtons}
                        videoSkipValue={videoSkipValue}
                        handleSkipBackwards={handleSkipBackwards}
                        handleSkipForward={handleSkipForward}
                        onAddToList={() => setHintVisible(true)}
                        onList={handleShowQueue}
                        onRewind={(direction, value) => console.log(direction, value)} />
                </View>
            }
            itemFull={
                <View style={styles.content}>
                    <Player
                        style={styles.player}
                        ref={videoRef}
                        uri={uri}
                        videoTitle={videoTitle}
                        videoSkipValue={videoSkipValue}
                        disableVideoSkipButtons={disableVideoSkipButtons}
                        disableVideoSpeedOption={disableVideoSpeedOption}
                        videoSpeedOptions={videoSpeedOptions}
                        speedVisibility={speedVisibility}
                        setSpeedVisibility={setSpeedVisibility}
                        handleSpeedPress={handleSpeedPress}
                        handleSkipBackwards={handleSkipBackwards}
                        handleSkipForward={handleSkipForward}
                        pauseVideo={pauseVideo}
                        speedValue={speedValue}
                        videoPaused={videoPaused}
                        videoProgress={videoProgress}
                        videoDuration={videoDuration}
                        visible
                        onToggle={() => dispatch(togglePlayerMinimised())}
                        paused={videoPaused}
                        rate={speedValue}
                        onLoad={handleLoad}
                        onProgress={handleProgress}
                        onEnd={handleEnd}
                        onRemoveFromList={() => console.log('pressed')}
                        onList={handleShowQueue}
                        onPlayPrevNext={(direction) => console.log(direction)}
                        onRewind={(direction, value) => console.log(direction, value)}
                        textColour={textColour} />

                </View>
            } // Pass props component when show full
            onShowMini={() => dispatch(togglePlayerMinimised(true))}
            onShowFull={() => dispatch(togglePlayerMinimised(false))}
            onMoveDown={() => console.log('down')}
            onMoveUp={() => console.log('up')}
            swipeHeight={90}
            animation="easeInEaseOut"
            disablePressToShow={false}// Press item mini to show full
            style={[styles.swipeUpDownStyles, playerMinimised ? {} : { marginTop: 60 }]} />

    );
};

MediaPlayerComponent.propTypes = {
    uri: PropTypes.string,
    videoTitle: PropTypes.string,
    videoSkipValue: PropTypes.number,
    disableVideoSkipButtons: PropTypes.bool,
    disableVideoSpeedOption: PropTypes.bool,
    videoSpeedOptions: PropTypes.array,
    textColour: PropTypes.string,
    minimised: PropTypes.bool,
};

export default MediaPlayerComponent;
