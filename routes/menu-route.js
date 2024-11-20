import http from 'http';

/**
 * 
 * @param {string[]} pathSegments 
 * @param {http.IncomingMessage} request 
 * @param {http.ServerResponse} response 
 */
export async function handleMenuRoute(pathSegments, request, response) {
	let nextSegment = pathSegments.shift();

	if (!nextSegment) {
		if (request.method !== 'GET') {
			response.writeHead(405, { 'Content-Type': 'text/plain' });
			response.write('405 Method Not Allowed');
			response.end();
			return;
		}
		response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
		response.write(`
			<html>
				<head>

				</head>
				<body>
					<h1>Meny</h1>
				</body>
			</html>
		`);
		response.end();
		return;
	}

	if (nextSegment === 'green') {
		if (pathSegments.length > 0) {
			response.writeHead(404, { 'Content-Type': 'text/plain' });
			response.write('404 Not Found');
			response.end();
			return;
		}
		if (request.method !== 'GET') {
			response.writeHead(405, { 'Content-Type': 'text/plain' });
			response.write('405 Method Not Allowed');
			response.end();
			return;
		}
		response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
		response.write(`
			<html>
				<head>

				</head>
				<body>
					<h1>Vegetarisk meny</h1>
				</body>
			</html>
		`);
		response.end();
		return;
	}

	if (nextSegment === 'meat') {
		if (pathSegments.length > 0) {
			response.writeHead(404, { 'Content-Type': 'text/plain' });
			response.write('404 Not Found');
			response.end();
			return;
		}
		if (request.method !== 'GET') {
			response.writeHead(405, { 'Content-Type': 'text/plain' });
			response.write('405 Method Not Allowed');
			response.end();
			return;
		}
		response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
		response.write(`
			<html>
				<head>

				</head>
				<body>
					<h1>Köttmeny</h1>
				</body>
			</html>
		`);
		response.end();
		return;
	}

	if (nextSegment === 'dog') {
		if (pathSegments.length > 0) {
			response.writeHead(404, { 'Content-Type': 'text/plain' });
			response.write('404 Not Found');
			response.end();
			return;
		}
		if (request.method !== 'GET') {
			response.writeHead(405, { 'Content-Type': 'text/plain' });
			response.write('405 Method Not Allowed');
			response.end();
			return;
		}
		response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
		response.write(`
			<html>
				<head>

				</head>
				<body>
					<h1>Hundmeny</h1>
				</body>
			</html>
		`);
		response.end();
		return;
	}

	if (nextSegment === 'fish') {
		if (pathSegments.length > 0) {
			response.writeHead(404, { 'Content-Type': 'text/plain' });
			response.write('404 Not Found');
			response.end();
			return;
		}
		if (request.method !== 'GET') {
			response.writeHead(405, { 'Content-Type': 'text/plain' });
			response.write('405 Method Not Allowed');
			response.end();
			return;
		}
		response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
		response.write(`
			<html>
				<head>

				</head>
				<body>
					<h1>Fiskmeny</h1>
				</body>
			</html>
		`);
		response.end();
		return;
	}

	response.writeHead(404, { 'Content-Type': 'text/plain' });
	response.write('404 Not Found');
	response.end();
	return;
}