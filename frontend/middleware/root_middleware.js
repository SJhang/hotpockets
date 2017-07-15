import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  logger
);

export default RootMiddleware;
