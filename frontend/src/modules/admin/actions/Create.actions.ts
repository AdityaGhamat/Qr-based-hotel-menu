import axios from "axios";
import type { signin } from "../types/SignIn.type";
import { backend_url } from "../constants/constants";

export async function createNewAdmin(data: signin) {
  const adminData = await axios.post(
    `${backend_url}/admin/create-admin`,
    data,
    { withCredentials: true }
  );
  return adminData.data;
}
