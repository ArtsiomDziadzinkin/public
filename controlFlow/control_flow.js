let userRole ="admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "admin";
let userCategory;


if(userRole === "admin"){
    acessLevel = "Full access granted";
}
else if (userRole === "manager"){
    accessLevel = "Limited access granted";
}
else {
    accessLevel = "No accesss granted";
}
console.log("Access Level: " + accessLevel);

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("Access Level: " + userMessage);

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = false;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);