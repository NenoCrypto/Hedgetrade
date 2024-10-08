/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BlueprintWhereUniqueInput } from "./BlueprintWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { BlueprintUpdateInput } from "./BlueprintUpdateInput";

@ArgsType()
class UpdateBlueprintArgs {
  @ApiProperty({
    required: true,
    type: () => BlueprintWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BlueprintWhereUniqueInput)
  @Field(() => BlueprintWhereUniqueInput, { nullable: false })
  where!: BlueprintWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => BlueprintUpdateInput,
  })
  @ValidateNested()
  @Type(() => BlueprintUpdateInput)
  @Field(() => BlueprintUpdateInput, { nullable: false })
  data!: BlueprintUpdateInput;
}

export { UpdateBlueprintArgs as UpdateBlueprintArgs };
