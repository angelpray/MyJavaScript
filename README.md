# MyJavaScript ✔

# Function

## Function Name

因为函数名只是指向函数的指针，所以它们的作用类似于包含指向对象的指针的任何其他变量。这意味着一个函数名可以有多个名称。

使用不带括号的函数名将访问函数指针，而不是执行函数。ES6中的所有函数对象都公开描述函数的只读名称属性。

特别的，如果一个函数未命名，访问name属性会得到一个空字符串；如果一个函数是使用构造函数创建的，会返回"anonymous"。如果函数是getter，setter，或使用bind()实例化的函数，则将在前缀之前进行标识。

## Understanding Arguments

JavaScript函数不关心传入了多少参数，也不关心这些参数的数据类型。

你定义了一个接受两个参数的函数并不意味着您只能传入两个参数。你可以传入任意个参数或者一个也不传。
之所以这样是因为JavaScript中的参数在内部表示为数组。

数组总是传递给函数，但函数并不关心数组中有什么（如果有的话）。

如果数组传入时没有项目，没问题；如果传入时数组有很多项目，那也没问题。

当使用function关键字定义函数（意味着非箭头函数），实际上有一个arguments对象可以在函数内部访问对象，以检索传入的每个参数的值。

argument对象的作用类似于数组（尽管它不是Array的实例）因为你可以使用方括号表示法访问每个参数（第一个参数的arguments[0],第二个参数是argument[1],如此类推），并使用length属性确定传入的参数数量。

因此，命名参数只是方便的，而不是必要的。

在JavaScript中命名参数不会创建稍后必须匹配的函数签名，没有针对命名参数的验证。

使用argument对象还可以通过length属性检查函数的参数数量。

arguments的值始终与相应命名参数的值保持同步。

任何未传递到函数中的命名参数都会自动赋值为undefined。

严格模式下，arguments的值不会和命名参数保持同步并且

## Arguments in Arrow Function

使用箭头函数，无法使用arguments访问传递给函数的参数。只能使用在其函数定义中的命名参数进行访问。
然而，arguments关键字可以是从被调用的包装函数的作用域提供给箭头函数作用域的。

## JavaScript pass by value

JavaScript中的所有参数都是按值传递。这意味着JavaScript将您传递给函数的变量值复制到局部变量中。
您对函数内的局部变量所做的任何更改都不会影响您传入的参数。换句话来说，对参数的更改不会反映在函数外部。

如果通过引用传递函数参数，则传递给函数的变量更改将反映在函数外部。这在JavaScript中是不可能的。

## NO OVERLOADING

JavaScript函数不能实现传统上的重载。传统的其他语言，像Java，可以编写函数的两个定义，只要他们的签名(接收的参数的类型和数量)不同即可.

JavaScript函数是没有函数签名的,因为参数在JavaScript函数中是表示为包含零个或多个值的数组.没有函数签名,就不可能实现真正的重载.

如果在JavaScript中将两个函数定义为具有相同的函数名,那么最后一个函数将会成为该函数名的所有者.

我们可以通过检查传递给函数的参数和类型和数量，然后做出相应的反应来模拟方法的重载。

## DEFAULT PARAMETER VALUES

在ES5.1以及更早的版本中，实现默认参数值的常见策略是通过检查参数是否未定义来确定参数是否未提供给函数调用，如果参数确实未定义那么久为参数赋值。

在ES6中，这种方法不再需要了。如果调用函数时没有提供参数值，它支持显示定义参数值。

直接在函数签名内使用等号操作符就能实现默认参数，跟ES5.1之前的方法的作用是一样的。

将未定义的参数作为参数传递，或者不传递任何参数的处理方式是相同的，这允许多个独立的默认变量。

使用默认参数，arguments对象的值不反映参数的默认值，它只反映传递给函数的一般参数。

默认参数不限于原始值和对象类型，还可以从调用的函数计算值。

请注意，只有在未提供参数时才会调用计算默认值的方法。

# DEFAULT PARAMETER AND TEMPORAL DEAD ZONE

因为你可以在计算默认参数值时定义对象和动态地调用函数，这就意味着函数参数有某种执行范围。

使用默认值定义多个参数的操作方式与使用let关键字顺序声明变量的操作方式是一样有效的。

默认参数按照它们在参数列表中列出的顺序进行初始化。

因为参数是按顺序初始化的，所以稍后定义其默认值的参数可以引用较早的参数。

参数初始化顺序遵循相同的时间死区原则，指定参数不能引用稍后定义的其他参数值。

参数也存在于它们自己的作用域内，因此不能引用函数体的作用域，这将引发错误。

参数也存在于它们自己的作用域内，因此不能引用函数体的作用域。

## SPREAD ARGUMENTS

与将数组作为单个函数参数传递不同，能够拆分一个数组并将每个值分别作为单独的参数传递通常更有用。

将扩展运算符应用于可迭代对象并将其作为单个参数传递给函数将会得到分离，比如说，大小为N的可迭代对象，会将其作为N个单独参数传递给函数。

使用spread运算符，你可以将外部数组直接解压到函数调用的各个参数中。

因为数组的大小是已知的，所以对出现在spread运算符之前或之后的其他参数（包括其他spread运算符）没有限制。

arguments对象完全不知道是否存在spread运算符，它将把拆分的值作为单独的部分处理，因为它们就是这样传递给函数的。

spread运算符可以用作标准函数和箭头函数中的命名参数，也可以和默认参数一起使用。

