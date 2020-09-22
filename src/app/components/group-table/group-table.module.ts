import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GroupTableComponent } from "./group-table.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [GroupTableComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgZorroAntdModule],
  exports: [GroupTableComponent],
})
export class GroupTableModule {}
