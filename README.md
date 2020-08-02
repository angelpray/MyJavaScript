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