# 每周总结可以写在这里

编程语言通识
    语言按语法分类
        非形式语言
            中文、英文、...
        形式语言（分类法：乔姆斯基谱系）
            0- 型文法（无限制文法或短语结构文法）包括所有的文法。
                格式： ?::=?
                形如： :: = "c"（没有约束）
            1- 型文法（上下文相关文法）生成上下文相关语言。
                格式： ??::=??
                形如： ::= "x" (x在a和c的上下文中解析为b)
            2- 型文法（上下文无关文法）生成上下文无关语言。
                格式： ::= ? 形如： （不管在什么上下文情况下都产生A）
            3- 型文法（正规文法）生成正则语言。
                格式： ::=?

产生式(BNF)
    用尖括号括起来的名称来表示语法结构名
    语法结构分成基础结构和需要用其他语言结构定义的复合结构
    基础结构称终结符
    复合结构称非终结符
    引号和中间的字符表示终结符
    可以有括号
    *表示重复多次
    |表示或
    +表示至少一次
    其它产生式
    EBNF，ABNF Customized

图灵完备性
    命令式 —— 图灵机
        goto
        if和while
    声明式 —— lambda
        递归
    动态与静态
        动态： 再用户的设备/在线服务器上
        产品实际运行时
        Runtime
    静态：
        在程序员的设备上
        产品开发时
        Compiletime
    类型系统
        动态类型系统与静态类型系统 （例如TypeScript才有静态类型系统）
        强类型与弱类型(存在隐式类型转型即为弱类型，例如C++)
    复合类型
    结构体
    函数签名
    子类型
    逆变/协变
    一般命令式编程语言
    从小到大



空格
    TAB:对应unicode的字符集位置是9
    SPACE:对应unicode的字符集位置是20
    NBSP:不换行空格（英语：no-break space，NBSP）是空格字符，用途是禁止自动换行。 HTML 页面显示时会自动合并多个连续的空白字符（whitespace character），但该字符是禁止合并的， 因此该字符也称作“硬空格”（hard space、fixed space）。
    ZWSP:零宽空格，（zero-width space, ZWSP）是一种不可打印的 Unicode 字符，用于可能需要换行处。 在 HTML 页面中，零宽空格可以替代。但是在一些网页浏览器（例如 Internet Explorer 的版本 6 或以下）不支持零宽空格的功能。

换行
    LF: 换行，'\n'
    CR: 回车，'\r'
注释
    SingleLineCommet（单行注释//）
    MultiLineCommet（多行注释/**/）
Token
    Identifier(变量)
    变量名
    属性名(属性名可以跟关键字重合)
    Literal(直接量)
    NumberLiteral(数字直接量)
    StringLiteral(字符直接量)
    Punctuator(运算符)
    Keywords
Literal
    NumberLiteral
    数字由IEEE 754 Double Float表示，其中组成部分：
        符号位Sign(1)
        指数Exponent(11)
        精度Fraction(52)
        数字可分成十进制DecimalLiteral（说明，其中1e3/1E3，为1000）、八进制OctallIntegerLiteral(0o开头)、 二进制BinaryIntegerLiteral(0b开头)、十六进制HexIntegerLiteral(0x开头)

        0b10 // 等价parseInt('10',2)/10 .toString(2)
        2 //二进制输出

        0x11// 等价parseInt('17',16)
        17 //十六进制输出

        0o10// 等价parseInt('10',8)
        8 //八进制输出

        10// 等价parseInt('10')
        10
StringLiteral
    Character(字符)
    Code Point(码点)
    Encoding
    UTF
字符集包含的集合有：
    ASCII
    Unicode
    UCS（U+0000 - U+FFFF）
    GB（国标）
    GB2312
    GBK
    GB18030
    ISO-8859(欧洲)
    BIG5(繁体)