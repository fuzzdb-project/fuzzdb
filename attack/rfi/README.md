rfi.fuzz.txt

Remote File Include scanning

Compiled by RSnake 02/01/2010 

Mostly from milw0rm osvdb.org and elsewhere

Change XXpathXX to the path of your backdoor.  
Note that you may need to try it against every directory on the target and because of how this was culled you may need to add a question mark to your own XXpathXX URL:

XXpathXX => http://www.example.com/hax.txt?

see fuzzdb docs:

/docs/attack-docs/rfi-cheatsheet.html

Other tools:

fimap http://code.google.com/p/fimap/
