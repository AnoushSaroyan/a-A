export const fetchBenches = () => {
    return $.ajax({
        method: "GET" ,
        url: "api/benches"
    })
};

// export const fetchBench = (id) => {
//     return $.ajax({
//         method: "GET" ,
//         url: `api/benches${id}`
//     })
// };

export const createBench = (bench) => {
    return $.ajax({
        method: "post" ,
        url: "api/benches",
        data: { bench }
    })
};

