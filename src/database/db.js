import Dexie from "dexie";

const db = new Dexie("CarsInfo");
db.version(1).stores({ todos: "++id" });

export default db;
