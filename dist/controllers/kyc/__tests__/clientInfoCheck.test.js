"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
jest.mock("../axios");
const httpMocks = require('node-mocks-http');
const expressRequestMock = require('express-request-mock');
const clientInfoCheck = require("../clientInfoCheck");
const request = httpMocks.createRequest();
const response = httpMocks.createResponse();
describe('returns a 200 response', () => __awaiter(void 0, void 0, void 0, function* () {
    const { res } = expressRequestMock(clientInfoCheck());
    expect(res.statusCode).toBe(200);
}));
//# sourceMappingURL=clientInfoCheck.test.js.map