// Promise -> Async/ await

// Bad Code
function displayUser(){
    fetchUser() //
        .then((user)=> {
            fetchProfile(user) //
                .then((profile) => {
                    updateUI(user, profile);
                });
        });
}

// Good Code
async function dispalyUser(){
    const user = await fetchUser();
    const profile = await fetchProfile(user);
    updateUI(user, profile);
}