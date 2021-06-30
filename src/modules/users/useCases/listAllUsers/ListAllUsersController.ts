import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const all = this.listAllUsersUseCase.execute(request.params);

      return response.json(all);
    } catch (error) {
      throw new Error("Failed to list users");
    }
  }
}

export { ListAllUsersController };
