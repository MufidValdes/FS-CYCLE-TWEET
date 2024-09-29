import { UserEntity } from "../../../types/auth-dto";

export type LoginRequestDTO = Pick<UserEntity, "email" | "password">;

export type LoginResponseDTO = {
  user: UserEntity;
  token: string;
};

export type RegisterRequestDTO = Pick<
  UserEntity,
  "name" | "email" | "password"
>;

export type RegisterResponseDTO = LoginResponseDTO;

export type UserStoreDTO = Omit<UserEntity, "password">;
