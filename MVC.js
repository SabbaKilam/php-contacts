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
c.checkPassword = function(guessedPassword){
  //The actual password is found in the checkPassword.php file
  //make a postman
  const postman = new XMLHttpRequest()
  postman.open(`POST`, `checkPassword.php`)
  postman.send(guessedPassword)
  
  //wait for a response after a load event from server
  postman.addEventListener(`load`, function(){
    if(postman.status === 200){
      const access = postman.responseText
      m.passwordIsValid = (access === `ok`) ? true : false     
    }
    else{
      m.passwordIsValid = false
      console.log(`Trouble at the server`)    
    }
  })
  postman.addEventListener(`error`, function(){
    m.passwordIsValid = false
    console.log(`Trouble connecting to server`)
  })
}

c.downloadContacts = function(){
  if(!m.passwordIsValid){return}

}

c.addContact = function(){
  if(!m.passwordIsValid){return}
}

c.saveContact = function(){
  if(!m.passwordIsValid){return}
}

c.deleteContact = function(){
  if(!m.passwordIsValid){return}
}

c.addAndSave = function(){
  c.addContact()
  c.saveContact()
}

c.deleteAndSave = function(){
  c.deleteContact()
  c.saveContact()
}

c.showContacts = function(){
  if(!m.passwordIsValid){return}
  console.log(m.contacts)
}