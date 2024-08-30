import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BlueprintService } from "./blueprint.service";
import { BlueprintControllerBase } from "./base/blueprint.controller.base";

@swagger.ApiTags("blueprints")
@common.Controller("blueprints")
export class BlueprintController extends BlueprintControllerBase {
  constructor(
    protected readonly service: BlueprintService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
