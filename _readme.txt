fuzzdb: Web Fuzzing Discovery and Attack Pattern Database

****Introduction

Too much new software is vulnerable to the attack sequences of yesteryear. This suggests a testing approach: a comprehensive set of known attack pattern sequences can be leveraged for use in targeted fuzzing when testing for exploitable conditions in new applications.

This is especially useful for many filter bypass type exploits. Identical encoding sequences have been observed to bypass filters for more than one application. Examples can be observed in categories including xss, sqli, evil script upload, OS command execution, traversal issues, directory indexing bugs, source code revealing vulnerabilities, etc. In recent times, for example, new embedded webservers were discovered to be vulnerable to directory traversal issues triggered by encodings that exploited Microsoft IIS in 2000.

This approach is also useful for targeted use of brute force for discovery using, for example, lists of known vulnerable scripts sorted by platform type, default locations of critical files of popular apps, high quality lists of common directory names.

Primary sources used for attack pattern research:

-researching old web exploits for repeatable attack strings
-penetration tests i've performed in the past
-scraping scanner patterns from my own http logs
-various books, articles, blog posts
-documentation for popular applications
-analysis of default application installs

notable sources and other contributors:
-metasploit wmap http://www.metasploit.com/redmine/projects/framework/wiki/WMAP
-dirb http://www.open-labs.org/
-jbrofuzz http://www.owasp.org/index.php/Category:OWASP_JBroFuzz
-skipfish http://code.google.com/p/skipfish/
-rsnake's xss and rfi files http://ha.ckers.org/
-michael daw's web shell archive http://michaeldaw.org/
-joseph giron (joseph.giron13 (at) gmail.com)
-ron gutierrez - html tags and javascript events
-analysis of default app installs
-lists already submitted to OWASP Fuzzing Code DB by Wagner Elias, Eduardo Neves, Ulisses Castro, Adam Muntner http://www.owasp.org/index.php/Category:OWASP_Fuzzing_Code_Database#tab=News

Some files are derived primarily from other fuzzers, and are credited in the files with comments formatted like:

# This file is primarily derived from source xyz

Others have additional instructions for payload use in a similar comment format at the top of the file

****Download

Check out via svn:

svn checkout http://fuzzdb.googlecode.com/svn/trunk/ fuzzdb-read-only

Or, pick from a plethora of available svn clients: http://en.wikipedia.org/wiki/Comparison_of_Subversion_clients

Tarballs are available for download, but may not be as fresh as what's in the svn repo.

Browse the repo http://code.google.com/p/fuzzdb/source/browse/#svn/trunk


****Usage

I primarily use fuzzdb in the Intruder module of Portswigger's excellent Burp Suite Pro (http://portswigger.net/suite/), however, it can be used in any fuzzer or for manual testing. Fuzzdb also makes an interesting source of test cases for fuzzing binary applications with. 


****Who

This SVN repository and the files were assembled by Adam Muntner, a researcher and consultant at Gotham Digital Science (GDS). 

GDS is an international security services company with offices in New York City and London. GDS security specialists work with clients to assess risk and design, build, and maintain secure applications and networks.

http://www.gdssecurity.com

amuntner (@) gdssecurity.com
