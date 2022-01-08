import * as dotenv from 'dotenv';

dotenv.config();

import connect from './database/connect';
import app from './controllers/AppController';

app.listen(process.env.EXPRESS_PORT || 3000, () => {
	console.log(
		`[Express] 🚀 Server is running at https://localhost:${
			process.env.EXPRESS_PORT || 3000
		}`
	);
});

connect();
