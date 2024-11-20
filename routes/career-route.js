import http from 'http';

export async function handleCareerRoute(pathSegments, request, response) {
	// /careers/balblallba/blalbba
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
				<h1>Karriärsmöjligheter</h1>
			</body>
		</html>
	`);
	response.end();
	return;
}