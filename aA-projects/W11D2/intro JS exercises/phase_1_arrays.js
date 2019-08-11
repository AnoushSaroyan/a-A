Array.prototype.uniq = function () {
   // debugger;
   let seen = [];
   for (let i = 0; i < this.length; i++) {
      // console.log(this[i]);
      if (seen.includes(this[i])) {
         continue;
      } else {
         seen.push(this[i])
      };
   };
   return seen;
};

[1, 2, 3, 3].uniq();



Array.prototype.twoSum = function(){
   // debugger;

   let positionPairs = [];
   for (let i = 0; i < this.length; i++){
      for(let a = i+1; a < this.length; a++){
         if ( this[i] + this[a] === 0) {
            positionPairs.push([i,a]);
         };
      };
   };
   return positionPairs; 
};

[-1, 2, 1, -2].twoSum();

Array.prototype.transpose = function() {
   let transposed = []
   for (let i = 0; i < this.length; i++) {
      transposed.push(this.map(x => x[i]));
   };
   return transposed;
};

arr = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9]
].transpose();



