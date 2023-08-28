import {MaxProperties} from "@tsed/schema";

export class TestModel {
  @MaxProperties(1)
  test: any;
}
