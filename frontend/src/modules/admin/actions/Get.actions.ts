import axios from "axios";
import { backend_url } from "../constants/constants";

export async function getAdmin(token?: string) {
  try {
    if (token) {
      const adminData = await axios.get(`${backend_url}/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return adminData.data;
    } else {
      const adminData = await axios.get(`${backend_url}/admin`, {
        withCredentials: true,
      });
      return adminData.data;
    }
  } catch (error) {
    console.error(`failed to fetch admin data : ${error}`);
    throw error;
  }
}
