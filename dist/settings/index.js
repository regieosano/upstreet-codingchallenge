"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = void 0;
const initializePort = (portVal) => {
    const parsedPort = parseInt(portVal, 10);
    if (isNaN(parsedPort)) {
        return portVal;
    }
    if (parsedPort >= 0) {
        return parsedPort;
    }
    return false;
};
exports.port = initializePort(process.env.PORT || "7777");
//# sourceMappingURL=index.js.map