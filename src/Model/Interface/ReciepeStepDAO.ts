import ReciepeStep from "../../Controller/ReciepeStep";


interface ReciepeStepDAO {

    createReciepeStep(reciepeStep: ReciepeStep): number;

    readReciepeStep(): ReciepeStep[];

    updateReciepeStep(reciepeStep: ReciepeStep): boolean;

    deleteReciepeStep(reciepeStep: ReciepeStep): boolean;

    getReciepeStepById(id: number): ReciepeStep | null;

    getReciepeStepByReciepeId(reciepeId: number): ReciepeStep[];

    getReciepeStepByStepId(stepId: number): ReciepeStep[];

}

export default ReciepeStepDAO;