# Abusix Frontend Coding Challenge

Hi, thanks for taking the time to do our coding challenge. If you have any questions about the task, please don´t hesitate to reach out to us.

Your task is to implement a small React app that displays network abuse events coming from an API. The implementation doesn´t have to be perfect,
so it´s best if don´t spend more than 2-4 hours on it. We mostly want to see what your typical working style looks like, so just focus on what you think is most important.

## Setup

Start the sample API:

```
cd api
npm i
npm start
```

Now the API is being served on port 5000.

## API documentation

The API works with the [json-server](https://www.npmjs.com/package/json-server) npm package.

It provides a `GET /api/events` endpoint that offers filtering, sorting and pagination via query params.

See the package´s documentation for more information about available query params:

- [Filter](https://www.npmjs.com/package/json-server#filter)
- [Sort](https://www.npmjs.com/package/json-server#sort)
- [Paginate](https://www.npmjs.com/package/json-server#paginate)

## Your Task

Implement a React application in the `client` directory. You can use any libraries and frameworks you like, the only constraint is that you should not modify the `api` directory.

Hint:
- for AbuseHQ, we are using [Evergreen UI](https://evergreen.segment.com/) with TypeScript, so feel free to use those

Please use the already initialized Git repo and make sure to include the final .git directory in your submission.

The following requirements should be met:

As a user,

- [ ] I can access all existing abuse events, with at least the following fields:
  - `id` -> "ID"
  - `createdAt` -> "Timestamp"
  - `client.ip` -> "Client IP"
  - `type` -> "Event Type"
  - `reporter.email` -> "Reporter Email"
- [ ] I can sort the abuse events by all fields, except "ID"
  - by default, the events should be ordered by "Timestamp"
- [ ] I can filter for abuse events by
  - "Event Type"
  - "Reporter Email"
  - "Client IP"
