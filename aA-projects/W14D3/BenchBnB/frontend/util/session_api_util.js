export const signup = (user) => {
    
    debugger
    return(
        $.ajax({
            method: "POST",
            url: "api/user",
            data: {user}
        })
    );
};

export const login = (user) => {
    return(
        $.ajax({
            method: "POST",
            url: "api/session",
            data: {user}
        })
    );
};

export const logOut = () => {
    return(
        $.ajax({
            method: "DELETE",
            url: "api/session",
        })
    );
};

 

