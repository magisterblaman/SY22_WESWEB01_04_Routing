import http from 'http';
import fs from 'fs/promises';

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

		let links = [
			{
				"link": "/menu/green",
				"text": "Vegetarisk meny"
			},
			{
				"link": "/menu/meat",
				"text": "Köttmeny"
			},
			{
				"link": "/menu/dog",
				"text": "Hundmeny"
			},
			{
				"link": "/menu/fish",
				"text": "Fiskmeny"
			}
		];
		/*

		<li><a href="green">Vegetarisk meny</a></li>
		<li><a href="meat">Köttmeny</a></li>

		*/

		let linksString = '';
		for (let i = 0; i < links.length; i++) {
			let linkObj = links[i];
			linksString += '<li><a href="' + linkObj.link + '">' + linkObj.text + '</a></li>';			
		}

		let template = (await fs.readFile('templates/menu.volvo')).toString();

		template = template.replaceAll('%{menuLinks}%', linksString);

		response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
		response.write(template);
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

		let template = (await fs.readFile('templates/submenu.volvo')).toString();

		template = template.replaceAll('%{menuTitle}%', 'Vegetarisk meny');
		template = template.replaceAll('%{menuDescription}%', 'Här hittar du vår meny för dig som inte äter kött..........');

		response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
		response.write(template);
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
		let template = (await fs.readFile('templates/submenu.volvo')).toString();

		template = template.replaceAll('%{menuTitle}%', 'Köttmeny');
		template = template.replaceAll('%{menuDescription}%', 'KÖTT MMMMMMMM');

		response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
		response.write(template);
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
		let template = (await fs.readFile('templates/submenu.volvo')).toString();

		template = template.replaceAll('%{menuTitle}%', 'Hundmeny');
		template = template.replaceAll('%{menuDescription}%', 'Mat för/av hundar');

		response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
		response.write(template);
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
		let template = (await fs.readFile('templates/submenu.volvo')).toString();

		template = template.replaceAll('%{menuTitle}%', 'Fiskmeny');
		template = template.replaceAll('%{menuDescription}%', 'Hmmmmmm luktar bekant');

		response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
		response.write(template);
		response.end();
		return;
	}

	response.writeHead(404, { 'Content-Type': 'text/plain' });
	response.write('404 Not Found');
	response.end();
	return;
}