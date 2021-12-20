import {Button} from "@chakra-ui/react";

interface ItemPaginacaoProps {
	seAtual?: boolean
	numPagina: number,
	onMudarPagina: (pagina: number) => void;
}

export function ItemPaginacao({numPagina,onMudarPagina,  seAtual = false}: ItemPaginacaoProps) {
	if(seAtual) {
		return (
			<Button
				size="sm"
				fontSize="xs"
				width="4"
				bg="pink"
				disabled
				_disabled={{
					bg: 'pink.500',
					cursor: 'default'
				}}
			>
				{numPagina}
			</Button>
		)
	}
	return (
		<Button
			size="sm"
			fontSize="xs"
			width="4"
			bg="gray.700"
			_hover={{
				bg: 'gray.500'
			}}
			onClick={() => onMudarPagina(numPagina)}
		>
			{numPagina}
		</Button>
	)
};