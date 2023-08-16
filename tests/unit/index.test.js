/* eslint-disable no-undef */

const httpTrigger = require('../../bng-integration-register-api')

jest.mock('../../bng-integration-register-business-logic/landownerRegistrationGenerator.js')

describe('developerRegistration function', () => {
  let mockContext, mockRequest

  beforeEach(() => {
    process.env.NotifyApiKey = 'yourApiKey'
    mockContext = {
      res: {},
      log: jest.fn(),
      error: jest.fn()
    }

    mockRequest = {

    }
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should return status 200 and successful registered ', async () => {
    await httpTrigger(mockContext, mockRequest)
    expect(mockContext.res.status).toEqual(200)
    expect(mockContext.res.body).toEqual('Landowner Registration successfully executed.')
  })
})
