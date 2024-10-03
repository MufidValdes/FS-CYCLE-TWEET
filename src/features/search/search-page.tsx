// src/components/PageSearch.tsx
import { Box, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import SearchBar from "./search-bar";
import ItemPost from "../../component/ui/item-post";
import { searchUsers } from "../../api/api-user";
import { UserEntity } from "../../app/types/auth-dto";

export default function PageSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, error } = useQuery<UserEntity[]>({
    queryKey: ["searchUsers", searchTerm],
    queryFn: () => searchUsers(searchTerm),
    enabled: searchTerm.length > 0, // Hanya fetch data jika ada input
  });

  return (
    <Box textAlign={"center"} padding={4}>
      <SearchBar onSearch={(value) => setSearchTerm(value)} />
      {!searchTerm && (
        <Box m={"auto"} textAlign={"center"} w={"348px"} padding={4}>
          <Text fontSize={"20px"} fontWeight={700} lineHeight={"28px"}>
            Write and search something
          </Text>
          <Text
            fontSize={"14px"}
            fontWeight={400}
            lineHeight={"20px"}
            color={"brand.fontSecondary"}
          >
            Try searching for something else or check the spelling of what you
            typed.
          </Text>
        </Box>
      )}

      {searchTerm && isLoading && <Text>Loading...</Text>}
      {searchTerm && error && <Text>Error while searching users</Text>}

      {data?.length === 0 && (
        <Text
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"20px"}
          color={"tweet.gray"}
        >
          No users found
        </Text>
      )}

      {data && data.length > 0 && (
        <Box mt={4}>
          {data.map((user) => (
            <ItemPost
              key={user.id}
              username={user.name}
              handle={user.username}
              avatarUrl={user.avatarUrl || "default-avatar-url.png"}
              postTime={""} // Tidak ada waktu posting pada hasil pencarian user
              postContent={`User Bio: ${user.bio || "No bio available"}`}
              likesCount={0} // Tidak ada like pada hasil pencarian user
              repliesCount={0} // Tidak ada reply pada hasil pencarian user
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
