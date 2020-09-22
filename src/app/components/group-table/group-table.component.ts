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
  thOptions2 = [
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
              filed: "1-1",
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
              filed: "1-2",
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
      filed: "4-1",
      childs: [],
    },
  ];
  thOptions1 = [
    {
      name: "森林碳汇",
      unit: "万亩",
      hasChildssss: true,
      level: 1,
      childs: [
        {
          name: "市局任务",
          unit: "万亩",
          level: 2,
          hasChildssss: false,
          childs: [],
          filed: "filed1",
        },
        {
          name: "实际完成",
          unit: "万亩",
          level: 2,

          hasChildssss: false,
          childs: [],
          filed: "filed2",
        },
        {
          name: "先造后补",
          unit: "万亩",
          level: 2,

          hasChildssss: false,
          childs: [],
          filed: "filed3",
        },
        {
          name: "碳汇造林",
          unit: "万亩",
          level: 2,

          hasChildssss: false,
          childs: [],
          filed: "filed4",
        },
      ],
    },
    {
      name: "生态景观林带建设",
      unit: "单位1",
      level: 1,
      hasChildssss: true,
      childs: [
        {
          name: "任务1",
          unit: "单位1",
          level: 2,
          hasChildssss: true,
          childs: [
            {
              name: "任务1",
              unit: "单位1",
              level: 3,
              hasChildssss: false,
              childs: [],
              filed: "filed5",
            },
          ],
        },
        {
          name: "任务2",
          unit: "单位1",
          level: 2,

          hasChildssss: false,
          childs: [],
          filed: "filed6",
        },
        {
          name: "任务3",
          unit: "单位1",
          level: 2,

          hasChildssss: false,
          childs: [],
          filed: "filed7",
        },
        {
          name: "任务4",
          unit: "单位1",
          level: 2,

          hasChildssss: false,
          childs: [],
          filed: "filed8",
        },
      ],
    },
    {
      name: "表头",
      unit: "单位3",
      hasChildssss: false,
      childs: [],
      filed: "filed9",
      level: 1,
    },
    {
      name: "森林抚育",
      unit: "单位2",
      hasChildssss: true,
      level: 1,
      childs: [
        {
          name: "省级森林抚育",
          unit: "单位2",
          level: 2,
          hasChildssss: false,
          childs: [],
          filed: "filed10",
        },
        {
          name: "中央财政森林抚育",
          unit: "单位2",
          hasChildssss: true,
          level: 2,
          childs: [
            {
              name: "2018年任务",
              unit: "单位2",
              hasChildssss: false,
              childs: [],
              filed: "filed11",
              level: 3,
            },
            {
              name: "2019年任务",
              unit: "单位2",
              hasChildssss: false,
              childs: [],
              filed: "filed12",
              level: 3,
            },
            {
              name: "2019年任务",
              unit: "单位2",
              hasChildssss: true,
              level: 3,
              childs: [
                {
                  name: "2019年任务",
                  unit: "单位2",
                  hasChildssss: false,
                  childs: [],
                  filed: "filed13",
                  level: 4,
                },
                {
                  name: "2019年任务",
                  unit: "单位2",
                  level: 4,
                  hasChildssss: true,
                  childs: [
                    {
                      name: "2019年任务",
                      unit: "单位2",
                      level: 5,
                      hasChildssss: false,
                      childs: [],
                      filed: "filed14",
                    },
                    {
                      name: "2019年任务",
                      unit: "单位2",
                      level: 5,
                      hasChildssss: false,
                      childs: [],
                      filed: "filed15",
                    },
                    {
                      name: "2019年任务",
                      unit: "单位2",
                      level: 5,
                      hasChildssss: false,
                      childs: [],
                      filed: "filed16",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
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
  dataList = [
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

  getKeys(item) {
    return Object.keys(item);
  }

  ngOnInit() {
    console.log(this.getMaxLevel(this.thOptions));
    this.maxDeepth = this.getMaxLevel(this.thOptions);
    // this.initThArr()
    console.log(this.thOptions);
    this.generateTharr(this.thOptions);
    console.log(this.thArr);
    this.thArr[0].unshift({
      name: "项目",
      colspan: 1,
      rowspan: this.maxDeepth,
    });
  }
  initThArr() {
    // throw new Error("Method not implemented.");
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
  }

  startEdit(id: number, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.editId = id;
  }
}
