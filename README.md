NEWS: MOVING TO GITHUB, STAY TUNED FOR FURTHER ANNOUNCEMENTS.


fuzzdb is the most comprehensive Open Source database of malicious inputs, predictable resource names, greppable strings for server response messages, and other resources like web shells.

# Download #

**Preferred method is to check out sources via svn, since new payloads are added frequently**
```
svn checkout http://fuzzdb.googlecode.com/svn/trunk/ fuzzdb-read-only
```

While in the fuzzdb dir, you can update your local repo with the command
```
svn update
```

You can also browse the [fuzzdb svn repo sources](http://code.google.com/p/fuzzdb/source/browse/#svn/trunk).


# What's in fuzzdb? #

**Predictable Resource Locations -**
Because of the popularity of a small number of server types, platforms, and package formats, resources such as [logfiles and administrative directories](http://www.owasp.org/index.php/Forced_browsing) are typically located in a small number of [predictable locations](http://projects.webappsec.org/Predictable-Resource-Location).
FuzzDB contains a comprehensive database of these, sorted by platform type, language, and application, making brute force testing less brutish.

**Attack Patterns -**
Categorized by platform, language, and attack type, malicious and malformed inputs known to cause information leakage and exploitation have been collected into sets of test cases.
FuzzDB contains comprehensive lists of [attack payloads](http://code.google.com/p/fuzzdb/source/browse/#svn/trunk/attack-payloads) known to cause issues like OS command injection, directory listings, directory traversals, source exposure, file upload bypass, authentication bypass, http header crlf injections, and more.

**Response Analysis -**
Since system responses also contain predictable strings, fuzzdb contains a [set of regex pattern dictionaries](http://code.google.com/p/fuzzdb/wiki/regexerrors) such as interesting error messages to aid detection software security defects, lists of common Session ID cookie names, and more.

**Other useful stuff -**
Webshells, common password and username lists, and some handy wordlists.

**Documentation -**
Helpful documentation and cheatsheets sourced from around the web that are relevant to the payload categories are also provided.

# Why was fuzzdb created? #

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
  * scraping scanner patterns from  http logs
  * various books, articles, blog posts, mailing list threads
  * patterns gleaned from other open source fuzzers and pentest tools

FuzzDB is like an open source web application security scanner, without the scanner.

# How to Use fuzzdb #

  * The most immediate, hands-on way is to use they payload files for web security testing with Burp Proxy's [intruder](http://portswigger.net/intruder/) module. The regex/errors.txt file can be loaded to [pattern match the server responses](http://code.google.com/p/fuzzdb/wiki/regexerrors).

  * Use the patterns to test web services.

  * Use the patterns as malicious input payloads for testing non-HTTP network aware application with custom fuzzing tools.

  * Use the patterns as malicious input payloads for testing GUI or command line software with standard test automation tools.

  * Incorporate the patterns into Open Source software, or into your own commercial product.

  * Use the patterns in training materials and documentation.

# Latest news #

```
*Post-1.08, new in 1.09:*
  * Thanks to lawKnee, new features added to the cfm web shell, and a nifty sql web shell
  * The data dir from the tool raft, containing paths extracted from the "disallow" fields from the robots.txt files of 1.7 million websites, presented at BlackHat 2011 (https://raft.googlecode.com/)
  * Added new attack payload file os-cmd-execution/OSCommandInject.Windows.fuzz.txt and a case to the unix version of the file that breaks out of regex with a $
  * Many more platforms added to discovery, check the svn logs, too many to list here
  * /attack-payloads/BizLogic/CommonMethods.fuzz.txt - thanks to Tim Brown and darkraver
  * /generic/interesting-files-siteminder.txt - CA Siteminder discovery
  * /generic/proxy-conf.txt - Various popular locations for proxy.pac files
  * Updated sqli attacks using new filename convention to make it simpler to navigate fuzzdb and include it in other projects, other directories will follow. Thanks to Nathan Hamiel and Marcin Wielgoszewski for prompting me to create the new namespace format. Fixed a few misplaced SQLI test cases thanks to Michael Brooks careful eye.

*Previous updates*
  * fuzzdb-1.08.tgz added: command exec cheatsheets for unix and windows, netcat cheatsheet, microsoft sharepoint test cases, file upload filter bypass test cases, invalid microsoft filenames, javascript events, html tags, null byte test cases, updated _readme.txt
  * fuzzdb-1.07.tgz Lots more sqli.Discovery patterns of common files containing passwds and common login filenames. (4/28/2010)
  * Added more sqli attack and enumeration patterns, reorganized sqli tree, in svn not in tarball yet (4/22/2010)
  * Added more web shells (4/20/2010)
  * FreeBSD !FreshPorts now carries fuzzdb [http://www.mail-archive.com/cvs-all@freebsd.org/msg166332.html] (4/19/2010)
  * Latest version: scrubbed spaces from file and path names for better shell navigation, rearranged files using a functional approach, added the /regex dir containing things you might want to look for on returned pages. Initial checkin contains a large set of error messages and list of common session ID cooke names.(4/17/2010)
```

# Who #

This SVN repository and the files were assembled by Adam Muntner (unix23 @ gmail.com)

The FuzzDB license is New BSD and Creative Commons by Attribution. I want this project to be freely available in order to make the patterns contained within obsolete. If you use this project in your work, research, or commercial product, you are required to cite it. That's it.

fuzzdb (c) Copyright Adam Muntner, 2010-2015

Portions copyrighted by others, see the package  and svn checkin comments for details.