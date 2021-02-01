import {Customer} from "./customer";
import "./aa.css";

let mehmet=new Customer("mehmet",21)


mehmet.doit().then(data=>console.log(data)).catch(err=>console.error(new Error(err)))