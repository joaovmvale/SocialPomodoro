import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

import Slider from "@react-native-community/slider";
import ProgressCircle from "react-native-progress-circle";

import Styles from "./style";

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [breakTime, setBreakTime] = useState(5);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [initalMinutes, setinitalMinutes] = useState(0);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        if (seconds == 0) {
          if (minutes == 0) {
            setMinutes(breakTime);
            setSeconds(0);
            setDisplayMessage(!displayMessage);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
          setProgress(((minutes * 60 + seconds) / (initalMinutes * 60)) * 100);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  function startTimer() {
    setIsRunning(!isRunning);
    setinitalMinutes(minutes);
    setTimeout(() => {});
  }

  function resetTimer() {
    setMinutes(25);
    setSeconds(0);
    setBreakTime(breakTime);
    setDisplayMessage(false);
    setIsRunning(false);
    setProgress(100);
  }

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <View style={Styles.container}>
      {displayMessage && (
        <Text style={Styles.text}>Hora do descanso, volte em: </Text>
      )}
      <View style={Styles.progressBarContainer}>
        <ProgressCircle
          percent={progress}
          radius={70}
          borderWidth={9}
          color="#0DB9AF"
          shadowColor="#DC3545"
          bgColor="#FFFFFF"
        >
          <Text style={Styles.text}>
            {timerMinutes}:{timerSeconds}
          </Text>
        </ProgressCircle>
      </View>
      <Text style={Styles.sliderText}>Tempo de trabalho</Text>
      <Slider
        style={{ width: 250, height: 40 }}
        minimumValue={5}
        maximumValue={120}
        step={5}
        onValueChange={(value) => setMinutes(value)}
        minimumTrackTintColor="#96226d"
        maximumTrackTintColor="#000000"
        thumbTintColor="#96226d"
      />
      <Text style={Styles.sliderText}>Tempo de descanso: {breakTime}min</Text>
      <Slider
        style={{ width: 250, height: 40 }}
        minimumValue={5}
        maximumValue={60}
        step={5}
        onValueChange={(value) => setBreakTime(value)}
        minimumTrackTintColor="#96226d"
        maximumTrackTintColor="#000000"
        thumbTintColor="#96226d"
      />
      <View style={Styles.buttonContainer}>
        <Button
          style={Styles.buttonsStart}
          mode="contained"
          onPress={() => startTimer()}
        >
          {isRunning ? "PAUSAR" : "INICIAR"}
        </Button>
        <Button
          style={Styles.buttonReset}
          mode="contained"
          onPress={() => resetTimer()}
        >
          RESETAR
        </Button>
      </View>
    </View>
  );
}
