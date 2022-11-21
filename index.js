function login() {
  var username = document.getElementById("username").value;
  var passowrd = document.getElementById("password").value;
  if (username == "blcobar") {
  }
  if (passowrd == "password") {
    document.location.href = "https://blcobar.github.io/ExLoader_Installer.exe";
  } else {
    document.getElementById("error").innerHTML =
      "Eeeee qotaqbas Error passowrd !";
  }
}
