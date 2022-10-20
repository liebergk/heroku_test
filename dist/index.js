"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const port = process.env.PORT || 3000;
App_1.default.listen(port, (err) => {
    if (err) {
        console.error(`Error starting server: ${err}`);
        process.abort();
    }
    console.log(`Server is listening on port ${port}.`);
    return;
});
//# sourceMappingURL=index.js.map