import { type SchemaTypeDefinition } from "sanity";
import profile from "./schemas/profile";
import hero from "./schemas/hero";
import services from "./schemas/services";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, hero, services],
};
