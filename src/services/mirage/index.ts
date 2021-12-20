import {createServer, Factory, Model, Response, ActiveModelSerializer} from 'miragejs';
import faker from 'faker';

type Usuario = {
	id: number;
	nome: string;
	email: string;
	created_at: string;
}

export function makeServer() {
	const server = createServer({
		serializers: {
			application: ActiveModelSerializer,
		},
		
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
			server.createList('usuario', 200);
		},
		
		routes() {
			
			this.namespace = 'api';
			this.timing = 750;
			
			this.get('/usuarios', function (schema, request) {
				const { pagina = 1, per_page = 10 } = request.queryParams;
				
				const total = schema.all('usuario').length;
				
				const inicioPagina = (Number(pagina) - 1) * Number(per_page);
				const fimPagina = inicioPagina + Number(per_page);
				
				const usuarios = this.serialize(schema.all('usuario')).usuarios.slice(inicioPagina, fimPagina);
				
				return new Response(
					200,
					{ 'x-total-count': String(total)},
					{ usuarios }
				)
			});
			this.post('/usuarios');
			this.get('/usuarios/:id');
			
			this.namespace = '';
			this.passthrough();
		}
	});
	
	return server;
}