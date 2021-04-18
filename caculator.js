function Add()
{   
    var InputNum1= parseFloat(document.forms["inputForm"]["InputNum1"].value);
    var InputNum2 = parseFloat(document.forms["inputForm"]["InputNum2"].value);
    result = InputNum1 + InputNum2;
    output = InputNum1 + " + " + InputNum2 + " = " + result;
    document.getElementById('result').value = output;
}

function Multiply()
{   
    var InputNum1= parseFloat(document.forms["inputForm"]["InputNum1"].value);
    var InputNum2 = parseFloat(document.forms["inputForm"]["InputNum2"].value);
    result = InputNum1 * InputNum2;
    output = InputNum1 + " x " + InputNum2 + " = " + result;
    document.getElementById('result').value = output;
                
}
        
function Divide() 
{ 
    var InputNum1 = parseFloat(document.forms["inputForm"]["InputNum1"].value);
    var InputNum2= parseFloat(document.forms["inputForm"]["InputNum2"].value);
    result = InputNum1/ InputNum2;
    output = InputNum1+ " / " + InputNum2 + " = " + result;
    document.getElementById('result').value = output;
}

function Clear()
 {
    document.getElementById("result").value = "";
    document.forms["inputForm"]["InputNum1"].value = "";
    document.forms["inputForm"]["InputNum2"].value = "";
}