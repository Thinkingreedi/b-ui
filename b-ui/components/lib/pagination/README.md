# Pagination - 分页器

## 分页器 属性

|   属性    |   说明   |  类型   |                 可选值                  | 默认值 |
| :-------: | :------: | :-----: | :-------------------------------------: | :----: |
|   pageNo    |   当前页面   | Number  | -- |   1  |
| pageSize  | 一页显示条数 | Number |               --               | 10  |
|   total   | 数据总条数 | Number |              --              | 必选  |
| continues | 中间显示页数 |  Number   |                 5/7                  |   5   |
| @getPageInfo | 点击事件（得到最新的pageNo） |  函数   |  自定义       |   空   |