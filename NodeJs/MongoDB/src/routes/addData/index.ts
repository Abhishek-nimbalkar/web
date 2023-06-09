import express, { Request, Response } from "express";
import {
  eqOp,
  gteOp,
  gtOp,
  inOp,
  ltOp,
  lteOp,
  neOp,
  ninOp,
  andOp,
  notOp,
  norOp,
  orOp,
  allOp,
  elemMatchOp,
  sizeOp
} from "../../utils";
import Mongos from "../../model";
const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    Mongos.insertMany([
      { item: { name: "ab", code: "123" }, qty: 15, tags: ["A", "B", "C"] },
      { item: { name: "cd", code: "123" }, qty: 20, tags: ["B"] },
      { item: { name: "ij", code: "456" }, qty: 25, tags: ["A", "B"] },
      { item: { name: "xy", code: "456" }, qty: 30, tags: ["B", "A"] },
      { item: { name: "mn", code: "000" }, qty: 20, tags: [["A", "B"], "C"] },
    ])
      .then(function () {
        console.log("Data inserted");
        res
          .status(201)
          .send({ error: false, message: "Collection has been Populated" });
      })
      .catch(function (error) {
        console.log(error); // Failure
      });
  } catch (error: any) {
    res.status(400).send({ error: true, message: error?.message });
  }
});
router.get("/", async (req: Request, res: Response) => {
  // eqOp();
  // gtOp();
  // gteOp();
  // inOp();
  // ltOp();
  // lteOp();
  // neOp();
  // ninOp();
  // andOp();
  // notOp();
  // norOp();
  // orOp();
  // allOp();
  // elemMatchOp();
  sizeOp();
  res.status(200).send({ success: true, message: "Function run" });
});

export default router;
