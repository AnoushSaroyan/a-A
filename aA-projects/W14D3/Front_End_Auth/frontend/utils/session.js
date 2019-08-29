// sign up
export const postUser = user =>(
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user },
    })
);

// sign in 
export const postSession = user => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user },
    })
);

// sign out
export const deleteSession = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE',
    })
);