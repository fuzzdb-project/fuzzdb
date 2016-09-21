FuzzDB is the most comprehensive dictionary of attack patterns and payload primitives, predictable resource patterns, variants, regex, and documentation for application security testing and research. 

Downloading this repository is likely to cause a false-positive alarm by your antivirus or antimalware software, the filepath should be whitelisted. There is nothing in FuzzDB that can harm your computer as-is, however it's not recommended to store these files on a server or other important system due to the risk of local file include attacks.  

# FuzzDB Uses #
  * Web and service security testing with 
   * [OWASP Zap](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project) proxy's FuzzDB Zap Extension 
   * Burp Proxy's [intruder](http://portswigger.net/intruder/) tool
  * To identify interesting service responses using grep patterns for PII, credit card numbers, error messages, and more
  * Inside custom tools for testing software and application protocols
  * Crafting security test cases for GUI or command line software with standard test automation tools
  * Incorporating into other Open Source software or commercial products
  * In training materials and documentation
  * To learn about software exploitation techniques

FuzzDB's patterns are used by many security tools and projects such as:
  * OWASP Zap Proxy fuzzdb plugin https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project
  * TrustedSec Pentesters Framework https://github.com/trustedsec/ptf
  * Rapid7 Metasploit https://github.com/rapid7/metasploit-framework
  * Portswigger Burp Suite http://portswigger.net
  * Protofuzz https://github.com/trailofbits/protofuzz
  * SecLists https://github.com/danielmiessler/SecLists
  * BlackArch Linux https://www.blackarch.org/
  * ArchStrike Linux https://archstrike.org/
 
# What's in FuzzDB? #
**Attack Patterns -**
Malicious and malformed strings known to cause information leakage and exploitation, categorized by attack type.
FuzzDB contains comprehensive lists of [attack payload](https://github.com/fuzzdb-project/fuzzdb/tree/master/attack) primitives and variants known to cause issues like OS command injection, directory listings, directory traversals, source exposure, file upload bypass, authentication bypass, XSS, http header crlf injections, SQL injection, NoSQL injection, and more. For example, FuzzDB catalogs 56 variants of byte patterns that can be interpreted as a null byte under different conditions.<br>
https://github.com/fuzzdb-project/fuzzdb/tree/master/attack

**Discovery -**
Because of the popularity of a small number of server types, platforms, and package formats, resources such as [logfiles and administrative directories](http://www.owasp.org/index.php/Forced_browsing) are typically located in a small number of [predictable locations](https://github.com/fuzzdb-project/fuzzdb/tree/master/discovery/predictable-filepaths).
FuzzDB contains a comprehensive database of these, sorted by platform type, language, and application, making brute force testing less brutish.<br>
https://github.com/fuzzdb-project/fuzzdb/tree/master/discovery

**Response Analysis -**
Since system responses also contain predictable strings, FuzzDB contains a set of regex pattern dictionaries to match against server responses such as interesting error messages to aid detection software security defects, lists of common Session ID cookie names, regular expressions for credit cards, social security numbers, and more.<br>
https://github.com/fuzzdb-project/fuzzdb/tree/master/regex

**Other useful stuff -**
Webshells, common password and username lists, and some handy wordlists.

**Documentation -**
Helpful documentation and cheatsheets sourced from around the web that are relevant to the payload categories are also provided. Many directories contain a README.md file with usage notes.<br>
https://github.com/fuzzdb-project/fuzzdb/tree/master/docs

It's like an open source application security scanner, without the scanner.

# How-To #
https://github.com/fuzzdb-project/fuzzdb/wiki/usagehints

# Why FuzzDB exists #
FuzzDB was created because it's impossible for a human to recall all strings and variants for constructing attacks that are likely to cause software to operate in a manner other than intended by its designers. FuzzDB's attack and discovery pattern dictionary allows security testers and researchers to repeatably exercise applications and uncover more vulnerabilities.

The inherent nature of client/server protocols, commonly used software stacks, and the limited number of standard application features involving security decisions that are likely to be abused such as authentication, authorization, file upload, etc. result in a frequency distribution of the presentation of software application vulnerability categories that looks gaussian, as demonstrated by taxonomies such as the OWASP Top 10.

To inform future testing, FuzzDB collects attack and discovery patterns that have caused software to malfunction in the past. While a small number of patterns could find many bugs, a more comprehensive set of variants allows for discovery of edge cases that bypass protection mechanisms, that result from interoperability issues, or are only discovered through knowlege of predictable resource names.  

Released under the dual New BSD and Creative Commons by Attribution licenses, FuzzDB can be used for any purpose by penetration testers and security researchers and leveraged to improve the test cases built into open source and commercial security testing software.

# How was the data collected? #
Lots of hours of research while performing penetration tests and research:
  * analysis of default app installs
  * analysis of system and application documentation
  * analysis of error messages
  * researching old web exploits for repeatable attack strings
  * scraping scanner payloads from  http logs
  * various books, articles, blog posts, mailing list threads
  * other open source fuzzers and pentest tools
and the input of contributors: https://github.com/fuzzdb-project/fuzzdb/graphs/contributors

# Download #
**Preferred method is to check out sources via git, new payloads are added frequently**
```
https://github.com/fuzzdb-project/fuzzdb.git
```
While in the FuzzDB dir, you can update your local repo with the command
```
git pull
```
You can also browse the [FuzzDB github sources](https://github.com/fuzzdb-project/fuzzdb/) and there is always a [zip file](https://github.com/fuzzdb-project/fuzzdb/archive/master.zip)

# Who #
FuzzDB was created by Adam Muntner (amuntner @ gmail.com)
FuzzDB (c) Copyright Adam Muntner, 2010-2016
Portions copyrighted by others, as noted in commit comments and README.md files. 

The FuzzDB license is New BSD and Creative Commons by Attribution. The ultimate goal of this project is to make the patterns contained within obsolete. If you use this project in your work, research, or commercial product, you are required to cite it. That's it. I always enjoy hearing about how people are using it to find an interesting bug or in a tool, send me an email and let me know. 

Submissions are always welcome!

Official FuzzDB project page: [https://github.com/fuzzdb-project/fuzzdb/](https://github.com/fuzzdb-project/fuzzdb/)
