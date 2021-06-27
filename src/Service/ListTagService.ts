import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../Repository/TagsRepositories";


class ListTagService{
    async execute(){
        const tagsTepositories = getCustomRepository(TagsRepositories);

        const tags = await tagsTepositories.find();

        return tags;
    }
}

export {ListTagService}