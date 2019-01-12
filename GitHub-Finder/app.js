//init GitHub
const github = new GitHub

//Search input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener("keyup", (e) => {
  //get input text
  const userText = e.target.value;

  if(userText !== ""){
    //HTTP call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === "Not Found"){
        //show alert
      }else{
        //show profile
      }
    })
  }
})
