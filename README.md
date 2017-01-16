FuzzDB was created to increase the likelihood of causing and identifying conditions of security interest through dynamic application security testing. It's the first and most comprehensive open dictionary of fault injection patterns, predictable resource locations, and regex for matching server responses.  

**Attack Patterns -**
FuzzDB contains comprehensive lists of [attack payload](https://github.com/fuzzdb-project/fuzzdb/tree/master/attack) primitives for fault injection testing. 
These patterns, categorized by attack and where appropriate platform type, are known to cause issues like OS command injection, directory listings, directory traversals, source exposure, file upload bypass, authentication bypass, XSS, http header crlf injections, SQL injection, NoSQL injection, and more. For example, FuzzDB catalogs 56 patterns that can potentially be interpreted as a null byte and contains lists of [commonly used methods](https://github.com/fuzzdb-project/fuzzdb/blob/master/attack/business-logic/CommonMethodNames.txt) such as "get, put, test," and name-value pairs than [trigger debug modes](https://github.com/fuzzdb-project/fuzzdb/blob/master/attack/business-logic/CommonDebugParamNames.txt).<br>

**Discovery -**
The popularity of standard software packaging distribution formats and installers resulted in resources like [logfiles and administrative directories](http://www.owasp.org/index.php/Forced_browsing) frequently being located in a small number of [predictable locations](https://github.com/fuzzdb-project/fuzzdb/tree/master/discovery/predictable-filepaths).
FuzzDB contains a comprehensive dictionary, sorted by platform type, language, and application, making brute force testing less brutish.<br>
https://github.com/fuzzdb-project/fuzzdb/tree/master/discovery

**Response Analysis -**
Many interesting server responses are [predictable strings](https://github.com/fuzzdb-project/fuzzdb/tree/master/regex). 
FuzzDB contains a set of regex pattern dictionaries to match against server responses. In addition to common server error messages, FuzzDB contains regex for credit cards, social security numbers, and more.<br>

**Other useful stuff -**
Webshells in different languages, common password and username lists, and some handy wordlists.

**Documentation -**
Many directories contain a README.md file with usage notes.
A collection of [documentation](https://github.com/fuzzdb-project/fuzzdb/tree/master/docs) from around the web that is helpful for using FuzzDB to construct test cases is also included. <br>

### Usage tips for pentesting with FuzzDB ###
https://github.com/fuzzdb-project/fuzzdb/wiki/usagehints

### How people use FuzzDB ###
FuzzDB is like an application security scanner, without the scanner. 
Some ways to use FuzzDB:
  * Website and application service black-box penetration testing with 
   * [OWASP Zap](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project) proxy's FuzzDB Zap Extension 
   * Burp Proxy's [intruder](http://portswigger.net/intruder/) tool and scanner
   * [PappyProxy](http://www.pappyproxy.com/), a console-based intercepting proxy
  * To identify interesting service responses using grep patterns for PII, credit card numbers, error messages, and more
  * Inside custom tools for testing software and application protocols
  * Crafting security test cases for GUI or command line software with standard test automation tools
  * Incorporating into other Open Source software or commercial products
  * In training materials and documentation
  * To learn about software exploitation techniques
  * To improve your security testing product or service
 
### How were the patterns collected? ###
Many, many hours of research and pentesting. And
  * analysis of default app installs
  * analysis of system and application documentation
  * analysis of error messages
  * researching old web exploits for repeatable attack strings
  * scraping scanner payloads from  http logs
  * various books, articles, blog posts, mailing list threads
  * other open source fuzzers and pentest tools
and the input of contributors: https://github.com/fuzzdb-project/fuzzdb/graphs/contributors

### Places you can find FuzzDB ###
Other security tools and projects that incorporate FuzzzDB in whole or part
  * OWASP Zap Proxy fuzzdb plugin https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project
  * SecLists https://github.com/danielmiessler/SecLists
  * TrustedSec Pentesters Framework https://github.com/trustedsec/ptf
  * Rapid7 Metasploit https://github.com/rapid7/metasploit-framework
  * Portswigger Burp Suite http://portswigger.net
  * Protofuzz https://github.com/trailofbits/protofuzz
  * BlackArch Linux https://www.blackarch.org/
  * ArchStrike Linux https://archstrike.org/

### Download ###
**Preferred method is to check out sources via git, new payloads are added frequently**

```
git clone https://github.com/fuzzdb-project/fuzzdb.git

```
While in the FuzzDB dir, you can update your local repo with the command
```
git pull
```
You can also browse the [FuzzDB github sources](https://github.com/fuzzdb-project/fuzzdb/) and there is always a [zip file](https://github.com/fuzzdb-project/fuzzdb/archive/master.zip)

Note: Some antivirus/antimalware software will alert on FuzzDB. To resolve, the filepath should be whitelisted. There is nothing in FuzzDB that can harm your computer as-is, however due to the risk of local file include attacks it's not recommended to store this repository on a server or other important system.  

### Who ###
FuzzDB was created by Adam Muntner (amuntner @ gmail.com)
FuzzDB (c) Copyright Adam Muntner, 2010-2017
Portions copyrighted by others, as noted in commit comments and README.md files. 

The FuzzDB license is New BSD and Creative Commons by Attribution. The ultimate goal of this project is to make the patterns contained within obsolete. If you use this project in your work, research, or commercial product, you are required to cite it. That's it. I always enjoy hearing about how people are using it to find an interesting bug or in a tool, send me an email and let me know. 

Submissions are always welcome!

Official FuzzDB project page: [https://github.com/fuzzdb-project/fuzzdb/](https://github.com/fuzzdb-project/fuzzdb/)
