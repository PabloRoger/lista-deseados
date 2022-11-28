# Lista de deseados
Este repositorio está creado con una **intención didáctica, para afianzar los conocimientos adquiridos en React.js.**

La aplicación **consiste en generar una lista de deseados** según lo que introduzca el usuario. Al cumplir ese deseo, habrá un checkbox para tacharlo y un botón para archivarlo.

## Iniciar
Para **iniciar el servidor** debemos usar:

>`npm start`


## Dependencias

Para la implementación de esta aplicación **necesitamos node.js** e instalar una serie de dependencias.

- **Inicializamos npm** en la carpeta raíz del repositorio
	> `npm init`

- **Instalamos react**, usamos `--save` para que nos guarde automáticamente la versión en las dependencias de nuestro package.json
	> `npm install --save react`

- **Instalamos react-dom**, proporciona métodos específicos del DOM
	> `npm install --save react-dom`

- **Instalamos prettier**, nos ayuda al fomateo de nuestro código
	> `npm install --save prettier`

- **Instalamos classNames**, proporciona funcionalidades para el tratamiento de clases
	> `npm install --save classnames`

- **Instalamos Husky**, proporciona funcionalidades para realizar nuestros commits
	> `npm install --save husky`

- **Instalamos eslint** para que nos ayude en tener un código libre de errores
	> `npm install --save-dev eslint`.
	> `npm install --save-dev eslint-config-airbnb`
	> `npm install --save-dev eslint-plugin-import`
	> `npm install --save-dev eslint-plugin-jsx-ally`
	> `npm install --save-dev eslint-plugin-react`

- **Instalamos Lint Staged**, nos permite ejecutar scripts en los archivos que vamos a subir al repositorio
	> `npm install --save-dev lint-staged`

- **Instalamos Parcel Budler**, lo utilizaremos para empaquetar nuestros archivos
	> `npm install --save-dev parcel-bundler`

Las flags `--save` o `--save-dev` se pueden no usar si ya tenemos el package.json ya creado y actualizado con esas dependencias.

## Documentación
Información sacada sobre React.js en: https://es.reactjs.org/
