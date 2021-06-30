import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listAllUsersUseCase.execute(request.headers.user_id);

    return response.json(all);
  }
}

export { ListAllUsersController };
