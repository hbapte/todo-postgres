import { Model, DataTypes, Sequelize } from 'sequelize';

interface TasksAttributes {
    id: number;
    title: string;
    user_id: string;
    createdAt: Date;
    updatedAt: Date;
}

module.exports = (sequelize: Sequelize) => {
    class Tasks extends Model<TasksAttributes> implements TasksAttributes {
        declare id: number;
        declare title: string;
        declare user_id: string;
        declare createdAt: Date;
        declare updatedAt: Date;

        static associate(models: any) {
            Tasks.belongsTo(models.Users, { foreignKey: 'user_id' ,as: 'user' });
      
        }
    }

    Tasks.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: new DataTypes.STRING(50),
                allowNull: false,
            },
            user_id: {
                type: new DataTypes.INTEGER,
                allowNull: false,
            },
            createdAt: {
                field: 'createdAt',
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updatedAt: {
                field: 'updatedAt',
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            }
        },
        {
            sequelize,
            tableName: 'tasks',
            timestamps: true,
        }
    );

    return Tasks;
};
