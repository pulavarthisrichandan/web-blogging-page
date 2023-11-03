let ul = document.querySelector('.links-container');

auth.onAuthStateChanged((user) => {
    if(user){
        ul.innerHTML += `
        <li class="link-item"><a href="/admin" class="link">dashboard</a></li>
        <li class="link-item"><a href="#" onclick = "logoutUser()" class="link">Logout</a></li>
        `
    } else{
        // no one logged in
        ul.innerHTML += `
        <li class="link-item"><a href="/admin" class="link">login</a></li>`
    }
})