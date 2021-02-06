import express from "express";
import os from 'os';
import cluster from 'cluster';
import client from "./client";

const cpus = os.cpus().length;
const port = process.env.PORT || 3000;

if (cluster.isMaster) {
  console.log(`master PID : ${process.pid}`);
  [...Array(cpus)].map(() => { cluster.fork(); });
  cluster.on('exit', (worker, code, signal) => {
    console.log(`[exit] worker: ${worker.process.pid}, code: ${code}, signal: ${signal}`);
    cluster.fork();
  });
} else {
  const app = express();
  client.init(process.pid);
  app.use('/', (req, res) => {
    setTimeout(() => {
      res.send(`OK`);
      console.log(`${process.pid}:${client.get()} => ${process.pid === client.get() ? 'OK' : 'ERROR'}`);
    }, Math.random() * 1000);
  });
  app.listen(port, () => {
    console.log(`start worker: ${process.pid}`);
  });
}
