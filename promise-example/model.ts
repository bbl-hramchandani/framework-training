export class ModelClass {

    public functionbought(): Promise<any> {

        let varone = new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve("My mom model bought an iPhone via function");
            }, 2000);
        }); 

        return varone;

    }

    public functionshow(): Promise<any> {

        let vartwo = new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve("I will model show it off via function");
            }, 6000);
        });

        return vartwo;

    }

    public bought = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve("My mom model bought an iPhone");
        }, 2000);
    });

    public show = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve("I will model show it off");
        }, 6000);
    });

}

/*export const modelbought = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve("My mom model bought an iPhone");
    }, 2000);
});

export const modelshow = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve("I will model show it off");
    }, 6000);
});*/