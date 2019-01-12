//init GitHub
const github = new GitHub;
const ui = new UI;

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
        ui.showAlert("User Not Found", "alert alert-danger"); 
      }else{
        ui.showProfile(data.profile);
      }
    })
  }else{
    ui.clearProfile();
  }
})
