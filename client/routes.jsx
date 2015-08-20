const {
  Route,
  NotFoundRoute,
  DefaultRoute
} = ReactRouter;

const routes = (
  <Route name="root" path="/" handler={App}>
    <Route name="tricks" path="/tricks/:trickName" handler={TrickPage}/>
    <DefaultRoute handler={LandingPage} />
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

var appRoutes = FlowRouter.group({
  subscriptions: function() {
    this.register('userData', Meteor.subscribe('userData'));
    this.register('graphs', Meteor.subscribe('graphs'));
  },
  triggersEnter: [
    function(context, redirect) {
      if (!Meteor.user()) {
        redirect('/');
      }
    }
  ]
});

memberRoutes.route('/feed', {
  action: function() {
    ReactLayout.render(DashboardLayout, {
      content: <Feed/>
    });
  }
});

memberRoutes.route('/publish', {
  action: function() {
    ReactLayout.render(DashboardLayout, {
      content: <Publish/>
    });
  }
});

memberRoutes.route('/settings', {
  action: function() {
    ReactLayout.render(DashboardLayout, {
      content: <SettingsPage/>
    });
  }
});

