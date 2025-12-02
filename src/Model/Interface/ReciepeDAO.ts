import Reciepe from "../../Controller/Reciepe";


interface ReciepeDAO {

    createReciepe(reciepe: Reciepe): number;

    readReciepe(): Reciepe[];

    updateReciepe(reciepe: Reciepe): boolean;

    deleteReciepe(reciepe: Reciepe): boolean;

    getReciepeById(id: number): Reciepe | null;

    getReciepeByName(name: string): Reciepe[];

}

export default ReciepeDAO;