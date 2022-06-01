import {
  HStack,
  Text,
  Box,
  Wrap,
  WrapItem,
  Avatar,
  ButtonGroup,
  Skeleton,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaRegBell } from 'react-icons/fa';

import { Button } from '../buttons/Button';

import { Dropdown } from '../dropdown/Dropdown';
import { IconButton } from '../buttons/IconButton';

export type Props = {
  name?: string | null;
  avatarUrl?: string | null;
  onOpen: () => void;
  isLoading: boolean;
  signOut: () => Promise<void>;
};

// TODO: Move avatar to its own component
export const Header = ({
  onOpen,
  isLoading,
  name,
  avatarUrl,
  signOut,
}: Props): JSX.Element => {
  const isSignedIn = !isLoading && Boolean(name);
  const isLoaded = !isLoading;

  return (
    <HStack
      bgColor="brand.header"
      color="brand.text"
      h="8rem"
      px={8}
      justifyContent="space-between"
      borderBottom="2px solid"
      borderColor="brand.border"
    >
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          codebarker.
        </Text>
      </Box>
      <HStack spacing={6}>
        {!isSignedIn && (
          <ButtonGroup spacing={2}>
            <Button onClick={onOpen}>Sign Up</Button>
            <Button variant="secondary" onClick={onOpen}>
              Sign In
            </Button>
          </ButtonGroup>
        )}
        {isSignedIn && (
          <>
            <HStack spacing={4} display={{ base: 'none', sm: 'flex' }}>
              <Skeleton
                isLoaded={isLoaded}
                borderRadius="full"
                startColor="brand.panel"
                endColor="brand.headerShade"
              >
                <Wrap>
                  <WrapItem>
                    <Avatar
                      name={name!}
                      src={
                        avatarUrl ??
                        `https://avatars.dicebear.com/api/avataaars/${name!}.svg?`
                      }
                      userSelect="none"
                    />
                  </WrapItem>
                </Wrap>
              </Skeleton>
              <Skeleton
                isLoaded={isLoaded}
                startColor="brand.panel"
                endColor="brand.headerShade"
              >
                <Text
                  textTransform="capitalize"
                  fontWeight="600"
                  userSelect="none"
                >
                  {name}
                </Text>
              </Skeleton>
            </HStack>
            {isSignedIn && (
              <ButtonGroup spacing={2}>
                <IconButton
                  aria-label="your notifcations"
                  icon={<FaRegBell />}
                />
                <Dropdown>
                  <Link href="/">
                    <Dropdown.MenuItem>Home</Dropdown.MenuItem>
                  </Link>
                  <Link href="/learn">
                    <Dropdown.MenuItem>Learn</Dropdown.MenuItem>
                  </Link>
                  <Dropdown.MenuDivider color="brand.border" />
                  <Dropdown.MenuItem onClick={signOut}>
                    sign out
                  </Dropdown.MenuItem>
                </Dropdown>
              </ButtonGroup>
            )}
          </>
        )}
      </HStack>
    </HStack>
  );
};
