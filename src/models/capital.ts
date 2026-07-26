// @vsc repo:vsc-project-113-backend file:src/models/capital.ts task:b13-src-models-capital-ts module:backend session:113
export interface Capital {
  id: number;
  name: string;
  country: string;
  timezone: string;
  offsetMinutes: number;
}
