import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const createdUser = this.createUserUseCase.execute(request.body);
      return response.status(201).json(createdUser).send();
    } catch (error) {
      throw new Error("Erro: Este email já está sendo utilizado");
    }
  }
}

export { CreateUserController };
