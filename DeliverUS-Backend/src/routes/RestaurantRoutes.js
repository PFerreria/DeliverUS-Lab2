import RestaurantController from '../controllers/RestaurantController.js'

const loadFileRoutes = function (app) {
  app.route('/restaurant')
    .post(isLoggedIn, hasRole('owner'), RestaurantController.create)
    .get(RestaurantController.index)
  app.route('/restaurant/:id')
    .get(isLoggedIn, hasRole('owner'), RestaurantController.show)
    .put(isLoggedIn, hasRole('owner'), RestaurantController.update)
    .delete(isLoggedIn, hasRole('owner'), RestaurantController.destroy)
  app.route('/restaurant/:id/description').get(isLoggedIn, hasRole('customer'), RestaurantController.index)
  app.route('/restaurant/:id/menu').get(isLoggedIn, hasRole('customer'), RestaurantController.index)
}
export default loadFileRoutes
