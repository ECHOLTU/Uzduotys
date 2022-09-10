/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const fetchUsers = async () => {
    const getUsers = await fetch("https://api.github.com/users");
    const response = await getUsers.json();

    const message = document.querySelector("#message").style.display = "none"; //remove'inam message;
    const output = document.querySelector("#output");

    for (const e of response) output.innerHTML += `<p>login: ${e.login} <br> url: ${e.avatar_url}</p>` + "<br>";
}
