const PORT = process.env.PORT || 5000;
const Router = require("./framework/Router");
const Application = require("./framework/Application");
const UserRouter = require("./src/user-routes");
const jsonParse = require("./framework/parseJson");
const parseUrl = require('./framework/parseUrl')
const mongoose = require('mongoose')

const app = new Application();
app.use (jsonParse);
app.use (parseUrl('http://localhost:5000/'));

app.addRouter(UserRouter);

const start = async () => {
  try {
    await mongoose.connect('')
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

  } catch (e) {
    console.log (e)
  }
}

start()