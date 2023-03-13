import express, {
  Request,
  Response,
} from "express";
import createPostController from "../../controllers/posts/createPostController";
import editPostController from "../../controllers/posts/editPostCont";
import addCommentController from '../../controllers/posts/addcommentCont';
import likePostController from "../../controllers/posts/likePostCont";
// import { Ipost } from "interfaces/postInterface";
import Posts from "../../models/post";

import { verifyToken } from "../../utils/jwtTokenValidation";

const router = express.Router();

router.get("/", verifyToken, async (req: Request, res: Response) => {
  //   console.log(email.emailId);

  const posts = await Posts.find();
  //   console.log(jwtKey);
  res.send(posts);
});

router.post("/create", verifyToken, createPostController);

router.patch("/edit/:id", verifyToken,editPostController);
//************************* */ For comments *******************************//

router.patch("/addComment/:id",verifyToken,addCommentController)

router.patch("/like/:id",verifyToken,likePostController)

export default router;
