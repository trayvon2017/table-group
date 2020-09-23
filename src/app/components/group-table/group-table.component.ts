import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { NzInputDirective } from "ng-zorro-antd";

@Component({
  selector: "app-group-table",
  templateUrl: "./group-table.component.html",
  styleUrls: ["./group-table.component.scss"],
})
export class GroupTableComponent implements OnInit {
  thOptions = [
    {
      id: 1,
      name: "兽类",
      unit: "种",
      creator: 1,
      type: 2,
      createTime: "2020-09-22 10:23:36",
      pId: null,
      level: 1,
      creatorName: "超级管理员",
      filed: null,
      childs: [
        {
          name: "小计",
          level: 2,
          childs: [],
          fileds: ["1-3", "1-8"],
        },
        {
          id: 2,
          name: "果子狸",
          unit: "种",
          creator: 1,
          type: 2,
          createTime: "2020-09-22 10:23:57",
          pId: 1,
          level: 2,
          creatorName: "超级管理员",
          filed: null,
          childs: [
            {
              id: 3,
              name: "狸",
              unit: "种",
              creator: 1,
              type: 2,
              createTime: "2020-09-22 10:24:18",
              pId: 2,
              level: 3,
              creatorName: "超级管理员",
              filed: null,
              childs: [],
            },
            {
              id: 8,
              name: "狐狸",
              unit: "种",
              creator: 1,
              type: 2,
              createTime: "2020-09-22 15:33:21",
              pId: 2,
              level: 3,
              creatorName: "超级管理员",
              filed: null,
              childs: [],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "鱼类",
      unit: "种",
      creator: 1,
      type: 2,
      createTime: "2020-09-22 10:24:36",
      pId: null,
      level: 1,
      creatorName: "超级管理员",
      filed: null,
      childs: [],
    },
    {
      id: 13,
      name: "大鸟类",
      unit: "只",
      creator: 1,
      type: 2,
      createTime: "2020-09-22 17:33:36",
      pId: null,
      level: 1,
      creatorName: "超级管理员",
      filed: null,
      childs: [
        {
          name: "小计",
          level: 2,
          childs: [],
          fileds: ["13-17", "13-18", "13-16"],
        },
        {
          id: 15,
          name: "麻雀",
          unit: "只",
          creator: 1,
          type: 2,
          createTime: "2020-09-22 17:35:12",
          pId: 13,
          level: 2,
          creatorName: "超级管理员",
          filed: null,
          childs: [
            {
              id: 17,
              name: "小麻雀",
              unit: "只",
              creator: 1,
              type: 2,
              createTime: "2020-09-22 17:35:55",
              pId: 15,
              level: 3,
              creatorName: "超级管理员",
              filed: null,
              childs: [],
            },
            {
              id: 18,
              name: "大麻雀",
              unit: "只",
              creator: 1,
              type: 2,
              createTime: "2020-09-22 17:36:13",
              pId: 15,
              level: 3,
              creatorName: "超级管理员",
              filed: null,
              childs: [],
            },
          ],
        },
        {
          id: 16,
          name: "鹦鹉",
          unit: "只",
          creator: 1,
          type: 2,
          createTime: "2020-09-22 17:35:33",
          pId: 13,
          level: 2,
          creatorName: "超级管理员",
          filed: null,
          childs: [],
        },
      ],
    },
  ];
  maxDeepth: number;
  editId: number | null;
  tempFields = [];
  constructor() {}
  thArr = [];
  @ViewChild("tb", { static: true }) tb: ElementRef;
  @ViewChild(NzInputDirective, { read: ElementRef, static: false })
  inputElement: ElementRef;
  @HostListener("window:click", ["$event"])
  handleClick(e: MouseEvent): void {
    const comResult = this.tb.nativeElement.compareDocumentPosition(e.target);
    if (this.editId && comResult !== 20) {
      this.editId = null;
    }
  }
  dataList2 = [
    {
      regionName: "河头镇",
      regionNo: 1,
      field1: 1,
      field2: 1,
      field3: 1,
      field4: 1,
      field5: 1,
      field6: 1,
      field7: 1,
      field8: 1,
      field9: 1,
      field10: 1,
      field11: 1,
      field12: 1,
      field13: 1,
      field14: 1,
      field15: 1,
      field16: 1,
    },
    {
      regionName: "河头镇",
      // regionNo: 1,
      field1: 1,
      field2: 1,
      field3: 1,
      field4: 1,
      field5: 1,
      field6: 1,
      field7: 1,
      field8: 1,
      field9: 1,
      field10: 1,
      field11: 1,
      field12: 1,
      field13: 1,
      field14: 1,
      field15: 1,
      field16: 1,
    },
  ];

  dataList = [
    { regionName: "查干镇", no: 1 },
    { regionName: "河头镇", no: 2 },
  ];

  fieldsArr = [
    {
      label: "1",
      fields: ["1-3", "1-8"],
    },
    {
      label: "4",
      fields: ["4"],
    },
    {
      label: "13",
      fields: ["13-17", "13-18", "13-16"],
    },
  ];

  getKeys(item) {
    return Object.keys(item);
  }

  xj = {};
  hj = {};
  py = {};

  ngOnInit() {
    console.log(this.getMaxLevel(this.thOptions));
    this.maxDeepth = this.getMaxLevel(this.thOptions);
    console.log(this.thOptions);
    this.generateTharr(this.thOptions);
    console.log(this.thArr);
    this.thArr[0].unshift(
      {
        name: "项目",
        colspan: 1,
        rowspan: this.maxDeepth,
      },
      {
        name: "合计",
        colspan: 1,
        rowspan: this.maxDeepth,
      }
    );
    this.initDataList();
    this.init1stRow();
  }
  initDataList() {
    this.dataList.forEach((data, i) => {
      this.fieldsArr.forEach((arr, j) => {
        if (arr.fields.length > 1) {
          this.defineComputeProperty(
            this.xj,
            `xj-${data["no"]}-${arr["label"]}`,
            data,
            arr.fields
          );
        }
        arr.fields.forEach((field) => {
          data[field] = 0;
          // tempFields.push(field);
          if (i === 0) {
            this.tempFields.push(field);
          }
        });
      });
      this.defineComputeProperty(
        this.hj,
        `hj-${data["no"]}`,
        data,
        this.tempFields
      );
    });
    console.log(this.dataList);
  }
  init1stRow() {
    const that = this;
    // 第一行fields汇总
    this.tempFields.forEach((field) => {
      Object.defineProperty(this.py, field, {
        enumerable: true,
        get() {
          return that.dataList.reduce((acc, curr) => {
            return acc + (curr.hasOwnProperty(field) ? +curr[field] : 0);
          }, 0);
        },
      });
    });

    // 第一行fields汇总
    Object.defineProperty(this.py, "hj", {
      enumerable: true,
      get() {
        return that.dataList.reduce((acc, curr, index) => {
          return acc + that.hj[`hj-${curr["no"]}`];
        }, 0);
      },
    });

    // 第一行小计汇总---
    this.fieldsArr.forEach((arr, j) => {
      if (arr.fields.length > 1) {
        const tempArr = [];
        this.dataList.forEach((data, i) => {
          tempArr.push(`xj-${data["no"]}-${arr["label"]}`);
        });
        this.defineComputeProperty(
          this.py,
          `sum-${arr["label"]}`,
          this.xj,
          tempArr
        );
      }
    });

    // Object.keys(this.hj).forEach((key) => {
    //   Object.defineProperty(this.py, key, {
    //     enumerable: true,
    //     get() {
    //       return that.dataList.reduce((acc, curr, index) => {
    //         return acc + that.hj[`hj-${curr["no"]}`];
    //       }, 0);
    //     },
    //   });
    // });
  }

  defineComputeProperty(obj, prop, data, fileds: Array<any>) {
    Object.defineProperty(obj, prop, {
      enumerable: true,
      get() {
        return fileds.reduce((accumulator, field) => {
          return accumulator + (data.hasOwnProperty(field) ? +data[field] : 0);
        }, 0);
      },
    });
  }

  getMaxLevel(options: Array<any>): number {
    let maxL = 1;
    options.forEach((option) => {
      option["colspan"] = this.getLeafCountTree(option);
      if (option.childs.length) {
        maxL =
          maxL > 1 + this.getMaxLevel(option.childs)
            ? maxL
            : 1 + this.getMaxLevel(option.childs);
        option["cj"] = maxL;
      } else {
        option["cj"] = 1;
      }
    });
    return maxL;
  }

  getLeafCountTree(json) {
    if (!json.childs.length) {
      // json.colspan = 1;
      return 1;
    } else {
      var leafCount = 0;
      for (var i = 0; i < json.childs.length; i++) {
        leafCount = leafCount + this.getLeafCountTree(json.childs[i]);
      }
      // json.colspan = leafCount;
      return leafCount;
    }
  }

  generateTharr(options: Array<any>) {
    options.forEach((option) => {
      if (!this.thArr[option.level - 1]) {
        this.thArr[option.level - 1] = [];
      }
      if (option.cj + option.level === this.maxDeepth + 1) {
        option["rowspan"] = 1;
      } else if (!option.childs.length) {
        option["rowspan"] = this.maxDeepth + 1 - option.level;
      } else {
        option["rowspan"] = 1;
      }
      this.thArr[option.level - 1].push(option);
      if (option.childs.length) {
        this.generateTharr(option.childs);
      }
    });
  }

  submit() {
    console.log(this.dataList);
    console.log("py", JSON.stringify(this.py));
    console.log("xj", this.xj);
    console.log("hj", this.hj);
    console.log(
      JSON.stringify({
        py: this.py,
        dataList: this.dataList,
        xj: this.xj,
        hj: this.hj,
      })
    );
  }

  startEdit(id: number, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.editId = id;
  }
}
