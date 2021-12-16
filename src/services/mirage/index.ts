import {createServer, Factory, Model} from 'miragejs';
import faker from 'faker';

type Usuario = {
	id: number;
	nome: string;
	email: string;
	created_at: string;
}

export function makeServer() {
	const server = createServer({
		
		models: {
			usuario: Model.extend<Partial<Usuario>>({})
		},
		
		factories: {
			usuario: Factory.extend({
				id(i) {
					return i;
				},
				nome(i) {
					return `Usuário ${i}`;
				},
				email(){
					return faker.internet.email().toLowerCase();
				},
				createdAt() {
					return faker.date.recent(10)
				}
			})
		},
		
		seeds(server) {
			server.createList('usuario', 10);
		},
		
		routes() {
			
			this.namespace = 'api';
			this.timing = 750;
			
			this.get('/usuarios');
			this.post('/usuarios');
			
			this.namespace = '';
			this.passthrough();
		}
	});
	
	return server;
}