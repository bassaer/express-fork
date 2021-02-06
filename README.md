# express-fork

```
yarn start
yarn run v1.19.1
$ tsc
✨  Done in 2.88s.
yarn run v1.19.1
$ node dist/server.js
master PID : 8480
start worker: 8481
start worker: 8482
start worker: 8484
start worker: 8483
start worker: 8485
start worker: 8486
start worker: 8487
start worker: 8488
8481:8481 => OK
8482:8482 => OK
8482:8482 => OK
8483:8483 => OK
8482:8482 => OK
8484:8484 => OK
8481:8481 => OK
8483:8483 => OK
8486:8486 => OK
8485:8485 => OK
```
```
❯ echo "GET http://localhost:3000/" | vegeta attack -rate=10 -duration=1s
```
