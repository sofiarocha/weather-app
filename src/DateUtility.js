export default class DateUtility {
  constructor(date) {
    this.date = date;
  }

  days() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    return days[this.date.getDay()];
  }

  shortDays() {
    return this.days().substring(0, 3);
  }

  hours() {
    let hours = this.date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return hours;
  }

  minutes() {
    let minutes = this.date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return minutes;
  }

  formatedDate() {
    return `${this.days()}, ${this.hours()}:${this.minutes()}`;
  }
}
