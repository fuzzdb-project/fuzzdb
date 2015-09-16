File Upload Fuzzfiles- File Name Filter Bypass Notes 

see:  http://cwe.mitre.org/data/definitions/434.html

* kinds of file upload verifications:
 * content-type
 * filename extension verificationi (whitelist, blacklist)
 * file content checking
 * client side, ha ha ha

File notes:

**alt-extensions-asp.fuzz.txt**

**alt-extensions-coldfusion.fuzz.txt**

**alt-extensions-jsp.fuzz.txt**

**alt-extensions-perl.fuzz.txt**

**alt-extensions-php.fuzz.txt**

Alternative ways of expressing file extensions that will be interpreted correctly by the target filesystem/app and can be used to bypass blacklist filters


**file-ul-filter-bypass-commonly-writable-directories.fuzz.txt**

File directory names that experience has shown are often writable


**file-ul-filter-bypass-microsoft-asp-filetype-bf.fuzz.txt**

``` {ASPSCRIPT} ``` gets regex replaced with the shell or other file you are trying to upload, {EXT} should be brute-forced with payloads from discovery/filename-bruteforce/file-extensions/, since some file upload types may be allowed that are not listed.


**file-ul-filter-bypass-microsoft-asp.fuzz.txt**

this file contains a number of common predictable values. Add more if other file types are allowed, or use the filetype-bf version of this fuzzfile - ``` {ASPSCRIPT} ``` gets regex replaced. 


**file-ul-filter-bypass-ms-php.fuzz.txt**

**file-ul-filter-bypass-x-platform-php.fuzz.txt**

php on microsoft, cross-platform. use both on ms. 

Use exiftool http://www.sno.phy.queensu.ca/~phil/exiftool/  to create a .jpg image with the meta comment field set to:

``` <?php phpinfo(); ?> ```

then regex replace ``` {PHPSCRIPT} ``` in the fuzzfile payload with the name of your .jpg file in the target directory


**invalid-filenames-microsoft.fuzz.txt**

Useful for causing error messages that contain an absolute drivepath, such as if you don't know where the file uploader puts files

regex replace ``` {EXT} ``` with allowed extension type 


**file-ul-filter-bypass-x-platform-generic.fuzz.txt**

These might bypass a file upload blacklist but be written in a way that leaves them executable because of the filetype
regex replace ``` {PHPSCRIPT} ``` with your script name


**invalid-filenames-linux.fuzz.txt**

invalid filenames under linux, and since there aren't too many of those (there's one), other filepaths that may cause problems.  these can be used to attempt to cause an error condition during file upload bypass attempts which might reveal an absolute path. Useful if you're not sure where your files are landing.


**invalid-filesystem-chars-microsoft.fuzz.txt**

list of invalid characters for windows filesystem - these can be used to attempt to cause an error condition during file upload bypass attempts which might reveal an absolute path. Useful if you're not sure where your files are landing. fuzz these into a filename during upload attempts


**Addtl Tips:**

**For mod_cgi Server Side Include upload attacks:**

``` <!--#exec cmd="ls" --> ```

or, on Windows

``` <!--#exec cmd="dir" --> ```

Sometimes you can overwrite .htaccess in an upload folder on Apache httpd, if so, 
try setting jpg mimetype handler to executable. If you can set the target directory, try to fuzz the 
list of all dirs you've enumerated on the servers, and try the commonly writable directory fuzzfile.

** example .htaccess entry that sets mime type .jpg to be executable:**

 ``` AddType application/x-httpd-php .jpg ```

