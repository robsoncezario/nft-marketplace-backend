import * as dotenv from 'dotenv';
import connect from './database/connect';
import app from './controllers/AppController';

dotenv.config();
app.listen(process.env.EXPRESS_PORT || 3000, () => {
	console.log(
		`[Express] 🚀 Server is running at https://localhost:${
			process.env.EXPRESS_PORT || 3000
		}`
	);
});

connect();
