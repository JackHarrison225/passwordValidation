const checkPassword = (password) => {
     const isRight = /^(?=.*[a-zA-Z0-9])(?=.*[\W_]).{8,20}$/g.test(password);
     return isRight ? true : false //alert("Valid") : alert("Invalid") 

};

//export function
module.exports = checkPassword;
