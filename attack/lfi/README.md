LFI - Local File Include attacks

To exploit an LFI bug, you need to be able to write code to a local file and call it from the include. HTTPD log files are a location that is typically writable. 

common-unix-httpd-log-locations.fuzz.txt 
* To exploit a lfi bug, you have to get code into a local file. This list contains a list of common unix logfile locations based on common packages formats. 

common-windows-httpd-log-locations.fuzz.txt
* To exploit a lfi bug, you have to get code into a local file. This list contains a list of common windows logfile locations based on common packages formats.

For more details:
* http://www.wtfchan.org/~evil1/Web-Shells-rev2.pdf

other tools:
* fimap https://tha-imax.de/git/root/fimap
  * how-to http://kaoticcreations.blogspot.com/2011/08/automated-lfirfi-scanning-exploiting.html


