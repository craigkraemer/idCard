function idCard (firstName, lastName, address) {
  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;
  address = document.getElementById("address").value;
  document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
  document.getElementById("postAddress").innerHTML = address;
  var age = parseInt(document.getElementById("age").value);
  var phoneNumber = parseInt(document.getElementById("phoneNumber").value);
  var numberArray = [];
  numberArray.push(age, phoneNumber);
  for (i = 0; i < numberArray.length; i++) {
    if (numberArray[i] <= 100) {
      document.getElementById("postAge").innerHTML = "Age: " + age;
	  
    } else {
      document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
    }
  }
}