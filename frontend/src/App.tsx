import { RouterProvider } from "react-router";
import { router } from "./modules/common/routes/Routes";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
