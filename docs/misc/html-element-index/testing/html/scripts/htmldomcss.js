function theTest()
{

for (i=0;i<expCssProp.length;i++)
    {
     if (window.getComputedStyle)
        {
         eval("document.forms[0].act" + i + 
              ".value = getComputedStyle(document.getElementById('test'), null)." + 
              expCssProp[i]);
        }
     if (document.getElementById("test").currentStyle)
        {
         eval("document.forms[0].act" + i + 
              ".value = document.getElementById('test').currentStyle." + expCssProp[i]);
        }
        
// Analyze results. Allow for dynamic values
     var actResult = eval("document.forms[0].act" + i + ".value");

     if (expCssResult[i].indexOf("[relfontsize-") != -1)  // Font size relative to base default
        { 
          resultVector = compareFontSize(actResult,
                         expCssResult[i].substring(expCssResult[i].length-3, expCssResult[i].length-1)); 
        }

     else if (expCssResult[i] == "[relcolor]")    // Font size relative to base default
        { 
         if (actResult == compareColor())
            { resultVector = "pass"; }
         else
            { resultVector = "false"; }
        }

     else if (expCssResult[i].indexOf("[or]") > -1)
        {
         resultVector = compareOr(actResult, expCssResult[i].substring(4, expCssResult[i].length));
        }

     else if (actResult == expCssResult[i])
        { resultVector = "pass"; }
     else
        { resultVector = "fail"; }

// Print results
     if (resultVector == "pass")
        {
         eval("document.forms[0].res" + i + ".className = 'pass'"); 
         eval("document.forms[0].res" + i + ".value = 'pass'"); 
        }
     else
        {
         eval("document.forms[0].res" + i + ".className = 'fail'"); 
         eval("document.forms[0].res" + i + ".value = expCssResult[" + i + "]"); 
        }
   }
   
}

function compareFontSize(actual, comparison)
{
var theSize = "";
var theResult = "";
var retVal  = "fail";

// Get the actual value
if      (window.getComputedStyle)
        { theSize = getComputedStyle(document.getElementById("compare"), null).fontSize; }
else if (document.getElementById("test").currentStyle)
        { theSize = document.getElementById('compare').currentStyle.fontSize; }

// Do the comparisons using localeCompare so that units are taken into account
theResult = actual.localeCompare(theSize);
if (comparison == "lt" && theResult < 0)
   { retVal = "pass"; }
else if (comparison == "eq" && theResult == 0)
   { retVal = "pass"; }
else if (comparison == "gt" && theResult > 0)
   { retVal = "pass"; }   

return retVal;
}

function compareOr(actual, orVals)
{
var orArray = orVals.split("|");
var retVal  = "fail";

for (compareloop=0;compareloop<orArray.length;compareloop++)   // Examine each of the options
    {                                                          // Allow for quoted font names in Opera
     if (actual == orArray[compareloop] || actual == "\"" + orArray[compareloop] + "\"")
        { retVal = "pass"; } 
    }

return retVal;
}

function compareColor()
{
var theColor = "";

if      (window.getComputedStyle)
        { theColor = getComputedStyle(document.getElementById("compare"), null).color; }
else if (document.getElementById("test").currentStyle)
        { theColor = document.getElementById('compare').currentStyle.color; }

return theColor;
}

function defaultProp(cssProp)
{
if      (window.getComputedStyle)
        { eval("alert('Default font size is: ' + getComputedStyle(document.getElementById('compare'), null)." + cssProp + ")"); }
else if (document.getElementById("test").currentStyle)
        { eval("alert('Default font size is: ' + document.getElementById('compare').currentStyle." + cssProp + ")"); }

return true;
}
