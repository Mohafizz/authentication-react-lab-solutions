# Authentication in React Lab

### Getting started

- server
  - `git clone https://github.com/thoughtworks-jumpstart/express_passport_mongoose_example.git`
  - `cd express_passport_mongoose_example`
  - `yarn install`
  - `mongod`
  - `yarn start` (this will run on port 3000)

- client
  - fork and clone repo
  - cd authentication-react-lab
  - `yarn install`
  - `yarn start` (this will run on port 3001)

### Component tree
```
|__App
   |__BrowserRouter
      |__MyApp
         |__TopNavBar
         |__Route --> WelcomeComponent
         |__Route --> <AuthenticationForm title="sign up" />
         |__Route --> <AuthenticationForm title="sign in" />
         |__PrivateRoute
            |__ if isAuthenticated === true
               |___PrivilegedComponent
            |__ if isAuthenticated !== true
               |___<Redirect to="/" />
``` 

### Key concepts
- `fetch` [docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Making_fetch_requests)
- `sessionStorage` [docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
  - `sessionStorage.setItem("someKey", "someValue")`
  - `sessionStorage.getItem("someKey")`
  - `sessionStorage.removeItem("someKey")`

- authentication service - just a set of helper functions to tell you authentication-related stuff (e.g. is the user logged in?) (see `utils/AuthService.js`)

- `react-router-dom`
  - how to redirect (when you're inside `render()`): `<Redirect to="/somepath">`
  - how to redirect (when you're outside `render()`): `[this.]props.history.push("/somepath")`
  - how to pass props from a `Route` to `SomeComponent` (using `...props`) (see Routes inside MyApp.js) (this is useful when we need to access properties added by react-router, e.g. `props.history`, `props.match`, or `props.location`)

- The practice of wrapping the component which requires the user to be logged in (e.g. `PrivilegedComponent` in this example) in a component which contains conditional logic - if user is logged in, display `<PrivilegedComponent />`, otherwise `<Redirect to="/somewhere">`
  - see **PrivateRoute.js** as an example