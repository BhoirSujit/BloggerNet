import app from "./src/app";
import {port} from './src/config/config'
import {start} from './src/connections/MongoDB'

async function main() {
    await start()
    .then(() => console.log("Database connected"))
    .catch(e => console.error(e));
}

main();


app.listen(port, ()=> {
    console.log(`Server running on : http://localhost:${port}`);
})