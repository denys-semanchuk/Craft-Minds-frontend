import {http} from "./config";

type Response = { access_token: string }
export const authenticateUser = async (body: {}, type = "register"): Promise<Response> => {
    const {data} = await http.post(`/auth/${type}`, body);
    return {access_token: data.access_token}
}