const {
  Route,
  NotFoundRoute,
  DefaultRoute
} = ReactRouter;

const routes = (
  <Route name="root" handler={App} path="/">
    <Route name="trick" path="/:trickName" handler={TrickPage}/>
    <DefaultRoute handler={AppLoading} />
    <NotFoundRoute handler={AppNotFound} />
  </Route>
)

const router = ReactRouter.create({
  routes: routes,
  location: ReactRouter.HistoryLocation
});

Meteor.startup(function () {
  router.run(function (Handler, state) {
    React.render(<Handler/>, document.getElementById("app-container"));
  });
});


    //<Route name="todoList" path="/lists/:listId" handler={TodoListPage} />
    //<Route name="join" path="/join" handler={AuthJoinPage} />
    //<Route name="signin" path="/signin" handler={AuthSignInPage} />