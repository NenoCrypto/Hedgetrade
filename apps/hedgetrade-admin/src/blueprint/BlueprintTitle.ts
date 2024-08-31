import { Blueprint as TBlueprint } from "../api/blueprint/Blueprint";

export const BLUEPRINT_TITLE_FIELD = "name";

export const BlueprintTitle = (record: TBlueprint): string => {
  return record.name?.toString() || String(record.id);
};
