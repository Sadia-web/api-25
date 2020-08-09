// How JSON WOrks

const user = {
    id: 245,
    newFriend: {
        name: "jamila",
        favFood = "pizza"
    }
    name: "Mim",
    friendsAge: [20, 45, 90],
    friends:["Kamal", "Jamal", "Jabed"]
}

const userJSON = JSON.stringify(user);
console.log(userJSON);

const userFromJSON = JSON.parse(userJSON);
console.log(userFromJSON);


// How data load from another website 

fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => displayUser(json))

        function displayUser(users){
            const userNames = users.map(user => user.username);
            const ul = document.getElementById("users-container");
            for(let i = 0; i < userNames.length; i++){
                const username = userNames[i];
                const li = document.createElement("li");
                li.innerText = username;
                ul.appendChild(li);
            }
            
        }

// For checking error

fetch('https://jsonplaceholder.typicode.com/people')
        .then(response => response.json())
        .then(json => displayUser(json))
        .catch(error => console.log(error))

// POST 

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))