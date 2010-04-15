fuzzdb: Web Fuzzing Discovery and Attack Pattern Database

Introduction

A comprehensive, up to date set of fuzzing patterns for discovery and attack.

Why?

Lots of new software is vulnerable to the attack sequences of yesteryear. Lists of attack pattern sequences that have been known to exploit security flaws in web applications in the past can be leveraged for use in targeted fuzzing of application parameters.

This is especially useful for many filter bypass type exploits. Identical encoding sequences have been observed to bypass filters for more than one application. Examples can be observed in categories including xss, sqli, evil script upload, OS command execution, traversal issues, directory indexing bug, source code revealing bugs, etc.

It's also useful for targeted use of brute force for discovery - lists of known vulnerable scripts sorted by platform type, default locations of critical files of popular apps, high quality lists of common directory names.

Primary sources used for attack pattern research:

research of old web exploits for repeatable attack strings
scraping scanner patterns from my own http logs
various books
metasploit wmap
dirb
jbrofuzz
existing cheatsheats such as for xss, rfi, etc
analysis of default app installs
lists already submitted to OWASP Fuzzing Code DB by Wagner Elias, Eduardo Neves, Ulisses Castro, Adam Muntner
Some files are derived primarily from other fuzzers, and are credited in the files with comments formatted like:

# This file is primarily derived from source xyz

Others have additional instructions for payload use in a similar comment format at the top of the file

Download

via svn: svn checkout http://fuzzdb.googlecode.com/svn/trunk/ fuzzdb-read-only

or pick from a plethora of available svn clients: http://en.wikipedia.org/wiki/Comparison_of_Subversion_clients tarballs are available for download, but may not be as fresh as what's in the svn repo.

Licensing

BSD and Creative Commons - totally free (as in beer and cost) for any use. My intent is for open source and commercial scanning products to improve, for web application penetration testers to have access to high-quality fuzzing pattern files, and, as a result, for the security of applications that people use every day to improve.

Who

This SVN repository was initially researched and assembled by Adam Muntner (unix23 @ gmail.com) He is the Managing Partner of QuietMove, Inc. http://www.quietmove.com

Please send more patterns!
