/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useCallback, VFC } from "react";
import {
  Stack,
  Center,
  Spinner,
  Wrap,
  WrapItem,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getUsers, users, loading } = useAllUsers()

  useEffect(() => getUsers(), [])

  const onClickUser = useCallback(() => onOpen(), [])

  return (
    <>
      { loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
        ) : (
          <Wrap p={{ base: 4, md: 10 }}>
            {users?.map((user) => (
              <WrapItem key={user.id} mx="auto">
                <UserCard
                  imageUrl="https://source.unsplash.com/random"
                  userName={user.username}
                  fullName={user.name}
                  onClick={onClickUser}
                />
              </WrapItem>
            ))}
          </Wrap>
        )}
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          autoFocus={false}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent pb={6}>
            <ModalHeader>ユーザー詳細</ModalHeader>
            <ModalCloseButton />
            <ModalBody mx={4}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>名前</FormLabel>
                  <Input value="bonzo" isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>フルネーム</FormLabel>
                  <Input value="Shota Matsubara" isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>MAIL</FormLabel>
                  <Input value="bonzo@example.com" isReadOnly />
                </FormControl>
                <FormControl>
                  <FormLabel>TEL</FormLabel>
                  <Input value="000-xxxx-xxxx" isReadOnly />
                </FormControl>
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
    </>
  );
});