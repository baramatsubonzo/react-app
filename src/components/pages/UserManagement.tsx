/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, VFC } from "react";
import { Spinner, Wrap, WrapItem } from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers()

  useEffect(() => getUsers(), [])

  return (
    <>
      { loading ? <Spinner /> : (
        <Wrap p={{ base: 4, md: 10 }}>
          <WrapItem>
            <UserCard
              imageUrl="https://source.unsplash.com/random"
              userName="bonzo"
              fullName="Shota Matsubara"
            />
          </WrapItem>
        </Wrap>
        )}
    </>
  );
});