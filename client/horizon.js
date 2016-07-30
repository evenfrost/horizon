import Horizon from '@horizon/client';

const horizon = new Horizon({ host: 'localhost:5001' });

export const todos = horizon('todos');

export default horizon;
