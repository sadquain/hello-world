function formvalidatefunc()                                    
{ 
    var fname = document.forms["CommentForm"]["Firstname"].value;               
    var lname = document.forms["CommentForm"]["Lastname"].value; 
	var email = document.forms["CommentForm"]["Email"].value; 
	var fLength=fname.length;
	var lLength=lname.length;
	
	if (fname == "")                                  
    { 
        window.alert("Please enter your first name."); 
        fname.focus(); 
        return false; 
    }
	
	if(fLength>50)
	{
		window.alert("FirstName exceeds length."); 
        fname.focus(); 
        return false;
	}
	
	
	if (lname == "")                                  
    { 
        window.alert("Please enter your last name."); 
        lname.focus(); 
        return false; 
    }
	
	if(lLength>50)
	{
		window.alert("LastName exceeds length."); 
        fname.focus(); 
        return false;
	}
	
	if (email == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
	if (!validateEmail(email))                                  
    { 
        window.alert("Please enter valid email."); 
        email.focus(); 
        return false; 
    }
	return true;

		
}


function validateEmail(email) 
{
    var re = /\S+@\S+/;
   //var re= /@[^0-9]/;
    return re.test(email);
}