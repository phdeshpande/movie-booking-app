import {apiGet, apiPost} from "./apiAuth";
import { apiConfig } from "../config/apiConfig";

export const getScreenings = async () => {
  try {
    const response = await apiGet(apiConfig.endPoints.screenings);
    return response;
  }
  catch(e) {
    console.warn("Error: " + e);
  }
  
}
