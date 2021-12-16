import Mongoose from 'mongoose';

export default function connect(): void {
	console.log('\x1b[36m', `[MongoDB] Attempt to connect to cluster...`);

	Mongoose.connect(process.env.MONGODB_URI as string)
		.then(() =>
			console.log('\x1b[36m', `[MongoDB] Successfully connected to cluster.`)
		)
		.catch((err) =>
			console.log(
				'\x1b[31m',
				`[MongoDB] There was a error connecting to cluster: ${err}`
			)
		);

	Mongoose.connection.on('disconnected', connect);
}
