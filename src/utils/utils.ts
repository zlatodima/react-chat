export function getDate(){
    return new Date().toISOString().split('T')[0];
}

export function getTime(){
    const timePartWithExtraSymbol = new Date().toISOString().split('T')[1];
    return timePartWithExtraSymbol.split('Z')[0];
}