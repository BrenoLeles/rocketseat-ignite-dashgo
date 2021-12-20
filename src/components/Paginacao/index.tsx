import {Box, Stack, Text} from "@chakra-ui/react";
import {ItemPaginacao} from "./ItemPaginacao";

interface PaginacaoProps {
	totalRegistros: number;
	registrosPorPagina?: number;
	paginaAtual?: number;
	onMudarPagina: (pagina: number) => void;
}

const qtdVizinhos = 1;

function gerarArrayPaginasa(de:number, para:number) {
	return [...new Array( para - de )]
		.map( (_, index) => {
			return de + index + 1;
		})
		.filter(pagina => pagina > 0)
}

export function Paginacao({totalRegistros, onMudarPagina, registrosPorPagina = 10, paginaAtual = 1}: PaginacaoProps) {
	
	const ultimaPagina = Math.floor(totalRegistros / registrosPorPagina );
	
	const paginasAnteriores = paginaAtual > 1
		? gerarArrayPaginasa(paginaAtual - 1 - qtdVizinhos, paginaAtual - 1) : []
	
	const proximasPaginas = paginaAtual < ultimaPagina
		? gerarArrayPaginasa(paginaAtual, Math.min(paginaAtual + qtdVizinhos, ultimaPagina)) : []
	
	return (<Stack
		direction={["column", "row"]}
		spacing="6"
		mt="8"
		justify="space-between"
		align="center"
	>
			
		<Box>
			<strong>0 - 10</strong> de <strong>100</strong>
		</Box>
		<Stack direction="row" spacing="2">
			
			{paginaAtual > (1 + qtdVizinhos) && (
				<>
					<ItemPaginacao onMudarPagina={onMudarPagina} numPagina={1} />
					{ paginaAtual > (2 + qtdVizinhos) && (
						<Text color="gray.300" width="8" align="center">...</Text>
					)}
				</>
			)}
			
			{ (paginasAnteriores || []).map( pagina => {
				return <ItemPaginacao onMudarPagina={onMudarPagina} numPagina={pagina} key={pagina} />
			})}
			
			<ItemPaginacao onMudarPagina={onMudarPagina} numPagina={paginaAtual} seAtual />
			
			{ (proximasPaginas || []).map( pagina => {
				return <ItemPaginacao onMudarPagina={onMudarPagina} numPagina={pagina} key={pagina} />
			})}
			
			{(paginaAtual + qtdVizinhos) < ultimaPagina && (
				<>
					{ (paginaAtual + 1 + qtdVizinhos) < ultimaPagina && (
						<Text color="gray.300" width="8" align="center">...</Text>
					)}
					<ItemPaginacao onMudarPagina={onMudarPagina} numPagina={ultimaPagina} />
				</>
			)}
			
		</Stack>
	</Stack>
	)
};