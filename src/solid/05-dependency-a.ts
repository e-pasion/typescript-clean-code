import { PostService } from "./05-dependency-b";
import { JsonDataBaseService, LocalDataBaseService, WebService } from "./05-dependency-c";

// Main
(async () => {
  const provider = new LocalDataBaseService();
  const providerJson = new JsonDataBaseService();
  const providerWeb = new WebService();

  const postService = new PostService(providerWeb);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
