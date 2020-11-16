declare module 'pokeapi' {
  export type APIResourceList<T> = {
    /** The total number of resources available from this API. */
    count: number;
    /** The URL for the next page in the list. */
    next: string | null;
    /** The URL for the previous page in the list. */
    previous: string | null;
    /** A list of un-named API resources. */
    results: APIResource<T>[];
  };

  export type NamedAPIResourceList<T> = {
    /** The total number of resources available from this API. */
    count: number;
    /** The URL for the next page in the list. */
    next: string | null;
    /** The URL for the previous page in the list. */
    previous: string | null;
    /** A list of named API resources. */
    results: NamedAPIResource<T>[];
  };

  export type APIResource<T> = {
    /** The URL of the referenced resource. */
    url: string;
  };

  export type NamedAPIResource<T> = {
    /** The name of the referenced resource. */
    name: string;
    /** The URL of the referenced resource. */
    url: string;
  };

  export type Berry = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked. */
    growth_time: number;
    /** The maximum number of these berries that can grow on one tree in Generation IV. */
    max_harvest: number;
    /** The power of the move "Natural Gift" when used with this Berry. */
    natural_gift_power: number;
    /** The size of this Berry, in millimeters. */
    size: number;
    /** The smoothness of this Berry, used in making Pokéblocks or Poffins. */
    smoothness: number;
    /** The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly. */
    soil_dryness: number;
    /** The firmness of this berry, used in making Pokéblocks or Poffins. */
    firmness: NamedAPIResource<BerryFirmness>;
    /** A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry. */
    flavors: BerryFlavorMap[];
    /** Berries are actually items. This is a reference to the item specific data for this berry. */
    item: NamedAPIResource<Item>;
    /** The type inherited by "Natural Gift" when used with this Berry. */
    natural_gift_type: NamedAPIResource<Type>;
  };

  export type BerryFlavorMap = {
    /** How powerful the referenced flavor is for this berry. */
    potency: number;
    /** The referenced berry flavor. */
    flavor: NamedAPIResource<BerryFlavor>;
  };

  export type BerryFirmness = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A list of the berries with this firmness. */
    berries: NamedAPIResource<Berry>[];
    /** The name of this resource listed in different languages. */
    names: Name[];
  };

  export type BerryFlavor = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A list of the berries with this flavor. */
    berries: FlavorBerryMap[];
    /** The contest type that correlates with this berry flavor. */
    contest_type: NamedAPIResource<ContestType>;
    /** The name of this resource listed in different languages. */
    names: Name[];
  };

  export type FlavorBerryMap = {
    /** How powerful the referenced flavor is for this berry. */
    potency: number;
    /** The berry with the referenced flavor. */
    berry: NamedAPIResource<Berry>;
  };

  export type ContestType = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The berry flavor that correlates with this contest type. */
    berry_flavor: NamedAPIResource<BerryFlavor>;
    /** The name of this contest type listed in different languages. */
    names: ContestName[];
  };

  export type ContestName = {
    /** The name for this contest. */
    name: string;
    /** The color associated with this contest's name. */
    color: string;
    /** The language that this name is in. */
    language: NamedAPIResource<Language>;
  };

  export type ContestEffect = {
    /** The identifier for this resource. */
    id: number;
    /** The base number of hearts the user of this move gets. */
    appeal: number;
    /** The base number of hearts the user's opponent loses. */
    jam: number;
    /** The result of this contest effect listed in different languages. */
    effect_entries: Effect[];
    /** The flavor text of this contest effect listed in different languages. */
    flavor_text_entries: FlavorText[];
  };

  export type SuperContestEffect = {
    /** The identifier for this resource. */
    id: number;
    /** The level of appeal this super contest effect has. */
    appeal: number;
    /** The flavor text of this super contest effect listed in different languages. */
    flavor_text_entries: FlavorText[];
    /** A list of moves that have the effect when used in super contests. */
    moves: NamedAPIResource<Move>[];
  };

  export type EncounterMethod = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A good value for sorting. */
    order: number;
    /** The name of this resource listed in different languages. */
    names: Name[];
  };

  export type EncounterCondition = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of possible values for this encounter condition. */
    values: NamedAPIResource<EncounterConditionValue>[];
  };

  export type EncounterConditionValue = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The condition this encounter condition value pertains to. */
    condition: NamedAPIResource<EncounterCondition>[];
    /** The name of this resource listed in different languages. */
    names: Name[];
  };

  export type EvolutionChain = {
    /** The identifier for this resource. */
    id: number;
    /** The item that a Pokémon would be holding when mating that would trigger the egg hatching a baby Pokémon rather than a basic Pokémon. */
    baby_trigger_item: NamedAPIResource<Item>;
    /** The base chain link object. Each link contains evolution details for a Pokémon in the chain. Each link references the next Pokémon in the natural evolution order. */
    chain: ChainLink;
  };

  export type ChainLink = {
    /** Whether or not this link is for a baby Pokémon. This would only ever be true on the base link. */
    is_baby: boolean;
    /** The Pokémon species at this point in the evolution chain. */
    species: NamedAPIResource<PokemonSpecies>;
    /** All details regarding the specific details of the referenced Pokémon species evolution. */
    evolution_details: EvolutionDetail[];
    /** A List of chain objects. */
    evolves_to: ChainLink[];
  };

  export type EvolutionDetail = {
    /** The item required to cause evolution this into Pokémon species. */
    item: NamedAPIResource<Item>;
    /** The type of event that triggers evolution into this Pokémon species. */
    trigger: NamedAPIResource<EvolutionTrigger>;
    /** The id of the gender of the evolving Pokémon species must be in order to evolve into this Pokémon species. */
    gender: number;
    /** The item the evolving Pokémon species must be holding during the evolution trigger event to evolve into this Pokémon species. */
    held_item: NamedAPIResource<Item>;
    /** The move that must be known by the evolving Pokémon species during the evolution trigger event in order to evolve into this Pokémon species. */
    known_move: NamedAPIResource<Move>;
    /** The evolving Pokémon species must know a move with this type during the evolution trigger event in order to evolve into this Pokémon species. */
    known_move_type: NamedAPIResource<Type>;
    /** The location the evolution must be triggered at. */
    location: NamedAPIResource<Location>;
    /** The minimum required level of the evolving Pokémon species to evolve into this Pokémon species. */
    min_level: number;
    /** The minimum required level of happiness the evolving Pokémon species to evolve into this Pokémon species. */
    min_happiness: number;
    /** The minimum required level of beauty the evolving Pokémon species to evolve into this Pokémon species. */
    min_beauty: number;
    /** The minimum required level of affection the evolving Pokémon species to evolve into this Pokémon species. */
    min_affection: number;
    /** Whether or not it must be raining in the overworld to cause evolution this Pokémon species. */
    needs_overworld_rain: boolean;
    /** The Pokémon species that must be in the players party in order for the evolving Pokémon species to evolve into this Pokémon species. */
    party_species: NamedAPIResource<PokemonSpecies>;
    /** The player must have a Pokémon of this type in their party during the evolution trigger event in order for the evolving Pokémon species to evolve into this Pokémon species. */
    party_type: NamedAPIResource<Type>;
    /** The required relation between the Pokémon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense. */
    relative_physical_stats: number;
    /** The required time of day. Day or night. */
    time_of_day: string;
    /** Pokémon species for which this one must be traded. */
    trade_species: NamedAPIResource<PokemonSpecies>;
    /** Whether or not the 3DS needs to be turned upside-down as this Pokémon levels up. */
    turn_upside_down: boolean;
  };

  export type EvolutionTrigger = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of pokemon species that result from this evolution trigger. */
    pokemon_species: NamedAPIResource<PokemonSpecies>[];
  };

  export type Generation = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A list of abilities that were introduced in this generation. */
    abilities: NamedAPIResource<Ability>[];
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** The main region travelled in this generation. */
    main_region: NamedAPIResource<Region>;
    /** A list of moves that were introduced in this generation. */
    moves: NamedAPIResource<Move>[];
    /** A list of Pokémon species that were introduced in this generation. */
    pokemon_species: NamedAPIResource<PokemonSpecies>[];
    /** A list of types that were introduced in this generation. */
    types: NamedAPIResource<Type>[];
    /** A list of version groups that were introduced in this generation. */
    version_groups: NamedAPIResource<VersionGroup>[];
  };

  export type Pokedex = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** Whether or not this Pokédex originated in the main series of the video games. */
    is_main_series: boolean;
    /** The description of this resource listed in different languages. */
    descriptions: Description[];
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of Pokémon catalogued in this Pokédex and their indexes. */
    pokemon_entries: PokemonEntry[];
    /** The region this Pokédex catalogues Pokémon for. */
    region: NamedAPIResource<Region>;
    /** A list of version groups this Pokédex is relevant to. */
    version_groups: NamedAPIResource<VersionGroup>[];
  };

  export type PokemonEntry = {
    /** The index of this Pokémon species entry within the Pokédex. */
    entry_number: number;
    /** The Pokémon species being encountered. */
    pokemon_species: NamedAPIResource<PokemonSpecies>;
  };

  export type Version = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** The version group this version belongs to. */
    version_group: NamedAPIResource<VersionGroup>;
  };

  export type VersionGroup = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** Order for sorting. Almost by date of release, except similar versions are grouped together. */
    order: number;
    /** The generation this version was introduced in. */
    generation: NamedAPIResource<Generation>;
    /** A list of methods in which Pokémon can learn moves in this version group. */
    move_learn_methods: NamedAPIResource<MoveLearnMethod>[];
    /** A list of Pokédexes introduces in this version group. */
    pokedexes: NamedAPIResource<Pokedex>[];
    /** A list of regions that can be visited in this version group. */
    regions: NamedAPIResource<Region>[];
    /** The versions this version group owns. */
    versions: NamedAPIResource<Version>[];
  };

  export type Item = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The price of this item in stores. */
    cost: number;
    /** The power of the move Fling when used with this item. */
    fling_power: number;
    /** The effect of the move Fling when used with this item. */
    fling_effect: NamedAPIResource<ItemFlingEffect>;
    /** A list of attributes this item has. */
    attributes: NamedAPIResource<ItemAttribute>[];
    /** The category of items this item falls into. */
    category: ItemCategory;
    /** The effect of this ability listed in different languages. */
    effect_entries: VerboseEffect[];
    /** The flavor text of this ability listed in different languages. */
    flavor_text_entries: VersionGroupFlavorText[];
    /** A list of game indices relevent to this item by generation. */
    game_indices: GenerationGameIndex[];
    /** The name of this item listed in different languages. */
    names: Name[];
    /** A set of sprites used to depict this item in the game. */
    sprites: ItemSprites;
    /** A list of Pokémon that might be found in the wild holding this item. */
    held_by_pokemon: ItemHolderPokemon[];
    /** An evolution chain this item requires to produce a bay during mating. */
    baby_trigger_for: APIResource<EvolutionChain>;
    /** A list of the machines related to this item. */
    machines: MachineVersionDetail[];
  };

  export type ItemSprites = {
    /** The default depiction of this item. */
    default: string;
  };

  export type ItemHolderPokemon = {
    /** The Pokémon that holds this item. */
    pokemon: string;
    /** The details for the version that this item is held in by the Pokémon. */
    version_details: ItemHolderPokemonVersionDetail[];
  };

  export type ItemHolderPokemonVersionDetail = {
    /** How often this Pokémon holds this item in this version. */
    rarity: string;
    /** The version that this item is held in by the Pokémon. */
    version: NamedAPIResource<Version>;
  };

  export type ItemAttribute = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A list of items that have this attribute. */
    items: NamedAPIResource<Item>[];
    /** The name of this item attribute listed in different languages. */
    names: Name[];
    /** The description of this item attribute listed in different languages. */
    descriptions: Description[];
  };

  export type ItemCategory = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A list of items that are a part of this category. */
    items: NamedAPIResource<Item>[];
    /** The name of this item category listed in different languages. */
    names: Name[];
    /** The pocket items in this category would be put in. */
    pocket: NamedAPIResource<ItemPocket>;
  };

  export type ItemFlingEffect = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The result of this fling effect listed in different languages. */
    effect_entries: Effect[];
    /** A list of items that have this fling effect. */
    items: NamedAPIResource<Item>;
  };

  export type ItemPocket = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A list of item categories that are relevant to this item pocket. */
    categories: NamedAPIResource<ItemCategory>[];
    /** The name of this resource listed in different languages. */
    names: Name[];
  };

  export type Location = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The region this location can be found in. */
    region: NamedAPIResource<Region>;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of game indices relevent to this location by generation. */
    game_indices: GenerationGameIndex[];
    /** Areas that can be found within this location. */
    areas: NamedAPIResource<LocationArea>[];
  };

  export type LocationArea = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The internal id of an API resource within game data. */
    game_index: number;
    /** A list of methods in which Pokémon may be encountered in this area and how likely the method will occur depending on the version of the game. */
    encounter_method_rates: EncounterMethodRate[];
    /** The region this location can be found in. */
    location: NamedAPIResource<Region>;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of Pokémon that can be encountered in this area along with version specific details about the encounter. */
    pokemon_encounters: PokemonEncounter[];
  };

  export type EncounterMethodRate = {
    /** The method in which Pokémon may be encountered in an area.. */
    encounter_method: NamedAPIResource<EncounterMethod>;
    /** The chance of the encounter to occur on a version of the game. */
    version_details: EncounterVersionDetails[];
  };

  export type EncounterVersionDetails = {
    /** The chance of an encounter to occur. */
    rate: number;
    /** The version of the game in which the encounter can occur with the given chance. */
    version: NamedAPIResource<Version>;
  };

  export type PokemonEncounter = {
    /** The Pokémon being encountered. */
    pokemon: NamedAPIResource<Pokemon>;
    /** A list of versions and encounters with Pokémon that might happen in the referenced location area. */
    version_details: VersionEncounterDetail[];
  };

  export type PalParkArea = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of Pokémon encountered in thi pal park area along with details. */
    pokemon_encounters: PalParkEncounterSpecies[];
  };

  export type PalParkEncounterSpecies = {
    /** The base score given to the player when this Pokémon is caught during a pal park run. */
    base_score: number;
    /** The base rate for encountering this Pokémon in this pal park area. */
    rate: number;
    /** The Pokémon species being encountered. */
    pokemon_species: NamedAPIResource<PokemonSpecies>;
  };

  export type Region = {
    /** The identifier for this resource. */
    id: number;
    /** A list of locations that can be found in this region. */
    locations: NamedAPIResource<Location>[];
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** The generation this region was introduced in. */
    main_generation: NamedAPIResource<Generation>;
    /** A list of pokédexes that catalogue Pokémon in this region. */
    pokedexes: NamedAPIResource<Pokedex>[];
    /** A list of version groups where this region can be visited. */
    version_groups: NamedAPIResource<VersionGroup>[];
  };

  export type Machine = {
    /** The identifier for this resource. */
    id: number;
    /** The TM or HM item that corresponds to this machine. */
    item: NamedAPIResource<Item>;
    /** The move that is taught by this machine. */
    move: NamedAPIResource<Move>;
    /** The version group that this machine applies to. */
    version_group: NamedAPIResource<VersionGroup>;
  };

  export type Move = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The percent value of how likely this move is to be successful. */
    accuracy: number;
    /** The percent value of how likely it is this moves effect will happen. */
    effect_chance: number;
    /** Power points. The number of times this move can be used. */
    pp: number;
    /** A value between -8 and 8. Sets the order in which moves are executed during battle. See [Bulbapedia](http:bulbapedia.bulbagarden.net/wiki/Priority) for greater detail. */
    priority: number;
    /** The base power of this move with a value of 0 if it does not have a base power. */
    power: number;
    /** A detail of normal and super contest combos that require this move. */
    contest_combos: ContestComboSets;
    /** The type of appeal this move gives a Pokémon when used in a contest. */
    contest_type: NamedAPIResource<ContestType>;
    /** The effect the move has when used in a contest. */
    contest_effect: APIResource<ContestEffect>;
    /** The type of damage the move inflicts on the target, e.g. physical. */
    damage_class: NamedAPIResource<MoveDamageClass>;
    /** The effect of this move listed in different languages. */
    effect_entries: VerboseEffect[];
    /** The list of previous effects this move has had across version groups of the games. */
    effect_changes: AbilityEffectChange[];
    /** The flavor text of this move listed in different languages. */
    flavor_text_entries: MoveFlavorText[];
    /** The generation in which this move was introduced. */
    generation: NamedAPIResource<Generation>;
    /** A list of the machines that teach this move. */
    machines: MachineVersionDetail[];
    /** Metadata about this move */
    meta: MoveMetaData;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of move resource value changes across version groups of the game. */
    past_values: PastMoveStatValues[];
    /** A list of stats this moves effects and how much it effects them. */
    stat_changes: MoveStatChange[];
    /** The effect the move has when used in a super contest. */
    super_contest_effect: APIResource<SuperContestEffect>;
    /** The type of target that will receive the effects of the attack. */
    target: NamedAPIResource<MoveTarget>;
    /** The elemental type of this move. */
    type: NamedAPIResource<Type>;
  };

  export type ContestComboSets = {
    /** A detail of moves this move can be used before or after, granting additional appeal points in contests. */
    normal: ContestComboDetail;
    /** A detail of moves this move can be used before or after, granting additional appeal points in super contests. */
    super: ContestComboDetail;
  };

  export type ContestComboDetail = {
    /** A list of moves to use before this move. */
    use_before: NamedAPIResource<Move>[];
    /** A list of moves to use after this move. */
    use_after: NamedAPIResource<Move>[];
  };

  export type MoveFlavorText = {
    /** The localized flavor text for an api resource in a specific language. */
    flavor_text: string;
    /** The language this name is in. */
    language: NamedAPIResource<Language>;
    /** The version group that uses this flavor text. */
    version_group: NamedAPIResource<VersionGroup>;
  };

  export type MoveMetaData = {
    /** The status ailment this move inflicts on its target. */
    ailment: NamedAPIResource<MoveAilment>;
    /** The category of move this move falls under, e.g. damage or ailment. */
    category: NamedAPIResource<MoveCategory>;
    /** The minimum number of times this move hits. Null if it always only hits once. */
    min_hits: number;
    /** The maximum number of times this move hits. Null if it always only hits once. */
    max_hits: number;
    /** The minimum number of turns this move continues to take effect. Null if it always only lasts one turn. */
    min_turns: number;
    /** The maximum number of turns this move continues to take effect. Null if it always only lasts one turn. */
    max_turns: number;
    /** HP drain (if positive) or Recoil damage (if negative), in percent of damage done. */
    drain: number;
    /** The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP. */
    healing: number;
    /** Critical hit rate bonus. */
    crit_rate: number;
    /** The likelihood this attack will cause an ailment. */
    ailment_chance: number;
    /** The likelihood this attack will cause the target Pokémon to flinch. */
    flinch_chance: number;
    /** The likelihood this attack will cause a stat change in the target Pokémon. */
    stat_chance: number;
  };

  export type MoveStatChange = {
    /** The amount of change. */
    change: number;
    /** The stat being affected. */
    stat: NamedAPIResource<Stat>;
  };

  export type PastMoveStatValues = {
    /** The percent value of how likely this move is to be successful. */
    accuracy: PastMoveStatValues;
    /** The percent value of how likely it is this moves effect will take effect. */
    effect_chance: number;
    /** The base power of this move with a value of 0 if it does not have a base power. */
    power: number;
    /** Power points. The number of times this move can be used. */
    pp: number;
    /** The effect of this move listed in different languages. */
    effect_entries: VerboseEffect[];
    /** The elemental type of this move. */
    type: NamedAPIResource<Type>;
    /** The version group in which these move stat values were in effect. */
    version_group: NamedAPIResource<VersionGroup>;
  };

  export type MoveAilment = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A list of moves that cause this ailment. */
    moves: NamedAPIResource<Move>[];
    /** The name of this resource listed in different languages. */
    names: Name[];
  };

  export type MoveBattleStyle = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
  };

  export type MoveCategory = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A list of moves that fall into this category. */
    moves: NamedAPIResource<Move>[];
    /** The description of this resource listed in different languages. */
    descriptions: Description[];
  };

  export type MoveDamageClass = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The description of this resource listed in different languages. */
    descriptions: Description[];
    /** A list of moves that fall into this damage class. */
    moves: NamedAPIResource<Move>[];
    /** The name of this resource listed in different languages. */
    names: Name[];
  };

  export type MoveLearnMethod = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The description of this resource listed in different languages. */
    descriptions: Description[];
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of version groups where moves can be learned through this method. */
    version_groups: NamedAPIResource<VersionGroup>[];
  };

  export type MoveTarget = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The description of this resource listed in different languages. */
    descriptions: Description[];
    /** A list of moves that that are directed at this target. */
    moves: NamedAPIResource<Move>[];
    /** The name of this resource listed in different languages. */
    names: Name[];
  };

  export type Ability = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** Whether or not this ability originated in the main series of the video games. */
    is_main_series: boolean;
    /** The generation this ability originated in. */
    generation: NamedAPIResource<Generation>;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** The effect of this ability listed in different languages. */
    effect_entries: Effect[];
    /** The list of previous effects this ability has had across version groups. */
    effect_changes: AbilityEffectChange[];
    /** The flavor text of this ability listed in different languages. */
    flavor_text_entries: AbilityFlavorText[];
    /** A list of Pokémon that could potentially have this ability. */
    pokemon: AbilityPokemon[];
  };

  export type AbilityEffectChange = {
    /** The previous effect of this ability listed in different languages. */
    effect_entries: Effect[];
    /** The version group in which the previous effect of this ability originated. */
    version_group: NamedAPIResource<VersionGroup>;
  };

  export type AbilityFlavorText = {
    /** The localized name for an API resource in a specific language. */
    flavor_text: string;
    /** The language this text resource is in. */
    language: NamedAPIResource<Language>;
    /** The version group that uses this flavor text. */
    version_group: NamedAPIResource<VersionGroup>;
  };

  export type AbilityPokemon = {
    /** Whether or not this a hidden ability for the referenced Pokémon. */
    is_hidden: boolean;
    /** Pokémon have 3 ability 'slots' which hold references to possible abilities they could have. This is the slot of this ability for the referenced pokemon. */
    slot: number;
    /** The Pokémon this ability could belong to. */
    pokemon: NamedAPIResource<Pokemon>;
  };

  export type Characteristic = {
    /** The identifier for this resource. */
    id: number;
    /** The remainder of the highest stat/IV divided by 5. */
    gene_modulo: number;
    /** The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5. */
    possible_values: number[];
  };

  export type EggGroup = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of all Pokémon species that are members of this egg group. */
    pokemon_species: NamedAPIResource<PokemonSpecies>[];
  };

  export type Gender = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A list of Pokémon species that can be this gender and how likely it is that they will be. */
    pokemon_species_details: PokemonSpeciesGender[];
    /** A list of Pokémon species that required this gender in order for a Pokémon to evolve into them. */
    required_for_evolution: NamedAPIResource<PokemonSpecies>[];
  };

  export type PokemonSpeciesGender = {
    /** The chance of this Pokémon being female, in eighths; or -1 for genderless. */
    rate: number;
    /** A Pokémon species that can be the referenced gender. */
    pokemon_species: NamedAPIResource<PokemonSpecies>;
  };

  export type GrowthRate = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The formula used to calculate the rate at which the Pokémon species gains level. */
    formula: string;
    /** The descriptions of this characteristic listed in different languages. */
    descriptions: Description[];
    /** A list of levels and the amount of experienced needed to atain them based on this growth rate. */
    levels: GrowthRateExperienceLevel[];
    /** A list of Pokémon species that gain levels at this growth rate. */
    pokemon_species: NamedAPIResource<PokemonSpecies>[];
  };

  export type GrowthRateExperienceLevel = {
    /** The level gained. */
    level: number;
    /** The amount of experience required to reach the referenced level. */
    experience: number;
  };

  export type Nature = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The stat decreased by 10% in Pokémon with this nature. */
    decreased_stat: NamedAPIResource<Stat>;
    /** The stat increased by 10% in Pokémon with this nature. */
    increased_stat: NamedAPIResource<Stat>;
    /** The flavor hated by Pokémon with this nature. */
    hates_flavor: NamedAPIResource<BerryFlavor>;
    /** The flavor liked by Pokémon with this nature. */
    likes_flavor: NamedAPIResource<BerryFlavor>;
    /** A list of Pokéathlon stats this nature effects and how much it effects them. */
    pokeathlon_stat_changes: NatureStatChange[];
    /** A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent. */
    move_battle_style_preferences: MoveBattleStylePreference[];
    /** The name of this resource listed in different languages. */
    names: Name[];
  };

  export type NatureStatChange = {
    /** The amount of change. */
    max_change: number;
    /** The stat being affected. */
    pokeathlon_stat: NamedAPIResource<PokeathlonStat>;
  };

  export type MoveBattleStylePreference = {
    /** Chance of using the move, in percent, if HP is under one half. */
    low_hp_preference: number;
    /** Chance of using the move, in percent, if HP is over one half. */
    high_hp_preference: number;
    /** The move battle style. */
    move_battle_style: NamedAPIResource<MoveBattleStyle>;
  };

  export type PokeathlonStat = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A detail of natures which affect this Pokéathlon stat positively or negatively. */
    affecting_natures: NaturePokeathlonStatAffectSets;
  };

  export type NaturePokeathlonStatAffectSets = {
    /** A list of natures and how they change the referenced Pokéathlon stat. */
    increase: NaturePokeathlonStatAffect[];
    /** A list of natures and how they change the referenced Pokéathlon stat. */
    decrease: NaturePokeathlonStatAffect[];
  };

  export type NaturePokeathlonStatAffect = {
    /** The maximum amount of change to the referenced Pokéathlon stat. */
    max_change: number;
    /** The nature causing the change. */
    nature: NamedAPIResource<Nature>;
  };

  export type Pokemon = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The base experience gained for defeating this Pokémon. */
    base_experience: number;
    /** The height of this Pokémon in decimetres. */
    height: number;
    /** Set for exactly one Pokémon used as the default for each species. */
    is_default: boolean;
    /** Order for sorting. Almost national order, except families are grouped together. */
    order: number;
    /** The weight of this Pokémon in hectograms. */
    weight: number;
    /** A list of abilities this Pokémon could potentially have. */
    abilities: PokemonAbility[];
    /** A list of forms this Pokémon can take on. */
    forms: NamedAPIResource<PokemonForm>[];
    /** A list of game indices relevent to Pokémon item by generation. */
    game_indices: VersionGameIndex[];
    /** A list of items this Pokémon may be holding when encountered. */
    held_items: PokemonHeldItem[];
    /** A link to a list of location areas, as well as encounter details pertaining to specific versions. */
    location_area_encounters: string;
    /** A list of moves along with learn methods and level details pertaining to specific version groups. */
    moves: PokemonMove[];
    /** A set of sprites used to depict this Pokémon in the game. */
    sprites: PokemonSprites;
    /** The species this Pokémon belongs to. */
    species: NamedAPIResource<PokemonSpecies>;
    /** A list of base stat values for this Pokémon. */
    stats: PokemonStat[];
    /** A list of details showing types this Pokémon has. */
    types: PokemonType[];
  };

  export type PokemonAbility = {
    /** Whether or not this is a hidden ability. */
    is_hidden: boolean;
    /** The slot this ability occupies in this Pokémon species. */
    slot: number;
    /** The ability the Pokémon may have. */
    ability: NamedAPIResource<Ability>;
  };

  export type PokemonType = {
    /** The order the Pokémon's types are listed in. */
    slot: number;
    /** The type the referenced Pokémon has. */
    type: NamedAPIResource<Type>;
  };

  export type PokemonHeldItem = {
    /** The item the referenced Pokémon holds. */
    item: NamedAPIResource<Item>;
    /** The details of the different versions in which the item is held. */
    version_details: PokemonHeldItemVersion[];
  };

  export type PokemonHeldItemVersion = {
    /** The version in which the item is held. */
    version: NamedAPIResource<Version>;
    /** How often the item is held. */
    rarity: number;
  };

  export type PokemonMove = {
    /** The move the Pokémon can learn. */
    move: NamedAPIResource<Move>;
    /** The details of the version in which the Pokémon can learn the move. */
    version_group_details: PokemonMoveVersion[];
  };

  export type PokemonMoveVersion = {
    /** The method by which the move is learned. */
    move_learn_method: NamedAPIResource<MoveLearnMethod>;
    /** The version group in which the move is learned. */
    version_group: NamedAPIResource<VersionGroup>;
    /** The minimum level to learn the move. */
    level_learned_at: number;
  };

  export type PokemonStat = {
    /** The stat the Pokémon has. */
    stat: NamedAPIResource<Stat>;
    /** The effort points (EV) the Pokémon has in the stat. */
    effort: number;
    /** The base value of the stst. */
    base_stat: number;
  };

  export type PokemonSprites = {
    /** The default depiction of this Pokémon from the front in battle. */
    front_default: string;
    /** The shiny depiction of this Pokémon from the front in battle. */
    front_shiny: string;
    /** The female depiction of this Pokémon from the front in battle. */
    front_female: string;
    /** The shiny female depiction of this Pokémon from the front in battle. */
    front_shiny_female: string;
    /** The default depiction of this Pokémon from the back in battle. */
    back_default: string;
    /** The shiny depiction of this Pokémon from the back in battle. */
    back_shiny: string;
    /** The female depiction of this Pokémon from the back in battle. */
    back_female: string;
    /** The shiny female depiction of this Pokémon from the back in battle. */
    back_shiny_female: string;
  };

  export type LocationAreaEncounter = {
    /** The location area the referenced Pokémon can be encountered in. */
    location_area: NamedAPIResource<LocationArea>;
    /** A list of versions and encounters with the referenced Pokémon that might happen. */
    version_details: VersionEncounterDetail[];
  };

  export type PokemonColor = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of the Pokémon species that have this color. */
    pokemon_species: NamedAPIResource<PokemonSpecies>[];
  };

  export type PokemonForm = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The order in which forms should be sorted within all forms. Multiple forms may have equal order, in which case they should fall back on sorting by name. */
    order: number;
    /** The order in which forms should be sorted within a species' forms. */
    form_order: number;
    /** True for exactly one form used as the default for each Pokémon. */
    is_default: boolean;
    /** Whether or not this form can only happen during battle. */
    is_battle_only: boolean;
    /** Whether or not this form requires mega evolution. */
    is_mega: boolean;
    /** The name of this form. */
    form_name: string;
    /** The Pokémon that can take on this form. */
    pokemon: NamedAPIResource<Pokemon>;
    /** A set of sprites used to depict this Pokémon form in the game. */
    sprites: PokemonFormSprites;
    /** The version group this Pokémon form was introduced in. */
    version_group: NamedAPIResource<VersionGroup>;
    /** The form specific full name of this Pokémon form, or empty if the form does not have a specific name. */
    names: Name[];
    /** The form specific form name of this Pokémon form, or empty if the form does not have a specific name. */
    form_names: Name[];
  };

  export type PokemonFormSprites = {
    /** The default depiction of this Pokémon form from the front in battle. */
    front_default: string;
    /** The shiny depiction of this Pokémon form from the front in battle. */
    front_shiny: string;
    /** The default depiction of this Pokémon form from the back in battle. */
    back_default: string;
    /** The shiny depiction of this Pokémon form from the back in battle. */
    back_shiny: string;
  };

  export type PokemonHabitat = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of the Pokémon species that can be found in this habitat. */
    pokemon_species: NamedAPIResource<PokemonSpecies>[];
  };

  export type PokemonShape = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The "scientific" name of this Pokémon shape listed in different languages. */
    awesome_names: AwesomeName[];
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of the Pokémon species that have this shape. */
    pokemon_species: PokemonSpecies[];
  };

  export type AwesomeName = {
    /** The localized "scientific" name for an API resource in a specific language. */
    awesome_name: string;
    /** The language this "scientific" name is in. */
    language: NamedAPIResource<Language>;
  };

  export type PokemonSpecies = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage. */
    order: number;
    /** The chance of this Pokémon being female, in eighths; or -1 for genderless. */
    gender_rate: number;
    /** The base capture rate; up to 255. The higher the number, the easier the catch. */
    capture_rate: number;
    /** The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon. */
    base_happiness: number;
    /** Whether or not this is a baby Pokémon. */
    is_baby: boolean;
    /** Initial hatch counter: one must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's. */
    hatch_counter: number;
    /** Whether or not this Pokémon has visual gender differences. */
    has_gender_differences: boolean;
    /** Whether or not this Pokémon has multiple forms and can switch between them. */
    forms_switchable: boolean;
    /** The rate at which this Pokémon species gains levels. */
    growth_rate: NamedAPIResource<GrowthRate>;
    /** A list of Pokedexes and the indexes reserved within them for this Pokémon species. */
    pokedex_numbers: PokemonSpeciesDexEntry[];
    /** A list of egg groups this Pokémon species is a member of. */
    egg_groups: NamedAPIResource<EggGroup>[];
    /** The color of this Pokémon for Pokédex search. */
    color: NamedAPIResource<PokemonColor>;
    /** The shape of this Pokémon for Pokédex search. */
    shape: NamedAPIResource<PokemonShape>;
    /** The Pokémon species that evolves into this Pokemon_species. */
    evolves_from_species: NamedAPIResource<PokemonSpecies>;
    /** The evolution chain this Pokémon species is a member of. */
    evolution_chain: APIResource<EvolutionChain>;
    /** The habitat this Pokémon species can be encountered in. */
    habitat: NamedAPIResource<PokemonHabitat>;
    /** The generation this Pokémon species was introduced in. */
    generation: NamedAPIResource<Generation>;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of encounters that can be had with this Pokémon species in pal park. */
    pal_park_encounters: PalParkEncounterArea[];
    /** A list of flavor text entries for this Pokémon species. */
    flavor_text_entries: FlavorText[];
    /** Descriptions of different forms Pokémon take on within the Pokémon species. */
    form_descriptions: Description[];
    /** The genus of this Pokémon species listed in multiple languages. */
    genera: Genus[];
    /** A list of the Pokémon that exist within this Pokémon species. */
    varieties: PokemonSpeciesVariety[];
  };

  export type Genus = {
    /** The localized genus for the referenced Pokémon species */
    genus: string;
    /** The language this genus is in. */
    language: NamedAPIResource<Language>;
  };

  export type PokemonSpeciesDexEntry = {
    /** The index number within the Pokédex. */
    entry_number: number;
    /** The Pokédex the referenced Pokémon species can be found in. */
    pokedex: NamedAPIResource<Pokedex>;
  };

  export type PalParkEncounterArea = {
    /** The base score given to the player when the referenced Pokémon is caught during a pal park run. */
    base_score: number;
    /** The base rate for encountering the referenced Pokémon in this pal park area. */
    rate: number;
    /** The pal park area where this encounter happens. */
    area: NamedAPIResource<PalParkArea>;
  };

  export type PokemonSpeciesVariety = {
    /** Whether this variety is the default variety. */
    is_default: boolean;
    /** The Pokémon variety. */
    pokemon: NamedAPIResource<Pokemon>;
  };

  export type Stat = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** ID the games use for this stat. */
    game_index: number;
    /** Whether this stat only exists within a battle. */
    is_battle_only: boolean;
    /** A detail of moves which affect this stat positively or negatively. */
    affecting_moves: MoveStatAffectSets;
    /** A detail of natures which affect this stat positively or negatively. */
    affecting_natures: NatureStatAffectSets;
    /** A list of characteristics that are set on a Pokémon when its highest base stat is this stat. */
    characteristics: APIResource<Characteristic>;
    /** The class of damage this stat is directly related to. */
    move_damage_class: NamedAPIResource<MoveDamageClass>;
    /** The name of this resource listed in different languages. */
    names: Name[];
  };

  export type MoveStatAffectSets = {
    /** A list of moves and how they change the referenced stat. */
    increase: MoveStatAffect[];
    /** A list of moves and how they change the referenced stat. */
    decrease: MoveStatAffect[];
  };

  export type MoveStatAffect = {
    /** The maximum amount of change to the referenced stat. */
    change: number;
    /** The move causing the change. */
    move: NamedAPIResource<Move>;
  };

  export type NatureStatAffectSets = {
    /** A list of natures and how they change the referenced stat. */
    increase: NamedAPIResource<Nature>[];
    /** A list of nature sand how they change the referenced stat. */
    decrease: NamedAPIResource<Nature>[];
  };

  export type Type = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** A detail of how effective this type is toward others and vice versa. */
    damage_relations: TypeRelations;
    /** A list of game indices relevent to this item by generation. */
    game_indices: GenerationGameIndex[];
    /** The generation this type was introduced in. */
    generation: NamedAPIResource<Generation>;
    /** The class of damage inflicted by this type. */
    move_damage_class: NamedAPIResource<MoveDamageClass>;
    /** The name of this resource listed in different languages. */
    names: Name[];
    /** A list of details of Pokémon that have this type. */
    pokemon: TypePokemon[];
    /** A list of moves that have this type. */
    moves: NamedAPIResource<Move>[];
  };

  export type TypePokemon = {
    /** The order the Pokémon's types are listed in. */
    slot: number;
    /** The Pokémon that has the referenced type. */
    pokemon: NamedAPIResource<Pokemon>;
  };

  export type TypeRelations = {
    /** A list of types this type has no effect on. */
    no_damage_to: NamedAPIResource<Type>[];
    /** A list of types this type is not very effect against. */
    half_damage_to: NamedAPIResource<Type>[];
    /** A list of types this type is very effect against. */
    double_damage_to: NamedAPIResource<Type>[];
    /** A list of types that have no effect on this type. */
    no_damage_from: NamedAPIResource<Type>[];
    /** A list of types that are not very effective against this type. */
    half_damage_from: NamedAPIResource<Type>[];
    /** A list of types that are very effective against this type. */
    double_damage_from: NamedAPIResource<Type>[];
  };

  export type Language = {
    /** The identifier for this resource. */
    id: number;
    /** The name for this resource. */
    name: string;
    /** Whether or not the games are published in this language. */
    official: boolean;
    /** The two-letter code of the country where this language is spoken. Note that it is not unique. */
    iso639: string;
    /** The two-letter code of the language. Note that it is not unique. */
    iso3166: string;
    /** The name of this resource listed in different languages. */
    names: Name[];
  };

  export type Description = {
    /** The localized description for an API resource in a specific language. */
    description: string;
    /** The language this name is in. */
    language: NamedAPIResource<Language>;
  };

  export type Effect = {
    /** The localized effect text for an API resource in a specific language. */
    effect: string;
    /** The language this effect is in. */
    language: NamedAPIResource<Language>;
  };

  export type Encounter = {
    /** The lowest level the Pokémon could be encountered at. */
    min_level: number;
    /** The highest level the Pokémon could be encountered at. */
    max_level: number;
    /** A list of condition values that must be in effect for this encounter to occur. */
    condition_values: NamedAPIResource<EncounterConditionValue>[];
    /** Percent chance that this encounter will occur. */
    chance: number;
    /** The method by which this encounter happens. */
    method: NamedAPIResource<EncounterMethod>;
  };

  export type FlavorText = {
    /** The localized flavor text for an API resource in a specific language. */
    flavor_text: string;
    /** The language this name is in. */
    language: NamedAPIResource<Language>;
  };

  export type GenerationGameIndex = {
    /** The internal id of an API resource within game data. */
    game_index: number;
    /** The generation relevent to this game index. */
    generation: NamedAPIResource<Generation>;
  };

  export type MachineVersionDetail = {
    /** The machine that teaches a move from an item. */
    machine: APIResource<Machine>;
    /** The version group of this specific machine. */
    version_group: NamedAPIResource<VersionGroup>;
  };

  export type Name = {
    /** The localized name for an API resource in a specific language. */
    name: string;
    /** The language this name is in. */
    language: NamedAPIResource<Language>;
  };

  export type VerboseEffect = {
    /** The localized effect text for an API resource in a specific language. */
    effect: string;
    /** The localized effect text in brief. */
    short_effect: string;
    /** The language this effect is in. */
    language: NamedAPIResource<Language>;
  };

  export type VersionEncounterDetail = {
    /** The game version this encounter happens in. */
    version: NamedAPIResource<Version>;
    /** The total percentage of all encounter potential. */
    max_chance: number;
    /** A list of encounters and their specifics. */
    encounter_details: Encounter[];
  };

  export type VersionGameIndex = {
    /** The internal id of an API resource within game data. */
    game_index: number;
    /** The version relevent to this game index. */
    version: NamedAPIResource<Version>;
  };

  export type VersionGroupFlavorText = {
    /** The localized name for an API resource in a specific language. */
    text: string;
    /** The language this name is in. */
    language: NamedAPIResource<Language>;
    /** The version group which uses this flavor text. */
    version_group: NamedAPIResource<VersionGroup>;
  };
}
