FuzzDB is the most comprehensive Open Source database of malicious inputs, predictable resource names, greppable strings for server response messages, and other resources like web shells. It's like an application security scanner, without the scanner. 
# Download #

**Preferred method is to check out sources via git, new payloads are added frequently**
```
git clone git@github.com:fuzzdb-project/fuzzdb.git fuzzdb
```

While in the FuzzDB dir, you can update your local repo with the command
```
git pull
```
You can also browse the [FuzzDB github sources](https://github.com/fuzzdb-project/fuzzdb/tree/master) and there is always a [zip file](https://github.com/fuzzdb-project/fuzzdb/archive/master.zip)


# What's in FuzzDB? #
Some examples:

**Predictable Resource Locations -**
Because of the popularity of a small number of server types, platforms, and package formats, resources such as [logfiles and administrative directories](http://www.owasp.org/index.php/Forced_browsing) are typically located in a small number of [predictable locations](http://projects.webappsec.org/Predictable-Resource-Location).
FuzzDB contains a comprehensive database of these, sorted by platform type, language, and application, making brute force testing less brutish.
(https://github.com/fuzzdb-project/fuzzdb/tree/master/discovery/predictable-filepaths)

**Attack Patterns -**
Categorized by platform, language, and attack type, malicious and malformed inputs known to cause information leakage and exploitation have been collected into sets of test cases.
FuzzDB contains comprehensive lists of [attack payloads](https://github.com/fuzzdb-project/fuzzdb/tree/master/attack-payloads) known to cause issues like OS command injection, directory listings, directory traversals, source exposure, file upload bypass, authentication bypass, http header crlf injections, and more.
(https://github.com/fuzzdb-project/fuzzdb/tree/master/attack)

**Response Analysis -**
Since system responses also contain predictable strings, FuzzDB contains a set of regex pattern dictionaries such as interesting error messages to aid detection software security defects, lists of common Session ID cookie names, and more.
(https://github.com/fuzzdb-project/fuzzdb/wiki/regexerrors)

**Other useful stuff -**
Webshells, common password and username lists, and some handy wordlists.
(https://github.com/fuzzdb-project/fuzzdb/tree/master/web-backdoors) etc etc etc

**Documentation -**
Helpful documentation and cheatsheets sourced from around the web that are relevant to the payload categories are also provided. Many directories contain a README.md file with usage notes.
(https://github.com/fuzzdb-project/fuzzdb/tree/master/docs)


# Why was FuzzDB created? #

The sets of payloads currently built in to open source fuzzing and scanning software are poorly representative of the total body of potential attack patterns. Commercial scanners are a bit better, but not much. However, commercial tools also have a downside, in that that they tend to lock these patterns away in obfuscated binaries.

Furthermore, it's impossible for a human pentester to encounter and memorize all permutations of the meta characters and hex encoding likely to cause error conditions to arise.

FuzzDB was created to aggregate all known attack payloads and common predictable resource names into usable fuzzer payload lists, categorized by function and platform, and make them freely available under an Open Source license. It is immediately usable by web application penetration testers and security researchers.

Released under the dual New BSD and Creative Commons by Attribution licenses, FuzzDB can be leveraged to improve the test cases built into open source and commercial testing software.


# How was the data collected? #

Lots of hours of research while performing penetration tests:
  * analysis of default app installs
  * analysis of system and application documentation
  * analysis of error messages
  * researching old web exploits for repeatable attack strings
  * scraping scanner payloads from  http logs
  * various books, articles, blog posts, mailing list threads
  * other open source fuzzers and pentest tools

and the input of contributors: https://github.com/fuzzdb-project/fuzzdb/graphs/contributors


# How to Use fuzzdb #

FuzzDB is like an open source application security scanner, without the scanner.

The most common use case is with HTTP proxy and fuzzing tools such as 
  * OWASP Zap proxy, for which FuzzDB is available as a plugin. (https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project). 
  * With Burp Proxy's [intruder](http://portswigger.net/intruder/) module. The regex/errors.txt file can be loaded to [pattern match the server responses](https://github.com/fuzzdb-project/fuzzdb/wiki/regexerrors).

Other ways fuzzdb is often used:
  * to test web services
  * as malicious input payloads for testing non-HTTP network aware application with custom fuzzing tools
  * as malicious input payloads for testing GUI or command line software with standard test automation tools
  * incorporating the patterns into Open Source software, or into your own commercial product
  * in training materials and documentation
  * to learn about software exploitation techniques


# Who #

FuzzDB was created by Adam Muntner (amuntner @ gmail.com)

The FuzzDB license is New BSD and Creative Commons by Attribution. I want this project to be freely available in order to make the patterns contained within obsolete. If you use this project in your work, research, or commercial product, you are required to cite it. That's it.

FuzzDB (c) Copyright Adam Muntner, 2010-2016

Portions copyrighted by others, as noted in commit comments and README.md files. 
