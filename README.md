## Project details

### Techical implementation

    - Main: Reactjs + Typescript
    - Components structure: Automic design
    - UI library : MUI
    - Css : styled of MUI
    - Data fetching: useSwr , Axios
    - State management: contextAPI
    - Form validation: Zod
    - Addition: jest , storybook ,react-router-dom

### Requirement

#### Login:

    - Create login form with user and password
    - Validation input

#### Create invoice:

    - Create form for create invoice: Invoice Reference , Date ,Description and amount
    - Each time you create a new invoice, it should be shown in this list
    - form input validation

#### List/ Search / view invoices:

    - Table display a list of invoices s that have been created
    - Set the list screen as the home screen
    - add: search, sort, filter, pagination

#### Reponsive::

    - Make mobile reponsive

#### API::

    - setup api
    - integrate api with component

## Enhence

    -Refresh Token api
    -Skeleton
    -Create invoice return list or successs
    -Get invoice details
    -Create profile page
    -Search api

## System Requirements

- Node.js 14.6.0 or newer
- MacOS, Windows (including WSL), and Linux are supported

## Start project

### B1 `npm install`

### B2 `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run storybook`

Launches the storybook in your develop mode
Open [ http://localhost:6006](http://localhost:6006) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
