const m = {} //MODEL (holds state variables and constants)
const v = {} //VIEW  (holds viewable input-output components)
const c = {} //CONTROLLER (holds all the function properties = methods)
//=================| STATE VARIABLES |===========//
m.contacts = [
  ["Lastname","Firstname","Email","Phone"],
  ["Lastname 2","Firstname 2","Email 2","Phone 3"], 
]
m.passwordIsValid = false

//=================| INITIALIZE |===============//
c.initialize = function(){
  
}
//=================| END of INITIALIZE /=======//
c.getPassword = function(guessedPassword){
  //The actual password is found in the checkPassword.php file
}
c.downloadContacts = function(){
}
c.addContact = function(){}
c.saveContact = function(){}
c.deleteContact = function(){}
c.addAndSave = function(){
  c.addContact()
  c.saveContact()
}
c.deleteAndSave = function(){
  c.deleteContact()
  c.saveContact()
}
c.showContacts = function(){}