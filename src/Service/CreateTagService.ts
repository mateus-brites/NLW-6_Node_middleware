import { TagsRepositories } from "../Repository/TagsRepositories";

import { getCustomRepository } from "typeorm"


class CreateTagService{
    async execute(name: string){
        const tagsRepositories = getCustomRepository(TagsRepositories);

        if(!name){
            throw new Error("Name of tag is empty");
        }

        const tagAlreadyExist = await tagsRepositories.findOne({
            name,
        });

        if(tagAlreadyExist){
            throw new Error("This tags already exixt");
        }

        const tag = tagsRepositories.create({
            name,
        });

        await tagsRepositories.save(tag);

        return tag;
    }
}

export { CreateTagService }