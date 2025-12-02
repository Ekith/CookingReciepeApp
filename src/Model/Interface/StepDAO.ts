import Step from "../../Controller/Step";


interface StepDAO {

    createStep(step: Step): number;

    readStep(): Step[];

    updateStep(step: Step): boolean;

    deleteStep(step: Step): boolean;

    getStepById(id: number): Step | null;
}

export default StepDAO;