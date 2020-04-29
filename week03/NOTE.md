# 每周总结可以写在这里
Expressions 表达式
    四则运算的内部实现算法就是树
    Member
    a.b
    a[b]
    super.b
    super['b']
    foo`string`
    new.target
    new Foo()
Completion Record
    [[type]]:normal, break, continue, return, throw
    [[value]]:Types
    [[target]]:label
    简单语句
        ExpressionStatement
        EmptyStatement
        DebuggerStatement
        ThrowStatement
        ContinueStatement
        BreakStatement
        RetrunStatement
    复合语句
        BlockStatement
        LterationStatement
        LabelledStatement
    声明
        FunctionDeclaration
        GeneratorDeclaration
        AsyncFunctionDeclaration
        ......
        有var写在function范围内，至少写在变量第一次出现的地方，不要写在子结构里
        let, const全面代替var
        
Object
    唯一标示性
    有状态
    行为->状态的改变
    \*\*\*\*改变自身状态的行为
    key：symbol, String
    value: Data, Accessor
    ->Data:[[value]] writable enumerable configurable
    ->Accessor get set enumerabale configurable
    Object API/Grammar
    1 {} . [] object.defineProperty
    2 Object.create/Object.setPrototypeOf/Object.getPrototypeOf -> 不和 3 混用
    3 new/class/extends -> 不和 2 混用
    4 new/function/prototype -> 抛弃
    Object.prototype[[setPrototypeOf]]

JS 标准里面有哪些对象是我们无法实现的，都有哪些特性
    特殊行为的对象
        1、Array
        2、Object.prototype
        3、String
        4、Arguments
        5、模块的namespace对象
    宿主对象
        由JavaScript宿主环境提供的对象，它们的行为完全由宿主环境决定，常见浏览器的window。
            document
            navigator
            origin
            captureEvents
            location
            history
            indexedDB
    内置对象
        由JavaScript语言提供的对象
    固有对象
        由标准决定，随着JavaScript运行时创建而自动创建的对象实例。
            1、三个值
                Infinity
                NaN
                undefined
            2、九个函数
                eval
                isFinite
                isNaN
                parseFloat
                parseInt
                decodeURI
                decodeURIComponent
                encodeURI
                encodeURIComponent
            3、一些构造函数
                Array、Date....
    原生对象
        能够通过语言本身的构造器创建的对象。
            1、基础类型
                Boolean
                String
                Number
                Symbol
                Object
            2、基础功能和数据结构
                ArrayDate
                RegExp
                Promise
                Proxy
                Map
                WeakMap
                Set
                WeakSet
                Function
            3、错误类型
                Error
                EvalError
                RangeError
                ReferenceError
                SyntaxError
                TypeError
