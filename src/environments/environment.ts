// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAL8YojUMG1flU4VjoYhgCHGHOukfvjB7I',
        authDomain: 'ck-bot-fc3be.firebaseapp.com',
        databaseURL: 'https://ck-bot-fc3be.firebaseio.com',
        projectId: 'ck-bot-fc3be',
        storageBucket: 'ck-bot-fc3be.appspot.com',
        messagingSenderId: '171901347952'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
