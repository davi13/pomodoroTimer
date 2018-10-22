import React, { Component } from 'react';
import { FaPlay, FaPause, FaStop } from 'react-icons/fa';
//Style
import './Timer.css'
class Timer extends Component {
    constructor() {
        super();
        //Initial State
        this.state = {
            alert: {
                type: '',
                message: ''
            },
            time: 0
        };
        //defined times for works, short break and long
        this.times = {
            defaultTime: 1500, //25min
            shortBreak: 300, //5min
            longBreak: 900 //15min
        }
    }
    componentDidMount() {
        //set default time when the component mounts
        this.setDefaulTime();
    }
    setDefaulTime = () => {
        //default time is 25min
        this.setState({
            time: this.times.defaultTime
        });
    }


    setTime = newTime => {
        this.restartInterval();

        this.setState({
            time: newTime
        })
    }


    restartInterval = () => {
        //clearing the interval
        clearInterval(this.interval);

        //execute counDown function every second
        this.interval = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        //if the time reach 0 then we display Buzzzz
        if (this.state.time === 0) {
            this.setState({
                alert: {
                    type: 'buz',
                    message: 'Buzzzzzz !'
                }
            })
        } else {
            //We decresse the time second by second
            this.setState({
                time: this.state.time - 1
            })
        }
    }

    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'Working !'
            }
        })
        return this.setTime(this.times.defaultTime);
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'taking a Short Break'
            }
        })
        return this.setTime(this.times.shortBreak);
    }

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Taking a Lon Break'
            }
        })
        return this.setTime(this.times.longBreak);
    }


    displayTimer(seconds) {
        //Formarting te time into mm:ss
        const m = Math.floor(seconds % 3600 / 60);
        const s = Math.floor(seconds % 3600 % 60);
        return `${m < 10 ? '0' : ''}${m}: ${s < 10 ? '0' : ''}${s}`;
    }

    setPause = () => {

        clearInterval(this.interval);

    }

    setPlay = () => {

        this.interval = setInterval(this.countDown, 1000);
    }

    setStop = () => {
        this.setState({
            time: 0
        })
    }

    render() {
        const { alert: { message, type }, time } = this.state;
        return (
            <div className="Pomodoro">
                <div className={`alert ${type}`}>
                    {message}
                </div>
                <div className="timer">
                    {this.displayTimer(time)}
                </div>

                <div className="type">
                    <button
                        className="start"
                        onClick={this.setTimeForWork}
                    >
                        Star Working
                    </button>
                    <button
                        className="short"
                        onClick={this.setTimeForShortBreak}
                    >
                        Short Break
                    </button><button
                        className="long"
                        onClick={this.setTimeForLongBreak}
                    >
                        Long Break
                    </button>
                </div>
                <div className="type">
                    <button
                        className="pause"
                        onClick={this.setPause}
                    >
                        <FaPause />
                    </button>
                    <button
                        className=""
                        onClick={this.setPlay}
                    >
                        <FaPlay />
                    </button><button
                        className="stop"
                        onClick={this.setStop}
                    >
                        <FaStop />
                    </button>

                </div>

            </div>
        )
    }
}
export default Timer;
