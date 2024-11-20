import http from 'http';
import fs from 'fs/promises';

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

	/*

	<li>Kassör</li>
	<li>Maskot</li>
	<li>Kock</li>
	...

	*/

	let jobOpportunities = ['Kassör', 'Maskot', 'Kock', 'Hundslaktare', 'Städare', 'Chef'];

	let opportunitiesString = '';
	for (let i = 0; i < jobOpportunities.length; i++) {
		opportunitiesString += '<li>' + jobOpportunities[i] + '</li>';
	}

	let template = (await fs.readFile('templates/careers.volvo')).toString();

	template = template.replaceAll('%{opportunities}%', opportunitiesString);

	response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
	response.write(template);
	response.end();
	return;
}