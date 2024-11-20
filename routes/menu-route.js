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

	response.writeHead(501, { 'Content-Type': 'text/plain' });
	response.write('501 Not Implemented');
	response.end();
	return;
}