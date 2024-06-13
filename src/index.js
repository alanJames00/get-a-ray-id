import { Hono } from 'hono';

const app = new Hono();

app.get('/', async (c) => {
	try {
		const id = c.req.header('cf-ray');

		return c.json({
			rayId: id,
		});
	} catch (e) {
		console.log(e);
		return c.json(
			{
				err: e.message,
			},
			500,
		);
	}
});

export default app;
