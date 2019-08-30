export const fetchBenches = (filters) => {
    return $.ajax({
        method: "GET" ,
        url: "api/benches",
        data: filters
    })
};

export const fetchBench = (id) => {
    return $.ajax({
        method: "GET" ,
        url: `api/benches/${id}`
    })
};

export const createBench = (bench) => {
    return $.ajax({
        method: "post" ,
        url: "api/benches",
        data: { bench }
    })
};

