// fetchApi

let elList = document.querySelector(".list");

fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then((users => {
        users.forEach((user, i) => {
            if (i < 50){
                let li = document.createElement("li");
                let title = document.createElement("h3");
                let email = document.createElement("a");

                email.setAttribute("href", "#");

                title.textContent = user.name;
                email.textContent = user.email;

                li.appendChild(title);
                li.appendChild(email);

                elList.appendChild(li);
            }
        });
    }))
