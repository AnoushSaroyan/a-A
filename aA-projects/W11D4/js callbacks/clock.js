class Clock {
    constructor() {
        // 1. Create a Date object.
        const date = new Date(); 
        // 2. Store the hours, minutes, and seconds.
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        // 3. Call printTime.
        this.printTime();
        // 4. Schedule the tick at 1 second intervals. 
        // const that = this;
        // console.log(that);
        // const that = this;
        // setInterval( () => {
        //   this._tick(that);
        //   console.log(this);
        //   console.log('this inside setInterval');
        // }, 1000);
        // this._tick = this._tick.bind(this);

        // setInterval(this._tick, 1000);
        // window
        // setInterval.call(this, [this._tick, 1000]);


        
    }
    printTime () {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        // const that = this;
        console.log(this);
        console.log('this inside printtime');
        console.log(this.hours + ':' + this.minutes + ':' + this.seconds);
    }

    _tick() {
        // 1. Increment the time by one second.
        // 2. Call printTime.
        
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours += 1;
                if (this.hours === 24) {
                    this.hours = this.hours % 24;
                }
            }
        }
        // const that = this;
        // console.log(that);
        // console.log('that inside tick');
        // Clock.prototype.printTime.bind(this);
        // Clock.prototype.printTime();
        console.log(this.hours);
        console.log("calling");
        // this.printTime();
    }
}



const clock = new Clock();


