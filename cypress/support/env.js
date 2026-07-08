export const isContainer = () =>
  Cypress.config('baseUrl')?.includes('localhost') ?? false

export const isProduction = () =>
  Cypress.config('baseUrl')?.includes('betamasaheft.eu') ?? false
