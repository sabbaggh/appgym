import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabaseSync('../assets/mydb.db');



///CREACION DE TABLAS
const createTable = async () => {
    try {
        await db.execAsync(
            'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(12) NOT NULL UNIQUE, contra VARCHAR(20) NOT NULL, nivel VARCHAR(15)NOT NULL, objetivo VARCHAR(30) NOT NULL, altura INTEGER NOT NULL, peso INTEGER NOT NULL, tPromedio INTEGER NOT NULL DEFAULT 0, rCompletadas INTEGER NOT NULL DEFAULT 0, cPromedio INTEGER NOT NULL DEFAULT 0, dPromedio INTEGER NOT NULL DEFAULT 0);');
        console.log('Tabla creada (o ya existía)');
    } catch (error) {
        console.error('Error al crear la tabla:', error);
    }
};

const crearTablaEjercicios = async () => {
    try {
        await db.execAsync(
            'CREATE TABLE IF NOT EXISTS ejercicios (ejercicio_id INTEGER PRIMARY KEY, nombre_ingles TEXT NOT NULL, nombre_espanol TEXT NOT NULL);');
        console.log('Tabla creada (o ya existía)');
    } catch (error) {
        console.error('Error al crear la tabla:', error);
    }
};

const crearTablaRutinas = async () => {
    try {
        await db.execAsync(
            'CREATE TABLE IF NOT EXISTS rutinas (rutina_id INTEGER PRIMARY KEY, nombre TEXT NOT NULL, descripcion TEXT, veces_realizadas INTEGER DEFAULT 0, nivel_recomendado TEXT NOT NULL, fin TEXT NOT NULL);');
        console.log('Tabla creada (o ya existía)');
    } catch (error) {
        console.error('Error al crear la tabla:', error);
    }
};

const crearTablaRutinasEjercicios = async () => {
    try {
        await db.execAsync(
            'CREATE TABLE IF NOT EXISTS rutinas_ejercicios (rutina_id INTEGER, ejercicio_id INTEGER, FOREIGN KEY (rutina_id) REFERENCES rutinas (rutina_id), FOREIGN KEY (ejercicio_id) REFERENCES ejercicios (ejercicio_id), PRIMARY KEY (rutina_id, ejercicio_id));');
        console.log('Tabla creada (o ya existía)');
    } catch (error) {
        console.error('Error al crear la tabla:', error);
    }
};

const crearTablaHistorial = async () => {
    try{
        await db.execAsync(
            'CREATE TABLE IF NOT EXISTS historial (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, usuario_peso INTEGER, usuario_estatura INTEGER, usuario_objetivo VARCHAR(15), usuario_nivel VARCHAR(30), usuario_rutinas_completadas INTEGER, usuario_tiempo_en_completar REAL, ejercicios_sets INTEGER, ejercicio_reps INTEGER, dificultad_percibida INTEGER, cansancio_percibido INTEGER, id_ejercicio INTEGER);'
        );
        console.log('Se creo tabla historiales');
    } catch(error) {
        console.log('Error al crear la tabla');
    }
}



////INSERTS INICIALES
const insertarRutinas = async () => {
    try {
        await db.execAsync(
            "INSERT INTO rutinas (rutina_id, nombre, descripcion, veces_realizadas, nivel_recomendado, fin) VALUES (1, 'Full Body', 'Entrenamiento de cuerpo completo ideal para principiantes que buscan desarrollar fuerza y coordinación.', 0, 'Principiante', 'ganarMasa'), (2, 'Push', 'Rutina de empuje enfocada en pecho, hombros y tríceps para ganar fuerza en la parte superior del cuerpo.', 0, 'Medio', 'ganarMasa'), (3, 'Pull', 'Rutina de tracción centrada en espalda y bíceps, ideal para ganar masa muscular en la parte superior.', 0, 'Medio', 'ganarMasa'), (4, 'Legs', 'Entrenamiento enfocado en las piernas para desarrollar fuerza y masa muscular en el tren inferior.', 0, 'Medio', 'ganarMasa'), (5, 'Upper', 'Rutina dividida para trabajar la parte superior del cuerpo en detalle.', 0, 'Medio', 'definir'), (6, 'Lower', 'Entrenamiento específico para fortalecer y definir las piernas.', 0, 'Medio', 'definir'), (7, 'Core', 'Rutina dedicada a fortalecer el core, ideal para mejorar estabilidad y definición abdominal.', 0, 'Principiante', 'bajarPeso');");
        console.log('Se insertaron las rutinas');
    } catch (error) {
        console.error('Error al crear la tabla:', error);
    }
};

