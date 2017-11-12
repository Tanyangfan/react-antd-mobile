export const ACTICON = 'ACTICON'


export const ActionTest = (item) =>{
    return {
        type: ACTICON,
        time:Date.now(),
        item:item
    }
}