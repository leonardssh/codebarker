import {
  Box,
  Heading,
  VStack,
  Text,
  CircularProgress,
  Container,
  CircularProgressLabel,
} from '@chakra-ui/react';
import { ButtonLink } from './ButtonLink';

type Props = {
  progress: number;
};

export const Banner = ({ progress }: Props): JSX.Element => {
  return (
    <Box bgColor="brand.600" boxShadow="card" borderRadius={16}>
      <Container
        display="flex"
        justifyContent="space-between"
        color="brand.text"
        width="full"
        p={10}
        alignItems="center"
        maxW="1400px"
        flexDir={{
          base: 'column',
          lg: 'row',
        }}
      >
        <VStack
          textAlign={{ base: 'center', lg: 'start' }}
          alignItems={{ base: 'center', lg: 'flex-start' }}
          maxW="70ch"
          spacing={4}
        >
          <Heading
            as="h1"
            textTransform="uppercase"
            fontSize={{ base: '3xl', lg: '5xl' }}
          >
            Start learning
          </Heading>
          <Text fontSize={{ base: 'xl', lg: '2xl' }} lineHeight="1.8">
            Become a better developer by finding code smells in real source code
            and help authors avoid spaghetti.
          </Text>
          <ButtonLink href="/learn">Start Learning</ButtonLink>
        </VStack>

        <Box mt={{ base: 6, lg: 0 }}>
          <CircularProgress
            value={progress}
            size="250px"
            thickness={2}
            position="relative"
            color="brand.accent"
            trackColor="brand.400"
          >
            <CircularProgressLabel>{progress}%</CircularProgressLabel>
          </CircularProgress>
        </Box>
      </Container>
    </Box>
  );
};
