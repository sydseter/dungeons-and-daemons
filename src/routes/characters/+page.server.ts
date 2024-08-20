import { FileSystemHelper } from '$lib/filesystem/fileSystemHelper.ts';

export async function load({params})
{
    return {
        characters : getCharacters()
    }
}

function getCharacters() : string[]
{
    return FileSystemHelper.getDirectories("./characters");
}