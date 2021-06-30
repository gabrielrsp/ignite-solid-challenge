import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const users = this.usersRepository.list();
    const emailExists = users.find((user) => user.email === email);

    if (!emailExists) {
      const user = this.usersRepository.create({ name, email });

      return user;
    }
    throw new Error("Erro: Este email já está sendo utilizado");
  }
}

export { CreateUserUseCase };
