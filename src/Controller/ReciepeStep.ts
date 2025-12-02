

class ReciepeStep {
    id: number;
    reciepeId: number;
    stepId: number;
    order: number;

    constructor(id: number, reciepeId: number, stepId: number, order: number) {
        this.id = id;
        this.reciepeId = reciepeId;
        this.stepId = stepId;
        this.order = order;
    }

}

export default ReciepeStep;