const apiurl = "https://api.github.com/users/";
const main = document.querySelector('.main')
const getUser = async(username)=>{
  const response =await fetch(apiurl + username)
  const data = await response.json()
  console.log(data)
  const card = 
  ` <div class="col-md-6">
  <div class="d-flex justify-content-center">
      <img class="avatar "  src="${data.avatar_url}" alt="Florin Pop">
    </div>
   <div class="user-Info ">
      <h3 class="text-info text-center">${data.name}</h3> <br>
      <p  class="text-info text-center">Bio is  ${data.bio}</p>
  </div>
  <ul class="info text-center text-info">
    <li>${data.followers} <strong>Followers</strong></li>
    <li>${data.following} <strong>Following</strong></li>
    <li>${data.public_repos} <strong>Repositories</strong></li>
 </ul>
    
  </div>
    
  <div class="col-md-6">
  <div id="repos" class="text-center text-info">
     <h6 clas="text-center text-info">Check Repositories</h6>
  </div>
    
 </div>    
    
    
     
 <div class="text-center mt-2">
   <a class="btn btn-outline-info button text-center" target="_blank" href="${data.html_url}" onclick="visit()">Visit Profile<a>
 </div>  
`
  main.innerHTML = card
  getRepos(username)
}
// getUser("bhagirath-wscubetech")
document.getElementById('form').addEventListener("click", (event)=>{
    event.preventDefault()
})

const getRepos = async(username) =>{
    const repos = document.querySelector("#repos")
   const response = await fetch(apiurl + username + "/repos")
   const data = await response.json()
   data.forEach((item) => {
    console.log(item)
    var li =document.createElement("li")
   var elem = document.createElement("a")
   elem.classList.add("repo");
   elem.href=item.html_url
   elem.innerText =item.name
   elem.target= "_blank"
   repos.appendChild(li)
   li.appendChild(elem)
   });
}

const formSubmit =()=>{
  const searchBar = document.getElementById('search').value;
  if (searchBar !=""){
    getUser(searchBar)
    document.getElementById('search').value="";
  }
}


  

