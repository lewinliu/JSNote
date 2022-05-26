

## 运算符及数字类型转换
- JS中的加减乘除本应是进行数学运算(如果遇到的值不是数字类型，也需要基于Number()方法把其转换为数字，再进行运算) ;
- 但是JS中加法有特殊情况:相加过程中遇到字符串直接变为字符串拼接;

> console. log(alert(1))
- 1. alert(1): 执行浏览器内置的alert方法，执行方法的时候弹出一个"1"(方法的功能)，此方法没有返回值(默认返回值undefined)
- 2. console. log(undefined)


### 1. Number( )它是按照浏览器从底层机制，把其它数据类型转换为数字
- 字符串:看是否包含非有效数字字符,包含结果就是NaN; ''->0;
- 布尔: true->1 false->0
- null: ->0
- undefined: - > NaN
- 引用类型值都要先转换为字符串再转换为数字
    + {}/正则/函数等
    + >NaN
    + [] ->'' ->0
    + ['12'] ->'12' ->12
    + [12,23] ->'12,23' - >NaN
- ...

### 2. parseInt/ parseFloat([val])遵循按照字符串从左到右查找的机制找有效数字字符(所以传递的值一定是字符串，不是也要转换为字符串然后在查找)
- parseInt(undefined) -> parseInt('undefined') -> NaN
- parseInt('') -> NaN -> 因为没找到有效数字字符

> Number()

    Number(''); // 0
    Number('123a'); // NaN
    Number('a123'); // NaN
    Number(undefined); // NaN
    Number(null); // 0
    Number([]); // 0
    Number({}); // NaN

> parseInt()   只有字符串左边是数字才能转换，否则NaN

    parseInt("")
    NaN
    parseInt("123a")
    123
    parseInt("a123")
    NaN
    parseInt(undefined)
    NaN
    parseInt(null);
    NaN
    parseInt([]);
    NaN
    parseInt({});
    NaN 
    
