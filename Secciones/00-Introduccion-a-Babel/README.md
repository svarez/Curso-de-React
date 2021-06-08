# Introducción a Babel

[Babel](http://babeljs.io/) es una herramienta que nos permite transformar nuestro código JS de última generación (o con funcionalidades extras) a un código de Javascript que cualquier navegador o versión de Node.js pueda entender.

Babel funciona mediante plugins para que le indiquemos que cosas queremos que transforme, por ejemplo con el plugin [babel-plugin-transform-es2015-arrow-functions](https://www.npmjs.com/package/babel-plugin-transform-es2015-arrow-functions) podemos decirle que transforme las arrow functions de ECMAScript 2015 a funciones normales, con [babel-plugin-transform-react-jsx](https://www.npmjs.com/package/babel-plugin-transform-react-jsx) podemos hacer que entienda código de JSX y lo convierta a código JS normal.

Instalando Babel
----------------

Vamos a ver como instalar y usar Babel en su última versión desde la consola. Para eso necesitamos bajarnos varios módulos de **npm**.

    npm i -D babel-core babel-cli
    

Con esto instalado ya podemos ejecutar **Babel** con el comando

    babel script.js --out-file script-compiled.js
    

Sin embargo con la configuración por defecto Babel no hace absolutamente nada, así que necesitamos configurarlo nosotros.

Configurando Babel
------------------

Para eso vamos a crear en la raíz de nuestro proyecto un archivo llamado `.babelrc` que es donde vamos a colocar la configuración en formato _JSON_.

Lo primero que necesitamos que haga Babel es transformar nuestro código de ECMAScript 6 a ECMAScript 5, para esto hay muchos plugins, uno por cada característica nueva, y para no bajar uno por uno existen los **presets**.

Un preset es un conjunto de plugins, hay varios presets que los desarrolladores de Babel ofrecen y otros creados por la comunidad, para ECMAScript 6 vamos a bajar el preset [ES2015](https://babeljs.io/docs/plugins/preset-es2015/).

    npm i -D babel-preset-es2015
    

Luego vamos a agregarlo a la configuración de Babel.

    {
    	"presets": ["es2015"]
    }
    

Ese JSON lo colocamos en el archivo `.babelrc` y cuando volvamos a usar Babel este va a transformar todo el código de ES6 a ES5. Como se puede ver no necesitamos agregar `babel-preset-` al nombre del preset ya que Babel asume por defecto que tiene ese prefijo.

### Soportando React.js y JSX

En Platzi usamos [React.js](https://platzi.com/react/) y usamos **JSX** como sintaxis para poder usar esto:

    return (
    	<div>
    		Hola mundo
    	</div>
    );
    

En vez de esto:

    return React.DOM.div(null, 'Hola mundo');
    

Al crear nuestros componentes, sin embargo los navegadores y Node.js no entienden JSX, así que para que funcionen nuestro components necesitamos transformar nuestro código, para eso usamos Babel.

Babel tiene plugins para soportar JSX y [FlowType](http://flowtype.org/), sí deciden usarlo, y posee un preset con estos plugins llamado [react](https://babeljs.io/docs/plugins/preset-react/) así que vamos a cargarlo, para esto lo bajamos con `npm`.

    npm i -D babel-preset-react
    

Y lo agregamos a nuestra configuración.

    {
    	"presets": ["es2015", "react"]
    }
    

Con esto ya podemos usar JSX y FlowType en nuestro código y Babel se va a encargar de que funcione en todos los navegadores realizando las transformaciones necesarias.
