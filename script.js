
var data = [{
    Emailaddress: "ram@gmail.com",
    password: "12345678"
}, {
    Emailaddress: "ajay@gmail.com",
    password: "87654321"
}];

function check() {
    // alert("text")
    var userEmailaddress = document.getElementById("inputEmail").value;
    var userPassword = document.getElementById("inputPassword").value;


    // var data=document.getElementById('mydata')
    // alert(Emailaddress+password)
    let result = data?.filter((ele) => ele.Emailaddress == userEmailaddress && ele.password == userPassword);

    if (result.length) {
        location.replace("/home.html")
    } else {
        document.getElementById("error").innerHTML = "wrong password";
    }
    // if (Emailaddress == "ram@gmail.com" && password == "12345") {
    //     // alert("1234")
    //     location.replace("/home.html")

    // } else if(Emailaddress=="ajay@gmail.com"&& password =="123456"){
    //     location.replace("/home.html")
    // }
    // else{
    //     alert("wrong password")
    // }


    // if(Emailaddress == "ajay@gmail.com"&& password =="123456"){
    //     location.replace("/home.html")
    // }else{
    //     alert ("wrong password")
    // }

    // data.forEach( function(data){
    //     var Emailaddress=document.createEvent("emailaddress")
    //     Emailaddress.innertext=data

    // }

}

// }

// let = () => {
//     console.log("test");
// }
// for (var i = 0; data < data.length; i++) {
//     console.log(let[i].Emailaddress, let[data].password);
// }
// function test(){
//     location.replace("data")
// }

function signup() {
    // console.log("aaa")
    var FirstName = document.getElementById("inputFirstName").value;
    var MiddleName = document.getElementById("inputMiddleName").value;
    var LastName = document.getElementById("inputLastName").value;
    var PhoneNumber = document.getElementById("inputnumber").value
    var Email = document.getElementById("inputemail").value
    var password = document.getElementById("inputepassword").value;
    var confirmpassword = document.getElementById("inputeconfirmpassword").value

    var data = {
        FirstName,
        MiddleName,
        LastName,
        PhoneNumber,
        Email,  
        password,
        confirmpassword
    };
    console.log(data)
    let fillCheck = Object.keys(data)?.filter((ele) => { if (data[ele] == "") { return ele } });
    if (fillCheck.length != 0) {
        document.getElementById("error").innerHTML = "Please fill the Form";
        return 0;
    } else if ((data.PhoneNumber).length != 10) {
        document.getElementById("error").innerHTML = "Please Enter vaild phone number";
        return 0;
    } else if (data.password != data.confirmpassword) {
        document.getElementById("error").innerHTML = "Your password don't match";
        return 0;
    } else {
        location.replace("/login.html")
    }


}

// else{
//     // console.log(data)
//     location.replace("/login.html")
// }
// else{
//  document.getElementById("error").innerHTML = "Password and confirmpassword not equal"

// else {
//     data.FirstName = FirstName;
//     data.MiddleName = MiddleName;
//     data.LastName = LastName;
// }


// if (PhoneNumber.length != 10 && PhoneNumber == "") {
//     document.getElementById("error").innerHTML = "Please enter valid phonenumber";
// }
// else {
//     data.PhoneNumber = PhoneNumber;

// if (Email == "") {
//     document.getElementById("error").innerHTML = "please enter email";

// }
// else {
//     data.Email = Email;
// }
// if (password == "") {
//     document.getElementById("error").innerHTML = "please enter valid password";
// }
// else {
//     data.password = password;
// }
// if (password == confirmpassword) {
//     data.password = password;
//     confirmpassword = confirmpassword
// }
// else {
//     document.getElementById("error").innerHTML = "Password and confirmpassword not equal"
// }
// if(data){
//     console.log(data)

// }else{
//     console.log(data)
//     location.replace("/login.html")
// }
// if (data) {
//     console.log(data)
//     // location.replace("/login.html")
// }
// else {
//     alert("fill your form")
// }





// for(var i=0;i<=10;i++){
//     console.log(let[i].userPhoneNumber);
// }
// let result = data.filter((ele)=>ele.FirstName == FirstName&&ele.MiddleName==MiddleName&&ele.LastName==LastName&&ele.PhoneNumber==PhoneNumber&&ele.Email==Email&&ele.password==password&&ele.confirmPassword==confirmpassword)

//  for(var PhoneNumber=0; PhoneNumber<=9;PhoneNumber++){
//     console.log(let[PhoneNumber])
//  }

// console.log(data);
// if (data.length) {
//     console.log(data.length);
//     location.replace("/login.html")

// } else {
//     document.getElementById("error").innerHTML = "Fill your Form";

// }
