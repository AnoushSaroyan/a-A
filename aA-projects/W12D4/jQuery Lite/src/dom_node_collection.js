// 'use strict';

// module.exports = class DOMNodeCollection {
//     constructor(HTMLElements) {
//         this.HTMLElements = HTMLElements;
//     }
// }

const DOMNodeCollection = function (HTMLElements) {
    this.HTMLElements = HTMLElements || [];

}

DOMNodeCollection.prototype.html = function(param) {
    console.log('html function success!');
    //create HTML element with arg
    if (!param) {
        // return inner HTML of first node
        return this.HTMLElements[0].innerHTML;
    } else {
        for(let i = 0; i < this.HTMLElements.length; i++) {
            this.HTMLElements[i].innerHTML = param;
        }
    }
};

DOMNodeCollection.prototype.empty = function() {
    for (let i = 0; i < this.HTMLElements.length; i++) {
        this.HTMLElements[i].innerHTML = "";
    }
};


DOMNodeCollection.prototype.append = function(param) {
    // if the param is an html ele, turn it to DOMNodeCollection
    if (typeof param === "object"  && !(param instanceof DOMNodeCollection)) {
        param = new DOMNodeCollection([param]);
    }

    if (param instanceof DOMNodeCollection) {
        // jQuerylite object '$l()'
        for (let i = 0; i < param.HTMLElements.length; i++) {
            this.HTMLElements.forEach((el) => {
                el.appendChild(param.HTMLElements[i]);
            });    
        }
    } else {
        // string / html element
        const arr_nodes = Array.from(this.HTMLElements);
        arr_nodes.forEach((el) => {
            el.innerHTML += param;
        });
        // this.HTMLElements.push(param);
    }
};

DOMNodeCollection.prototype.attr = function(attribute, value) {
    // gets the attribute value for only the first element
    if (!value) {
        return this.HTMLElements[0].getAttribute();
    } else {
        this.HTMLElements.forEach((el) => {
            el.setAttribute(attribute, value);
        }); 
    }
};


DOMNodeCollection.prototype.addClass = function(className) {
    this.HTMLElements.forEach((el) => {
        el.className = className;
    });
};

DOMNodeCollection.prototype.removeClass = function (className) {
    this.HTMLElements.forEach((el) => {
        el.className = "";
    });
};


DOMNodeCollection.prototype.children = function () {
    let children = [];
    this.HTMLElements.forEach((el) => {
        children = children.concat(Array.from(el.children)); 
    });
    return new DOMNodeCollection(children);
    // return this.HTMLElements;
};

DOMNodeCollection.prototype.parent = function () {
    let parents = [];
    this.HTMLElements.forEach((el) => {
        parents = parents.concat([el.parentElement]);
    });

    // get the unique parents
    parents = parents.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });

    return new DOMNodeCollection(parents);
};



DOMNodeCollection.prototype.find = function (selector) {
    let selected = [];

    this.HTMLElements.forEach((el) => {
        selected = selected.concat(Array.from(el.querySelectorAll(selector)));
    });
    
    return new DOMNodeCollection(selected);
};


DOMNodeCollection.prototype.remove = function () {
    this.HTMLElements.forEach((el) => {
        el.parentElement.removeChild(el);
    });
};


DOMNodeCollection.prototype.on = function (action, callback) {
    this.HTMLElements.forEach((el) => {
       el.addEventListener(action, callback);
    });
};


DOMNodeCollection.prototype.off = function (action, callback) {
    this.HTMLElements.forEach((el) => {
        el.removeEventListener(action, callback);
    });
};

// const toggleLi = (e) => {
//     const li = e.target;
//     if (li.className === "visited") {
//         li.className = "";
//     } else {
//         li.className = "visited";
//     }
// };



// const lis = $l('li');
// lis.on("click", toggleLi);





module.exports = DOMNodeCollection;


