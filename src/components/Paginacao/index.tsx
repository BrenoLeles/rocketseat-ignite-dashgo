import {Box, Stack} from "@chakra-ui/react";
import {ItemPaginacao} from "./ItemPaginacao";

export function Paginacao() {
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
			
			<ItemPaginacao numPagina={1} seAtual />
			<ItemPaginacao numPagina={2} />
			<ItemPaginacao numPagina={3} />
			<ItemPaginacao numPagina={4} />
			<ItemPaginacao numPagina={5} />
		
		</Stack>
	</Stack>
	)
};