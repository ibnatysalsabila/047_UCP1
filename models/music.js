module.exports = (sequelize, DataTypes) => {
    const Pegawai = sequelize.define("Pegawai", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Nama:{
        type: DataTypes.STRING,
    },
    Author: {
        type: DataTypes.STRING
    },
    Tahunterbit: {
        type: DataTypes.DATE
    },
    Genre: {
        type: DataTypes.STRING
    }
});
return Pegawai;
}
        