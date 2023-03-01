// generamos variables en las cual guardamos el requerimiento de los plugins que nos serviran para empaquetar los archivos html y css esto para poder instanciarlos ya que son clases con diferentes metodos.
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");   

// variable que almacena en que modo se ejecuta el codigo segun el modulo cross-env .
const devMode = process.env.NODE_ENV !== "production";  
const Dotenv = require('dotenv-webpack');

// lo primero que hay que hacer es especificar una entrada es decir el archivo que esta renderizando todos los componentes, luego toma todo ese codigo y lo empaqueta para luego expulsarlo ya todo minificado en un solo archivo para ello debemos especificar una salida el cual es el objeto output el path es donde le vamos a indicar donde vamos a crear una carpeta con los archivos empaquetados y cual sera el nombre de la carpeta en este caso se usa la variabel __dirname para especificar que la carpeta se va crear en la raiz del proyecto, y el parametro concatenado con el + es el nombre de la carpeta, adicionalmente establecemos el nombre del archivo js minificado que normalmente se llama bundle.js (para probar que funciona ejecuta el codigo npx webpack)
module.exports = { 
    entry: [
        "@babel/polyfill",
        "./src/app/index.js" 
    ], 
    output: { 
        path: __dirname + "/build", 
        filename: "bundle.js"
    }, 
//  luego hay que especificarle en que modo vamos a transpilar el codigo en este caso es en modo de desarrollador, luego hay que establecer como transpilar el codigo js y css para ello creamos un objeto llamado module y dentro de este objeto tenemos un array de objetos llamado rules, dentro de este objeto le vamos a especificar atraves de expresiones regulares, que nos seleccione todos los archivos js y los transpile a un solo archivo atraves del modulo de babel-loader, para el caso de css es bastante similar, pero tenemos un problema que en modo desarrollador debemos usar el modulo style-loader, y en modo de produccion debemos usar el modulo mini-css-exract-plugin con su propieadad louder, entonces generamos un operador ternario que ejecuta una variable que almacena el modo en el que se esta empaquetando el codigo ya sea en produccion o en desarrollo y gracias a esto nosotros podemos ejecutar un modulo u otro atraves de un operador ternario.  
    mode: "development", 
    module: { 
        rules: [{ 
            test: /\.js$/, 
            loader: "babel-loader"
        }, 
        { 
            test: /\.css$/, 
            use:[ 
                devMode ? "style-loader" : MiniCssExtractPlugin.loader, 
                "css-loader"
            ] 
        },{ 
            test: /\.(jpg|png|svg|gif|webp)$/, 
            use: [{ 
                loader: "file-loader", 
                options: {
                    name: "[name].[ext]", 
                    output: "assets/", 
                    useRelativePath: true
                }
            }]
        }
    ]
    }, 
    // lo siguiente es decirle donde va transpilar el codigo html y css, para lo cual usamos los modulos html-webpack-plugin y mini-css-extract-plugin que son clases por lo cual para poder instanciarlas hay que crear una variable para cada una, luego para el modulo de html hay que especificar en donde va insertar todo el codigo html que minifique webpack, por lo cual lo vamos a dirigir a nuestro index.html que hemos creado anteriormente y para el caso de css solo hay que especificar el nombre que tendra el archivo minificado css, que en este caso se guardara en la carpeta build con el nombre bundle.css 
    plugins: [ 
        new Dotenv(),

        new HtmlWebpackPlugin ({ 
            template: "./public/index.html"
        }), 
        new MiniCssExtractPlugin ({ 
            filename: "bundle.css"
        })

    ]
}  ;



