
//Create and use the middleware here, to handle async actions (functions)
const customMiddleware = () => {}

const store = {}

export { store };
// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
export {customMiddleware}
