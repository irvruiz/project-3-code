function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd1").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("enter your user name.");
		}
		else if(pwd=='')
		{
        	alert("enter your password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email");
		}
		else if(pwd.length < 8 || pwd.length > 12)
		{
			alert("Password minimum and max length is 12 characters.");
		}
	}
	function clearFunc()
	{
		document.getElementById("email").value="";
		document.getElementById("pwd1").value="";
	}	