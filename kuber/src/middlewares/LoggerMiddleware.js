
export default function createLoggerMiddleware({dispatch, getState}) {
  return next => action => {
    return next(action);
  };
}
