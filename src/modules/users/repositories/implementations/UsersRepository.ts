import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const userFound = this.users.find((user) => user.id === id);

    if (userFound) {
      return userFound;
    }
    return undefined;
  }

  findByEmail(email: string): User | undefined {
    const userFound = this.users.find((user) => user.email === email);

    if (userFound) {
      return userFound;
    }
    return undefined;
  }

  turnAdmin(receivedUser: User): User {
    const updatedUser = receivedUser;

    updatedUser.admin = true;
    updatedUser.updated_at = new Date();

    return updatedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
