import React, { useState } from "react";
import styled from "styled-components";
import MyButton from "../Button";
import RestTime from "../RestTime";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffcc99;
  margin: 50px;
  padding: 15px;
  border-radius: 5px;
  height: 100%;
`;
const Time = styled.div`
  color: white;
  margin-top: 50px;
  text-align: center;
  font-size: 120px;
  font-weight: 100;
`;
const Lower = styled.div`
  margin-top: auto;
  text-align: center;
`;

// //import Button from "../Button";

// function formatTime(timePerSec) {
//   let minutes = Math.floor(timePerSec / 60);
//   let seconds = parseInt((timePerSec - minutes * 60) % 60, 10);
//   let hour = 0;
//   if (minutes >= 60) {
//     hour = Math.floor(minutes / 60);
//     minuts = minutes - hour * 60;
//   }
//   return `${hour > 0 ? `${hour}:` : ""}${
//     minutes < 10 ? `0${minutes}` : minutes
//   }:${seconds < 10 ? `0${seconds}` : seconds}`;
// }
const Timer = () => {
  const [isPlaying, changePlayingState] = useState(false);
  return (
    <Container>
      <Time>00:00</Time>
      <RestTime />
      <Lower>
        <MyButton />
      </Lower>
    </Container>
  );
};

// class Timer extends Component {
//   componentWillReceiveProps(nextProps) {
//     const currentProps = this.props;
//     if (currentProps.isPlaying === false && nextProps.isPlaying === true) {
//       //start the interval
//       const timerInterval = setInterval(() => {
//         currentProps.addSecond();
//       }, 1000);
//       this.setState({ timerInterval });
//     } else if (
//       currentProps.isPlaying === true &&
//       nextProps.isPlaying === false
//     ) {
//       // clear the interval
//       clearInterval(this.state.timerInterval);
//     }
//   }
//   render() {
//     const {
//       isPlaying,
//       elapsedTime,
//       timerDuration,
//       startTimer,
//       restartTimer
//     } = this.props;
//     console.log(this.props);
//     return (
//       <View style={style.container}>
//         <StatusBar barStyle={"light-content"} />
//         <View style={style.upper}>
//           <Text style={style.time}>{formatTime(elapsedTime)}</Text>
//         </View>
//         <View style={style.lower}>
//           {!isPlaying && <Button iconName="play-circle" onPress={startTimer} />}
//           {isPlaying && (
//             <Button iconName="stop-circle" onPress={restartTimer} />
//           )}
//         </View>
//       </View>
//     );
//   }
// }
// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffcc99"
//   },
//   upper: {
//     flex: 2,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   lower: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   time: {
//     color: "white",
//     fontSize: 120,
//     fontWeight: "100"
//   }
// });

export default Timer;
