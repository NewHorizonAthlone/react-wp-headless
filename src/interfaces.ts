import { FC } from "react";

export enum APIStatus { IDLE, PENDING, REJECTED, FULFILLED }

export type APIError = {
    message: string,
    code: number
}

export type APIDate<DataType = any> = {
    status: APIStatus,
    error?: APIError,
    data?: DataType
}

export interface IRoute {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export interface IPost {
    id?: number,
    date: string,
    date_gmt: Date,
    guid: object,
    modified: Date,
    modified_gmt: Date,
    slug: string,
    status: string,
    type: string,
    link: string,
    title: {
        rendered: string
    },
    content: {
        rendered: any;
        [x: string]: any;
    },
    excerpt: object,
    author: number,
    featured_media: number,
    comment_status: string,
    ping_status: string,
    sticky: boolean,
    template: string,
    format: string,
    meta: [],
    categories: [],
    tags: [],
    _links: object,
    _embedded: object,
}

export interface IPokemon {
    /** The identifier for this resource */
    id: number;
    /** The name for this resource */
    name: string;
    /** The base experience gained for defeating this Pokémon */
    base_experience: number;
    /** The height of this Pokémon in decimetres */
    height: number;
    /** Set for exactly one Pokémon used as the default for each species */
    is_default: boolean;
    /** Order for sorting. Almost national order, except families are grouped together */
    order: number;
    /** The weight of this Pokémon in hectograms */
    weight: number;
    /** A list of abilities this Pokémon could potentially have */
    abilities: [];
    /** A list of forms this Pokémon can take on */
    forms: [];
    /** A list of game indices relevent to Pokémon item by generation */
    game_indices: [];
    /** A list of items this Pokémon may be holding when encountered */
    held_items: [];
    /** A link to a list of location areas, as well as encounter details pertaining to specific versions */
    location_area_encounters: string;
    /** A list of moves along with learn methods and level details pertaining to specific version groups */
    moves: [];
    /** A set of sprites used to depict this Pokémon in the game.
     * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
     */
    sprites: {
        front_shiny: string
    };
    /** The species this Pokémon belongs to */
    species: {
        name: string,
        url: string
    };
    /** A list of base stat values for this Pokémon */
    stats: [];
    /** A list of details showing types this Pokémon has */
    types: [];
    /** Data describing a Pokemon's types in a previous generation. */
    past_types: [];
}

