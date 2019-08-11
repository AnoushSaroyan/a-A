Array.prototype.bubbleSort = function () {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < this.length; i++) {
            if (this[i] > this[i + 1]) {
                [this[i], this[i + 1]] = [this[i + 1], this[i]];
                sorted = false;
            }   
        }
    }

    return this;
}

// [6, 1, 4, 3, 68, 65].bubbleSort();

String.prototype.substrings = function () {
    let subs = [];

    for (let start = 0; start < this.length; start++) {
        for (let end = start + 1; end < this.length + 1; end++) {
            subs.push(this.slice(start, end));
            
        }   
    }

    return subs;
}

// "anoush".substrings();