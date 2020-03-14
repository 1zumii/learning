1. [Ant Design - Form](https://ant.design/components/form-cn/#components-form-demo-validate-other)
2. [Form表单(一) - 掘金](https://juejin.im/post/5c01e96a51882526f96b498a)
3. [Form表单(二) - 掘金](https://juejin.im/post/5c01e97ce51d45225000f34b)
4. [10分钟精通Ant Design Form表单 - 掘金](https://juejin.im/post/5c47ffff51882533e05ef4f9)

***

#### 创建实例

- `Form.create`
- 实例提供一系列的方法，如注册、收集、校验
- 包装组件是为了更新组件
- 所有需要该实例进行收集校验的组件，必须要通过`getFieldDecorator`进行修饰(该组件的值将完全由该实例管理)

#### 注册

- 1getFieldDecorator(id,options)1
- options 是个对象
- 把需要收集的数据在实例中进行注册，并把注册的值同步到被 getFieldDecorator 修饰的组件上
- 组件不能够在通过value赋值，组件的状态将全部由 getFieldDecorator 托管

#### 收集

#### 校验

***

options.initialValue

- 初次加载时给默认值应使用 options中的`initialValue`，而不是在 componentWillMount 中使用 setFieldsValue()

options.getValueFromEvent

- 可以把 onChange 的参数（如 event）转化为控件的值
- 即：将一个函数指定给此属性，函数的返回值作为当前 field 的 value

