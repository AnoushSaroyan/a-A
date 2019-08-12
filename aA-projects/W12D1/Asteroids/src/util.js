const Util = {
    inherit(parent, child) {
        const Surrogate = function () { }
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate();
        child.prototype.constructor = child;
    },

    // Return a randomly oriented vector with the given length.
    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },

    // // Return a random pos from the given pos
    // randomPos(dim_x, dim_y) {
    //     return [dim_x * Math.random(), dim_y * Math.random()];
    // },

    // Scale the length of a vector by the given amount.
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    }
};

module.exports = Util;