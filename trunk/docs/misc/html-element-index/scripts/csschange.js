
function readSS()
{ 
if (document.getElementById || document.all()) 
   { 
    var allCookies = document.cookie; 
    var Path = ""; 
    var ss = "2";

    Path = location.href.substring(0,location.href.indexOf("indexdot/")+9);

    if (allCookies != "") // A cookie has been set
       {
        var strLen   = allCookies.length;
        var beginPos = allCookies.indexOf("ss=");

        if (beginPos != -1)
           { ss = allCookies.substring(beginPos+3, beginPos+4); }

        if (Path != "" && ss != "2")   // Only switch if cookie exists and CSS is not the default
           { 
             theFile = Path + "ss/" + ss + ".css";
             if (document.getElementById)
                { eval("document.getElementById(\"thecss\").href = \"" + theFile + "\""); }
             else    // IE 4/5 case
                { eval("document.all.tags(\"thecss\")[0].href = \"" + theFile + "\""); }
           }
       }
   }
}