const insertarEjercicios = async () => {
    try {
        await db.execAsync("INSERT INTO ejercicios (ejercicio_id, nombre_ingles, nombre_espanol) VALUES (1, 'Barbell Squat', 'Sentadilla con barra'), (2, 'Barbell Bench Press', 'Press de banca con barra'), (3, 'Romanian Deadlift', 'Peso muerto rumano'), (4, 'Pull-Ups / Lat Pulldown', 'Dominadas / Jalón al pecho'), (5, 'Overhead Press / Dumbbell Shoulder Press', 'Press militar / Press de hombros con mancuernas'), (6, 'Barbell Bicep Curl', 'Curl de bíceps con barra'), (7, 'Tricep Rope Pushdown', 'Extensión de tríceps con cuerda'), (8, 'Incline Dumbbell Press', 'Press inclinado con mancuernas'), (9, 'Dumbbell Lateral Raise', 'Elevaciones laterales con mancuernas'), (10, 'Parallel Bar Dips', 'Fondos en paralelas'), (11, 'Barbell Row', 'Remo con barra'), (12, 'Deadlift', 'Peso muerto convencional'), (13, 'Dumbbell Pullover', 'Pull-over con mancuerna'), (14, 'Alternating Dumbbell Curl', 'Curl de bíceps alternado con mancuernas'), (15, 'Hammer Curl', 'Curl de martillo'), (16, 'Leg Press', 'Prensa de piernas'), (17, 'Leg Extension', 'Extensiones de piernas en máquina'), (18, 'Standing Calf Raise', 'Elevación de talones de pie'), (19, 'Dumbbell Lunges', 'Zancadas con mancuernas'), (20, 'Seated Calf Raise', 'Elevación de talones sentado'), (21, 'Static Lunges', 'Zancadas estáticas'), (22, 'Plank', 'Plancha abdominal'), (23, 'Hanging Leg Raise', 'Elevaciones de piernas colgado'), (24, 'Russian Twists', 'Giros rusos'), (25, 'Machine Crunch', 'Crunches en máquina'), (26, 'Side Plank', 'Plancha lateral');");
        console.log('Se insertaron los ejercicios');
    } catch (error) {
        console.error('Error al crear la tabla:', error);
    }
};

const insertarRutinasEjercicios = async () => {
    try {
        await db.execAsync("INSERT INTO rutinas_ejercicios (rutina_id, ejercicio_id) VALUES (1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), (1, 7), (2, 2), (2, 8), (2, 9), (2, 5), (2, 10), (2, 7), (3, 4), (3, 11), (3, 12), (3, 13), (3, 14), (3, 15), (4, 1), (4, 16), (4, 3), (4, 17), (4, 18), (4, 19), (5, 2), (5, 4), (5, 8), (5, 11), (5, 9), (5, 14), (5, 7), (6, 1), (6, 16), (6, 3), (6, 17), (6, 20), (6, 21), (7, 22), (7, 23), (7, 24), (7, 25), (7, 26);");
        console.log('Se insertaron los ejercicios con sus rutinas');
    } catch (error) {
        console.error('Error al crear la tabla:', error);
    }
};

const actualizarUsuario = async (tiempo, cansancio, dificultad, callback) => {
    try{
        const tp = Math.round(((global.usuario.tPromedio*global.usuario.rCompletadas)+tiempo)/(global.usuario.rCompletadas+1));
        const rc = global.usuario.rCompletadas+1;
        const cp = Math.round(((global.usuario.cPromedio*global.usuario.rCompletadas)+cansancio)/(global.usuario.rCompletadas+1));
        const dp = Math.round(((global.usuario.dPromedio*global.usuario.rCompletadas)+dificultad)/(global.usuario.rCompletadas+1));

        const resultado = await db.runAsync(
            "UPDATE usuarios SET tPromedio = ?, rCompletadas = ?, cPromedio = ?, dPromedio = ? WHERE nombre = ?;",
            [tp, rc, cp, dp, global.usuario.nombre]
        );
        console.log('Se guardo correctamente la evaluacion', resultado);
        callback(true);
    }catch(error){
        callback(false, error);
    }
    
};

const actualizarHistorial = async (ejercicios,peso, estatura, objetivo, nivel, rutinasCompletadas, tiempo, dificultad, cansancio, callback) => {
    try{
        for(let i = 0; i < ejercicios.length; i++){
            const resultado = await db.runAsync('INSERT INTO historial (usuario_peso, usuario_estatura, usuario_objetivo, usuario_nivel, usuario_rutinas_completadas, usuario_tiempo_en_completar, ejercicios_sets, ejercicio_reps, dificultad_percibida, cansancio_percibido, id_ejercicio) values (?,?,?,?,?,?,?,?,?,?,?);',
                [peso, estatura, objetivo, nivel, rutinasCompletadas, tiempo, ejercicios[i][2], ejercicios[i][3],dificultad, cansancio, ejercicios[i][0]]
            );
            console.log('Se actualizo el historial correctamente', resultado);
        }
        callback(true);
    }catch(error){
        callback(false, error);
    }
};



