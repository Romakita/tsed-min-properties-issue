import {Controller} from "@tsed/di";
import {Get, Returns} from "@tsed/schema";
import {TestModel} from "../../models/TestModel";


@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  @Returns(200, TestModel)
  get() {
    return {};
  }
}
