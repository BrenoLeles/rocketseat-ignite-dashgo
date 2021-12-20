import {useQuery, UseQueryOptions} from "react-query";
import {api} from "../api";

type Usuario = {
	id: number;
	nome: string;
	email: string;
	createdAt: string;
}

type getUsuariosResponse = {
	totalRegistros: number;
	usuarios: Usuario[];
}

export async function getUsuarios(pagina: number): Promise<getUsuariosResponse> {
	const {data, headers} = await api.get('usuarios', {
		params: {
			pagina
		}
	});
	
	const totalRegistros = Number(headers['x-total-count']);
	
	const usuarios = data.usuarios.map(usuario => {
		return {
			id: usuario.id,
			nome: usuario.nome,
			email: usuario.email,
			createdAt: new Date(usuario.id).toLocaleDateString('pt-BR', {
				day: '2-digit',
				month: 'long',
				year: "numeric"
			}),
		}
	})
	
	return {usuarios, totalRegistros};
}

export function useUsuarios(pagina: number, options: UseQueryOptions) {
	return useQuery(['usuarios', pagina], () => getUsuarios(pagina), {
		staleTime: 1000 * 10 * 60,
		...options
	});
}