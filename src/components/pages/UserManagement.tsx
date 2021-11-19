/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useCallback, VFC } from "react";
import { Center, Spinner, Wrap, WrapItem, Modal, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";

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
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
              <p>test</p>
          </ModalContent>
        </Modal>
    </>
  );
});