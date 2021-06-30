import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const updatedUser = this.turnUserAdminUseCase.execute(request.params);

    return response.json(updatedUser);
  }
}

export { TurnUserAdminController };
