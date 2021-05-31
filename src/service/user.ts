import { user } from "../sql/models";
import { User_model } from "../sql/types/user";
export const addUser = async function (params: User_model) {
    const result = await user.create(params);
    return result;
};
export const getUserById = async function (id: string) {
    const result = await user.findById(id);
    return result;
};
