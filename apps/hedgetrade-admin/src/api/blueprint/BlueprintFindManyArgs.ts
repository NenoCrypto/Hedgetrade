import { BlueprintWhereInput } from "./BlueprintWhereInput";
import { BlueprintOrderByInput } from "./BlueprintOrderByInput";

export type BlueprintFindManyArgs = {
  where?: BlueprintWhereInput;
  orderBy?: Array<BlueprintOrderByInput>;
  skip?: number;
  take?: number;
};
