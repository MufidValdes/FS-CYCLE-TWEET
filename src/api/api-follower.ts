import { apiV1 } from "./api-config";

// Follow a user
export const followUser = async (followingId: number) => {
  const response = await apiV1.post('/followers', { followingId });
  return response.data;
};

// Unfollow a user
export const unfollowUser = async (followingId: number) => {
  const response = await apiV1.delete(`/followers/${followingId}`);
  return response.data;
};

// Get followers of a user
export const getFollowers = async (userId: number) => {
  const response = await apiV1.get(`/followers/${userId}`);
  return response.data;
};

// Get following list of a user
export const getFollowing = async (userId: number) => {
  const response = await apiV1.get(`/following/${userId}`);
  return response.data;
};
