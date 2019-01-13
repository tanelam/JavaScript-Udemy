class GitHub {
  constructor(){
    this.client_id = "1bf1fb86eb04807a3b4e";
    this.client_secret = "412efc5902ba9bbc2a1b15780ff1dea9fcddd021";
    this.repos_count = 5;
    this.repost_sort = "created: asc"
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repost_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return{
      profile,
      repos
    }
  }
}
