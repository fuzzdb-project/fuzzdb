* redirect-injection-template.txt
    * Patterns for injecting into a value for attempting to bypass many input validation filters that intended to only allow only relative links on the same origin.<br>
* redirect-urls-template.txt
    * URL patterns that commonly lead to open redirect. <br>

<b>Payload file Usage:</b> <br>
Replace {target} with ip or hostname and path, Examples: <br>
* evil.com <br>
* evil.com/badurl<br>
* 1.2.3.4 <br>
* 134744072<br>

<b>Filter bypass testing techniques:</b><br>
* If periods are being stripped by the filter so that evil.com becomes evilcom, try converting the ip address to decimal notation form. 
http://www.geektools.com/geektools-cgi/ipconv.cgi
* Try URL-encoding the replacement value for {target}
