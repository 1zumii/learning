### 1.[composer](https://laravelacademy.org/post/4506.html)

- [composer的使用](https://www.jianshu.com/p/6146949387e9)
- [composer.phar 安装东西太慢](https://www.zhihu.com/question/24997679/answer/30703365)
- [composer中文镜像 - learnku](https://learnku.com/composer/t/4484/composer-mirror-use-help)
- [代替镜像](https://learnku.com/composer/wikis/30594)

### 2.[生命周期](https://learnku.com/docs/laravel/5.7/lifecycle/2248)

- public/index.php
- HTTP/Console 内核
- provider(服务提供器)
- 请求调度

### 3.[服务容器](https://learnku.com/docs/laravel/5.7/container/2249)

- 依赖注入
- 绑定
- 解析实例

### 4.[服务提供器](https://learnku.com/docs/laravel/5.7/providers/2250)

- 注册方法 register：将服务绑定到服务容器中
- boot方法：在所有服务提供者被注册以后才会被调用

### 5.[配置信息](https://learnku.com/docs/laravel/5.7/configuration/2243)

- .env文件中的所有变量都被解析为字符串

- env()函数检索这些变量的值

- 环境配置

  - 环境变量类型
  - 检索环境配置

  - 确定当前环境

    App::environment()返回 .env 文件中的 APP_ENV 变量

- 访问配置值

  - 全局访问配置值：config()
  - 「点」语法：访问 config 目录下的.php

- 配置缓存

- 维护模式

  - `php artisan down`
  - `php artisan up`

### 6.[Laravel的文件夹结构](https://learnku.com/docs/laravel/5.7/structure/2244)

- 根目录

  - app
  - bootstrap
  - config
  - database
  - public
  - resources 
  - routes
  - storage
  - tests
  - vendor

- App 目录

  - Broadcasting
  - Console
  - Events
  - Exceptions
  - Http
  - Jobs
  - Listeners
  - Mail
  - Notifications
  - Policies
  - Providers
  - Rules

### 7.[路由入门](https://laravelacademy.org/post/9611.html)

- 定义路由：

  - routes/web.php
  - routes/api.php

- 路由动作：

  - `Route::get`
  - `Route::post`
  - `Route::put`
  - `Route::any`
  - `Route::match`

- 控制器+方法名，来取代闭包函数

- 路由参数：

  - 在路由路径中用 { } 进行标识并将其传递到闭包函数
  - 定义可选的路由参数：{arg?} 

- 为路由参数指定正则匹配规则：`->where()`

- 路由命名：

  - `->name('routeName')`
  - 通过辅助函数route()为该命名路由生成 URL 

### 8.[路由分组规则](https://laravelacademy.org/post/9612.html)

- [底层原理 - 门面](https://laravelacademy.org/post/9536.html)

- 对路由按照共同特征进行分组：

  - `Route::group()`
  - 链式调用只是语法糖，底层最终还是下面 Route::group 这种定义实现的

- 共享特征设置：

  - [中间件](https://laravelacademy.org/post/9539.html)：
- [中间件 - learnku](https://learnku.com/docs/laravel/5.7/middleware/2254)
    - HTTP请求到达目标动作之前必须经过的“层”，每一层都会检查请求并且可以完全拒绝它
    - [Throttle中间件](https://juejin.im/post/5b29ccb5e51d4558a846bd93)(API请求频率限制)：*./app/Http/Kernel.php $middlewareGroups*
    - `Route::middleware()`
    
- 路由路径前缀：
  
  - `Route::prefix()`
  
- 子域名路由:
  
  - `Route::domain()`
  
- 子命名空间：
  
  - `Route::namespace()`
    - 默认的命名空间是 *App\Http\Controllers*

### 9.[控制器](https://laravelacademy.org/post/9614.html)

- 如果没有指定完整的命名空间，那么路由文件`web.php`中所有控制器都位于App\Http\Controllers命名空间下

#### 控制器中的中间件

- `Middleware`可以在路由文件中被分配给控制器路由

```php
Route::get('profile', 'UserController@show')->middleware('auth');
```

- 使用控制器构造函数中的`middleware()`方法
  - 可以约束中间件只对控制器类中的某些特定方法生效
  - `only()`
  - `except()`

```php
class UserController extends Controller
{
    /**
     * 实例化一个控制器实例
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');

        $this->middleware('log')->only('index');

        $this->middleware('subscribed')->except('store');
    }
}
```

### 10.[请求](https://learnku.com/docs/laravel/5.5/requests/1297)

- `use Illuminate\Http\Request;`

### 11.[日志](https://learnku.com/docs/laravel/5.7/logging/2264)

- 可以将一组上下文数组数据传递给日志方法

  - `Log::info('User failed to login.', ['id' => $user->id])`

  - 第1个参数：字符串

  - 第2个参数：数组

    - 可以Log出数据库的查询结果(stdClass)
    - 可以Log出json_decode为数组的变量

- *./storage/logs/laravel.log* 

### 12.[数据库和 Eloquent ](https://laravelacademy.org/post/9692.html)

- 敏感信息都保存到.env文件
- 配置多个数据库连接

### 13.[通过查询构建器实现简单的增删改查操作](https://laravelacademy.org/post/9697.html)

- 原生Statement语句： `DB::statement(); `

- 原生查询语句： `DB::select();`

- 原生插入语句： `DB::insert();`

- 原生更新语句： `DB::update();`

- 原生删除语句： `DB::delete();`

- 查询构建器：

  - 构建查询构建器：`DB::table();`

  - 查询记录：`->get()`

  - 返回查询结果中的第一条记录：`->first()`

  - 指定查询条件：`->where()`

  - 指定查询的字段：`->select()`

  - 插入记录：

    - `->insert()`
    - `->insertGetId()`

  - 更新记录：`->update()`

  - 数值字段更新：

    - 增：`->increment()`
    - 减：`->decrement()`

  - 删除记录：`->delete()`

  - 清空记录后重置自增ID：`->truncate()`

### 14.[通过查询构建器实现复杂的查询语句](https://laravelacademy.org/post/9698.html)

- Laravel自带的语法糖：

  - 获取单个字段的值：`->value()`

  - 判断字段值的存在：

    - `->exists()`
    - `->doesntExist()`

  - 以主键ID值为key，以字段值为value构建关联数组：
  
    `->pluck()`
  
  - 将结果集分块：`->chunk()`
  
- 聚合函数：

  - 计数：`->count()`
  - 求和：`->sum()`
  - 平均：`->avg()`
  - 最小值：`->min()`
  - 最大值：`->max()`

- Where查询：

  - 基本查询：

    - 基本查询

    - like查询

    - and查询

    - or查询：`->orWhere()`

    - between查询：

      `->whereBetween()`

      `->whereNotBetween()`

    - in查询：

      `->whereIn()`

      `->whereNotIn()`

    - null查询：

      `->whereNull()`

      `->whereNotNull()`

    - 日期查询：

      `->whereYear()`

      `->whereMonth()`

      `->whereDay()`

      `->whereDate()`

      `->whereTime()`

    - 字段查询：`->whereColumn()`

    - JSON查询

  - 高级查询：

    - 参数分组
    - [SQL查询中in和exists](https://www.jianshu.com/p/f212527d76ff)
    - exists：`->whereExists()`
    - 子查询：`->whereSub()`

  - 连接查询：

    - `->join()`
    - `->leftJoin()`
    - `->rightJoin()`
    - `->crossJoin()`
    - [SQL Join连接](https://www.runoob.com/sql/sql-join.html)：先确定一个主表作为结果集，然后，把其他表的行有选择性地join在主表结果集上。

### 15.[日期及时间处理包 ](https://9iphp.com/web/laravel/php-datetime-package-carbon.html)[Carbon](https://9iphp.com/web/laravel/php-datetime-package-carbon.html)

- `Carbon::now();`
- `Carbon::parse();`

### 16.[缓存系统](https://learnku.com/docs/laravel/5.7/cache/2278)

- `use Illuminate\Support\Facades\Cache;`
- 获取：`Cache::get('key');`
- 存储：`Cache::put('key', 'value', $minutes);`
- 获取并删除：`Cache::pull('key');`
- 删除：`Cache::forget('key');`
- 清空所有：`Cache::flush();`

