import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.clockling();
    }, 1000);
  }

  clockling() {
    let time = "AM";
    let now = new Date();
    let sec = now.getSeconds();
    let min = now.getMinutes();
    let hour = now.getHours();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let dy = days[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    if (hour > 12) {
      time = "PM";
      hour = hour - 12;
    }

    if (hour === 0) {
      hour = 12;
    }

    if (sec < 10) {
      sec = "0" + sec;
    }

    if (min < 10) {
      min = "0" + min;
    }

    if (hour < 10) {
      hour = "0" + hour;
    }

    const tickTock = {
      day: time,
      hour,
      min,
      sec,
      dy,
      date,
      month,
      year,
    };

    const list = [...this.state.list];
    list.push(tickTock);

    this.setState({
      list,
    });

    //console.log(this.state.list[this.state.list.length - 1].sec);
  }

  render() {
    if (this.state.list.length >= 1) {
      return (
        <div className="clockling">
          <div className="clock">
            <span>{this.state.list[this.state.list.length - 1].hour}</span>{" "}
            <span>:</span>
            <span>{this.state.list[this.state.list.length - 1].min}</span>{" "}
            <span>:</span>
            <span>
              {this.state.list[this.state.list.length - 1].sec}
              {this.state.list[this.state.list.length - 1].day}
            </span>
          </div>
          <div className="date">
            <span>{this.state.list[this.state.list.length - 1].year}</span>{" "}
            <span>/</span>
            <span>
              {this.state.list[this.state.list.length - 1].month}
            </span>{" "}
            <span>/</span>
            <span>{this.state.list[this.state.list.length - 1].date}</span>{" "}
            <span>/</span>
            <span>{this.state.list[this.state.list.length - 1].dy}</span>
          </div>
        </div>
      );
    }

    return null;
  }
}

export default App;
