const open = require('./node_modules/open')
const { method, parameters } = {method: 'query', parameters: 'test'}
function run(cmd, callback) {
    var spawn = require('child_process').spawn;
    var command = spawn(cmd);
    var result = '';
    command.stdout.on('data', function(data) {
         result += data.toString();
    });
    command.on('close', function(code) {
        return callback(result);
    });
    command.on('error', function(err) {
        return callback(null, err);
    });
}

if (method === "query") {
	// run('op signin  && op item list', (text) => {
	// 	console.log(text)
	// 	// var result = JSON.parse(text);
	// 	// console.log(result);
	// })
	console.log(JSON.stringify(
		{
			"result": [{
				"Title": "Hello World Typescript",
				"Subtitle": "Showing your query parameters: " + parameters + ". Click to open Flow's website",
				"JsonRPCAction": {
                    "method": "do_something_for_query",
                    "parameters": ["https://github.com/Flow-Launcher/Flow.Launcher"]
                },
				"IcoPath": "Images\\app.png"
			}]
		}
	));
}

// if (method === "do_something_for_query") {
// 	url = parameters[0]
// 	do_something_for_query(url)
// }

// function do_something_for_query(url) {
// 	open(url);
// }

 

