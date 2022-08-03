
### Weather App v2
---


#### Hello friends

My purpose in writing this meteorology project was to practice test writing
In this project, in addition to ```Cypress``` , I also used ```Jest```
The project consists of only two parts, a search bar part and an information part
Because Cypress still ```can't mock external modules```, I used Jest to test certain parts.

---
#### how its work?
easily just search your town and wait to weather information show up for you.
its 100% work , if api or your network ,work fine

----
#### Demo
  [![FlappyBird](https://user-images.githubusercontent.com/90524474/182689037-7ca56ab3-cf3d-4ff1-9fab-2c490d7c6494.png)](https://final-weather-v2.vercel.app/)




---
#### scripts


###### start development server
``` bash
npm run start
```

###### run tests with Jest
``` bash
npm run test
```

###### open Cypress dashboard
``` bash
npm run  cypress:open
```

###### run all e2e tests with Cypress
``` bash
npm run cypress:run
```

###### run only component tests with Cypress
``` bash
npm run component:component
```

