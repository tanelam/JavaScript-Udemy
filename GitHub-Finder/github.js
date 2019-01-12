class GitHub {
  constructor(){
    this.client_id = "1bf1fb86eb04807a3b4e";
    this.client_secret = "412efc5902ba9bbc2a1b15780ff1dea9fcddd021";
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return{
      profile
    }
  }
}
