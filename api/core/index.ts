import { APIGatewayEvent, Context } from 'aws-lambda';
import createAPI from 'lambda-api';

const api = createAPI();

api.get('/status', async (req, res) => {
    return { status: 'ok' };
});

export async function handler(event: APIGatewayEvent, context: Context) {
    return await api.run(event, context);
};