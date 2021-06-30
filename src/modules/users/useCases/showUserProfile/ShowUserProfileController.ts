import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const profile = this.showUserProfileUseCase.execute(request.params);

    return response.json(profile);
  }
}

export { ShowUserProfileController };
