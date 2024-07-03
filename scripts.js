
//  Concatenate Some string
document.getElementById("alert").onclick= function(){
    let string1 = prompt("Enter First string please.")
    let string2 = prompt("Enter Second string please")
    let fullString = string1 + " " + string2
    // let statement = alert("Muneeb Mustafa")
    // document.getElementById('Statement').innerHTML = 'You entered' + "  " + string1 + ' ' + 'and' + ' ' + string2 + '.';
    document.getElementById('Statement').innerHTML = `You entered ${string1} and ${string2}`;
    document.getElementById('output').innerHTML = "<p class = 'text-center'>" + 'The concatenate string is' + "  " + string1 + ' ' + string2 + ".<br>" + 'Thanks! try it again.' + "</p>"
    // alert("Muneeb Mustafa")
    
}
// Ask number from user
document.getElementById("alert_number").onclick= function(){
    let num1 = prompt("Enter a number please.")
    document.getElementById('Statement').innerHTML = 'You entered' + "  " + num1 + '.';
    document.getElementById('output').innerHTML = "<p class = 'text-center'>" + 'The number from user is' + "  " + num1 + ".<br>" + 'Thanks! try it again.' + "</p>"
    
    // let statement = "12354425"
    // document.getElementById('Statement').innerHTML = statement
}
// Comparison Operator
document.getElementById("variable_name").onclick = function(){
    let operators = '<ul><li><</li><li>></li><li><=></li><li>>=</li><li>!=</li><li>==</li><li>===</li></ul>'
    // let operators = "<p class = 'text-left'>" + '<ul><li><</li><li>></li><li><=></li><li>>=</li><li>!=</li><li>==</li><li>===</li></ul>' + "</p>"
    document.getElementById('Statement').innerHTML = operators
}
// // if else if
// document.getElementById("camel").onclick = function(){
    
//     let num1 = prompt("Enter the shopping price.")
//     // document.getElementById('output').innerHTML = "<p class = 'text-center'>" + 'The number from user is' + "  " + num1 + ".<br>" + 'Thanks! try it again.' + "</p>"
//     let price;
//     if (price<1000) {
//         num3 = 'You can avail 30% Discount!'
//     } else if (price<1500) {
//         num3 = 'You can avail 40% Discount!'
//     } else if (price>2000){
//         num3 = 'You can avail 50% Discount!'
//     } else{
//         num3 = 'Enjoy your shopping!'
//     }
//     document.getElementById('Statement').innerHTML = price
//     // document.getElementById('output').innerHTML = html
// }
document.getElementById("camel").onclick = function() {
    // Prompt user for the shopping price and store it in num1
    let num1 = prompt("Enter the shopping price.");
    
    // Parse num1 to an integer or float, depending on your needs. Here I'm assuming prices are integer values.
    let price = parseInt(num1); // Use parseFloat(num1) if you need to handle decimal values.
    let stat = "<p class = 'text-center'>"+ '<h3 class = pb-3>Discount Criteria</h3>' + '<code> if (price < 1000) You can avail 30% Discount!<br> else if (price < 1500) You can avail 40% Discount!<br> else if (price > 2000) You can avail 50% Discount!<br>  else Enjoy your shopping! </code>' + '<h6>And your price is</h6>'  + price + "</p>"
    // Initialize num3 to store the discount message
    let num3;
    
    // Determine the discount based on the price
    if (price < 1000 && price > 0) {
        num3 = 'You can avail 30% Discount!';
    } else if (price < 1500) {
        num3 = 'You can avail 40% Discount!';
    } else if (price > 2000) {
        num3 = 'You can avail 50% Discount!';
    } else {
        num3 = 'Enjoy your shopping!';
    }
    
    // Display the discount message
    document.getElementById('Statement').innerHTML = "<p class = 'text-center'>" + stat + "</p>" ;
    document.getElementById('output').innerHTML = "<p class = 'text-center'>" + num3 + "</p>" ;
}

// Testing Set of condtion
document.getElementById("sum").onclick = function(){
    document.getElementById('Statement').innerHTML = "<h4>Check condition for ID card</h4>"
    document.getElementById('output').innerHTML = "<p class = text-center>" + 'Using the <code>if-else statement</code> we can check that you are eligible for ID card or not it would check a single condition that are you 18 or above if the condition met is true then you are eligible <code>else</code> not.' + "</p>"
}

// if statement nested
document.getElementById("subtract_num").onclick = function(){

    let nested1 = prompt("Enter your score, out of hundred");
    let nested2 = prompt("Enter your attendence please in %, dont wrie '%' with it");
    

    let score = parseInt(nested1);
    let stat1 = "<p class = 'text-center'>"+ '<h3 class = pb-3>Scholarship Merit Calculation</h3>' + 'You are only eligible if the score is 80 or above and your attendence is atleast 85.</br> And your marks that you entered are'+ ' ' + nested1 + '.' +"</p>"
    // Initialize num3 to store the discount message
    let num3;
    
    // Determine the discount based on the price
    if (score >= 80 || score < 100) {
        num3 = 'Congrats you are Eligible!';
    }else {
        num3 = 'You are absolutely not eligible!';
    }
    
    // Display the discount message
    document.getElementById('Statement').innerHTML = "<p class = 'text-center'>" + stat1 + "</p>" ;
    document.getElementById('output').innerHTML = "<p class = 'text-center'>" + num3 +'</br>'+  'And your attendence that you entered is' + ' '+ nested2 + '.'+ "</p>" ;
    // document.getElementById('output').innerHTML = "<p class = 'text-center'>" + 'And your attendence that you entered is' + nested1 + '%' + "</p>" ;
    
    
    
}
// Login
document.getElementById("multiply_num").onclick = function() {
    // Prompt user to enter username
    let name = prompt("Enter username, write 'muneeb'");
    
    // Check if the entered name is "muneeb"
    if (name === "muneeb") {
        // If name is muneeb, ask for the password
        let nested2 = prompt("Welcome Muneeb! Enter password, write '123'");
        
        // Check if the entered password is "123"
        if (nested2 === "123") {
            // If password is correct, show a success message via alert and on the page
            alert('Login Successful!');
            document.getElementById('output').innerHTML = "<div style='text-align:center;'>You are now successfully logged in.</div>";
            
        } else {
            // If the password is wrong, show an alert
            alert('Incorrect password. Please try again.');
        }
    }
    else {
        // If the username is not found, show an alert
        alert('Username not found. Please try again or register if you don\'t have an account.');
    }
};


document.getElementById("divide_num").onclick = function() {
    let fruits = prompt("Welcome to our shop! Which fruit do you want?").toLowerCase();
    let message;

    if (fruits === "apple" || fruits === "mango" || fruits === "banana") {
        message = "You have selected " + fruits + ". A fine choice!";
    } else {
        message = "Sorry, we only have apple, mango, and banana available.";
    }

    // Assuming you want to use 'Statement' to display the fruit selection message
    document.getElementById('Statement').innerHTML = "<p style='text-align:center;'>" + message + "</p>";
    
    // This clears the 'output' element or you can use it for something else
    document.getElementById('output').innerHTML = ""; // Clearing or use for additional messages
};


document.getElementById("clear").onclick = function(){

    document.getElementById('Statement').innerHTML = ('');
}
document.getElementById("out").onclick = function(){

    document.getElementById('output').innerHTML = ('');
}