////PARA ELIMINAR TABLAS
const eliminarTabla = async () => {
    try {
        await db.execAsync("DROP TABLE ejercicios");
        console.log('se elimino la tabla');
    } catch (error) {
        console.error('Error al crear la tabla:', error);
    }
};




/////SELECTS
const selectRutinas = async(id) => {
    try{
        const resultado = await db.getAllAsync(`SELECT r.rutina_id, r.nombre AS rutina_nombre, r.descripcion, r.veces_realizadas, r.nivel_recomendado, r.fin, e.ejercicio_id, e.nombre_ingles, e.nombre_espanol FROM rutinas r JOIN rutinas_ejercicios re ON r.rutina_id = re.rutina_id JOIN ejercicios e ON re.ejercicio_id = e.ejercicio_id WHERE r.rutina_id = ${id};`);
        if(resultado.length>0){
            return resultado;
        }
        else{
            console.log('No se encontraron ejercicios');
            return [];
        }
    }
    catch (error){
        console.log('Ocurrio un error');
        return [];
    }
}

const selectEjercicios = async(ids) => {
    try{
        const rutina = [];
        for(let i = 0; i< ids.length; i++){
            let ejercicioBase = {"descripcion": "Rutina generada con IA", "ejercicio_id": 1, "fin": "", "nivel_recomendado": "", "nombre_espanol": "Sentadilla con barra", "nombre_ingles": "Barbell Squat", "rutina_id": 0, "rutina_nombre": "Rutina generada con IA", "veces_realizadas": 0}
            const resultado = await db.getFirstAsync(`SELECT ejercicio_id, nombre_espanol, nombre_ingles FROM ejercicios WHERE ejercicio_id = ${ids[i]}`);
            ejercicioBase.nombre_espanol = resultado.nombre_espanol
            ejercicioBase.nombre_ingles = resultado.nombre_ingles
            ejercicioBase.ejercicio_id = resultado.ejercicio_id
            rutina.push(ejercicioBase);
            
        }
        if(rutina.length > 0){
            return rutina;
        }
        else{
            console.log('No se encontraron ejercicios');
            return [];
        }

        
    }catch(error){
        console.log('No se pudo encontrar los ejercicios', error)
        return [];
    }
}

const select = async() =>{
    try{
        const resultado = await db.getAllAsync('SELECT * FROM historial;')
        console.log(resultado);
    }
    catch(error){
        console.log(error);
    }
}



////FUNCIONES
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

const inicioSesion = async (nombre, contra) => {
    try{
        const resultado = await db.getAllAsync('SELECT * FROM usuarios WHERE nombre = ? AND contra = ?;',[nombre, contra]);
        console.log(resultado);
        if(resultado.length > 0){
            console.log("Inicio de sesion correcto");
            
            return resultado;
        }
        else{
            console.log('Nombre de usuario o contrasena incorrectos');
            return resultado;
        }
        
    }
    catch (error){
        console.log('Nombre de usuario o contrasena incorrectos', error);
        return;
    }
};

const verificarNombreUnico = async(nombre, callback) => {
    try{
        const resultado = await db.getAllAsync('SELECT nombre FROM usuarios WHERE nombre = ?;',[nombre]);
        if(resultado.length>0){
            console.log('Nombre de usuario ya esta en uso');
            callback(false);
        }
        else{
            console.log('Bien');
            callback(true);
        }
    }
    catch (error){
        console.log('Ocurrio un error');
        callback(false);
    }
}

const actualizarDatos = async (nombre, estatura,peso,objetivo,nivel,callback) => {
    try {
        const resultado = await db.runAsync(
            'UPDATE usuarios SET nivel = ?, objetivo = ?, altura = ?, peso = ? WHERE nombre = ?;',
            [nivel, objetivo, estatura, peso, nombre]
        );
        console.log('Se actualizaron los datos', resultado); // Aquí puedes ver el resultado de la inserción
        callback(true);
    } catch (error) {
        console.log('No se pudieron actualizar los datos', error);
        callback(false, error);
    }
}

export { createTable, anadirUsuario, inicioSesion, verificarNombreUnico, crearTablaEjercicios, crearTablaRutinas, insertarRutinas, insertarEjercicios, selectRutinas, eliminarTabla, crearTablaRutinasEjercicios, insertarRutinasEjercicios, actualizarDatos, crearTablaHistorial, actualizarUsuario, actualizarHistorial, select, selectEjercicios};