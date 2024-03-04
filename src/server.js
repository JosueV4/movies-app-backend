const app = require('./app');
const sequelize = require('./utils/connection');

const PORT = process.env.PORT || 8080;

const main = async () => {
    try {
      // Añadir campos nuevos a la tabla, pero borra los datos de la base de datos
    //   sequelize.sync({ alter: true });
      sequelize.sync();
      console.log('DB connected');
      app.listen(PORT);
      console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.log(error)
    }
}

main();
