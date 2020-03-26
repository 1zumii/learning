### Column.render

- `Function(text, record, index) {}` 
- 函数按顺序接受参数，无关参数名
- 生成复杂数据的渲染函数
- `text`:当前dataIndex对应的值
- `record`：当前行的值（包含所有数据）
- `index`：行索引

### Table.expandedRowRender

- 额外的展开行
- `Function(record, index, indent, expanded):ReactNode`
- `record`：展开的行的整行数据
- `index`：展开行的index(从0开始)
- `indent`：1
- `expanded`：是否展开，boolean

### Table.rowKey

- 可以手动指定表格行 key 的取值

- **string**|Function(record):**string**

  ```js
  rowKey = { data => data.id }
  ```