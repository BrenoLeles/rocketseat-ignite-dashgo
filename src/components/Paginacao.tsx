import { Stack, Button, Box } from '@chakra-ui/react';

export function Paginacao() {
	return (
		<Stack
			direction="row"
			spacing="6"
			mt="8"
			justify="space-between"
			align="center"
		>
			<Box>
				<strong>0 - 10</strong> de <strong>100</strong>
			</Box>
			<Stack direction="row" spacing="2">
				
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
					1
				</Button>
				<Button
					size="sm"
					fontSize="xs"
					width="4"
					bg="gray.700"
					_hover={{
						bg: 'gray.500'
					}}
				>
					2
				</Button>
			</Stack>
		</Stack>
	)
}