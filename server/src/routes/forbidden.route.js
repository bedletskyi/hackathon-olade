import { Router } from 'express';
import { randomService } from '../services/random.service';

const router = new Router();

router.get('/', (req, res, next) => {
	const error = new Error(randomService.getError());
	error.statusCode = 403;
	next(error);
});

router.get('/need', (req, res) => {
	res.status(200).send('This message need auth');
});

export { router as forbiddenRoutes };
