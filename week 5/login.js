function checkcreds(){
  var firstName = document.getElementById("fName").value;
  var lastName = document.getElementById("lName").value;
  var badgeNumber= document.getElementById("badgeID").value;
  var fullName = firstName + " "+ lastName;

  console.log("first name is :" + firstName + " , last name is:" + lastName + ", badgeNumber is" + badgeNumber);
  if (fullName.length > 20 || fullName.length < 2){
      document.getElementById("loginStatus").innerHTML = "full name has to many charecters please try again"
  }
  else if(badgeNumber > 999 || badgeNumber < -999){
    document.getElementById("loginStatus").innerHTML = "invalid badge number try again"
  }
  else{ 
      alert("acsess granted");
      location.replace("UATSpace.html");
  }


}