## REST PARAMETER

在编写函数定义时，可以使用spread运算符将可变长度的参数范围合并到单个数组中，而不是单独处理参数。在很多方面，这与arguments对象的工作方式非常相似，但在本例中，rest参数变成了一个正式的Array对象。

如果在REST参数之前有命名参数，它将采用其余未命名参数的大小，如果没有未命名参数，则为空数组。

因为rest参数的大小可变，因此你只能将其用作最后一个形式参数。

虽然箭头函数不支持arguments对象，但支持REST参数，这为我们提供了与arguments对象极其相似的行为。

使用REST参数不会影响arguments对象，arguments对象还是会准确反映传递给函数的参数内容。

## FUNCTION DECLARATION VERSUS FUNCTION EXPRESSION

在执行代码之前，函数声明在执行上下文中读取并可用，而函数表达式直到执行到该行代码时才完成。

在代码开始运行之前，通过函数声明提升（function declaration hositing）将函数声明读取并添加到执行上下文中（execution context）。

在评估代码时，JavaScript引擎对函数声明执行第一次遍历，并将它们放到代码的顶部。因此，即使函数声明在代码中使用之后出现，引擎也会将函数声明提升到顶部。

## FUNCTIONS AS VALUES

因为JavaScript中的函数名只不过是变量,所以可以在任何使用变量的地方使用函数.

这意味着不仅可以将函数作为参数传递给另一个函数,还可以将函数作为另一个函数的结果返回.

从函数中返回函数也是可以的,并且非常有用.

## FUNCTION INTERNALS

在ES5中函数内部有两个特殊对象:this和arguments,ES6新增了.target属性.

### arguments

arguments通常用于表示函数参数,还有另一个有用的属性时callee,指向拥有当前argumetns对象的函数的指针.

### this

this在标准函数和箭头函数中的行为是不一样的.

在标准函数内,它是对函数正在操作的上下文对象的引用.通常称为this值,比如,当我们在网页的全局范围内调用函数时,this对象就指向window.

this值,只有函数被调用时才能确定,因此this值在整个代码执行过程中可能不一致.

this在箭头函数内,this引用定义箭头函数表达式的上下文.

这在事件或超时将调用回调内的函数(其中调用对象不是预期对象)的情况下尤其有用.在这些情况下使用箭头函数时,将保留由此引用的上下文.

注意,记住一点:函数名只是包含指针的变量.在全局作用域下或在特定对象下调用函数,他们指向的都是一样的函数,只是他们在不同的上下文中执行.

### caller

ES5还形式化了函数对象的一个附加属性:caller.它包含对调用此函数的函数引用,如果该函数是从全局范围调用的,则为null.

### new.target

函数总是能够充当实例化新对象的构造函数,又充当普通的可调用的函数.

ES6中的新增功能是使用new.target确定是否使用new关键字调用了函数.如果正常调用函数new.target是undefined的.如果使用new关键字调用函数,new.target将引用构造函数或函数(也就是引用自身).

## FUNCTION PROPERTIES AND METHODS

函数是ES中的对象,如前所述,对象具有属性和方法.每个函数都有两个属性,length和prototype.length属性表示函数期待得到的参数数量.prototype是引用类型的所有实例方法的实际位置.

函数还有两个附加方法:apply()和call().这两个方法都是用特定的this值调用函数.从而有效地在函数体内设置this对象的值.

apply()接收两个参数:函数内部的this值和一个参数数组.第二个参数可以是Array的实例,也可以是arguments对象.

在严格模式下,在没有上下文对象的情况下调用函数的this值不会强制转换为window对象.相反,除非通过将函数附加到对象或使用apply\call显式设定,否则this就是一个undefined.

call()和apply作用是一样的,但参数以不同的方式传递.第一个参数也是this值,但其余参数直接传递到函数中.
使用call()参数必须具体枚举.

使用apply()或者call取决于将参数传递到函数的最简单的方式.如果你打算直接传递arguments对象,或者已经有一个要传递的数据数组,那么apply是更好的选择.否则call()可能是更合适的选择.如果没有要传递的参数,则这些方法是相同的.

apply和call的真正威力不在于他们传递参数的能力,而在于它们在函数内部设定this值的能力.

使用call()或者apply()扩大范围的优点是对象不需要知道任何有关方法的信息.

ES5定义了一个名为bind()的附加方法.bind()方法创建一个新的函数实例,该实例的this值绑定到传递给bind()的值.

对于函数,继承的方法toLocalString()和toString()总是返回函数的代码.valueOf()只是返回函数本身.

## FUNCTION EXPRESSIONS

定义函数有两种方式:函数声明和函数表达式.

函数声明的关键特征之一是函数声明提升,从而在代码执行之前读取函数声明.这意味着函数声明可能出现在调用它的代码之后,但还是有效的.

函数表达式有几种形式(一般只讨论最常用的函数表达式),函数表达式的作用与其他表达式类似,因此必须在使用前赋值.

理解函数提升是了解函数声明和函数表达式之间差异的关键.

任何时候将函数用作值时,它都是函数表达式.

## RECURSION

回想一下,arguments.callee是指向正在执行的函数的指针,可用于递归调用该函数.因为原始函数可能会被更改,因此建议在编写递归函数的时候始终使用arguments.callee

但在严格模式下,无法访问arguments.callee,在读取它的时候会导致错误.因此相反的,你可以使用命名函数表达式来实现相同的结果.