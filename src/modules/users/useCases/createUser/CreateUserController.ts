import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      this.createUserUseCase.execute(request.body);
      return response.status(201).send();
    } catch (error) {
      throw new Error("Failed to create new user");
    }
  }
}

export { CreateUserController };
