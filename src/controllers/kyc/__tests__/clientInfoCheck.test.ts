jest.mock("../axios");
const httpMocks = require('node-mocks-http');
const expressRequestMock = require('express-request-mock')
const clientInfoCheck = require("../clientInfoCheck");

const request = httpMocks.createRequest();
const response = httpMocks.createResponse();

describe('returns a 200 response', async () => {
  const { res } = expressRequestMock(clientInfoCheck())
  expect(res.statusCode).toBe(200)
})
