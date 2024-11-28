import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabaseSync('../assets/mydb.db');

const createTable = async () => {
    try {
        await db.execAsync(
            'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(12) NOT NULL UNIQUE, contra VARCHAR(20) NOT NULL, nivel VARCHAR(15)NOT NULL, objetivo VARCHAR(30) NOT NULL, altura INTEGER NOT NULL, peso INTEGER NOT NULL);');
        console.log('Tabla creada (o ya existía)');
    } catch (error) {
        console.error('Error al crear la tabla:', error);
    }
};

const anadirUsuario = async (nombre,contra,estatura,peso,objetivo,nivel,callback) => {
    try {
        const resultado = await db.runAsync(
            'INSERT INTO usuarios (nombre, contra, nivel, objetivo, altura, peso) VALUES (?,?,?,?,?,?);',
            [nombre, contra, nivel, objetivo, estatura, peso]
        );
        console.log('Usuario agregado', resultado); // Aquí puedes ver el resultado de la inserción
        callback(true);
    } catch (error) {
        console.log('No se pudo agregar el usuario:', error);
        callback(false, error);
    }
    
    /*db.runAsync(tx => {
        tx.executeSql(
            'INSERT INTO usuarios (nombre,contra,nivel,objetivo,altura,peso) VALUES (?,?,?,?,?,?);',
            [nombre,contra,nivel,objetivo,estatura,peso],
            (_, result) => {
                console.log('Se agrego usuario');
                callback(true);
            },
            (_, error) => {
                console.log('no se pudo agregar usuario: ', error);
                callback(false,error);
            }
        );
    });*/
};

const inicioSesion = async (nombre, contra, callback) => {
    try{
        const resultado = await db.getAllAsync('SELECT * FROM usuarios WHERE nombre = ? AND contra = ?;',[nombre, contra]);
        console.log(resultado);
        if(resultado.length > 0){
            console.log("Inicio de sesion correcto",)
            callback(true);
        }
        else{
            console.log('Nombre de usuario o contrasena incorrectos');
            callback(false);
        }
        
    }
    catch (error){
        console.log('Nombre de usuario o contrasena incorrectos', error);
        callback(false);
    }
};

const verificarNombreUnico = async(nombre, callback) => {
    try{
        const resultado = await db.getAllAsync('SELECT nombre FROM usuarios WHERE nombre = ?;',[nombre]);
        if(resultado.length>0){
            console.log('Nombre de usuario ya esta en uso')
            callback (false);
        }
        else{
            console.log('Bien')
            callback (true);
        }
    }
    catch (error){
        console.log('Ocurrio un error');
        callback(false);
    }
}

export { createTable, anadirUsuario, inicioSesion};