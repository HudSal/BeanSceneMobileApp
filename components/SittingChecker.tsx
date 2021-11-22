//This component convert sittingTypeId into bfast, lunch or dinner

export function sittingChecker(variable:number){
if(variable == 1)
{
    let output = 'Breakfast';
    return output;
}
else if(variable == 2)
{
    let output = 'Lunch';
    return output;
}
else if(variable == 3)
{
    let output = 'Dinner';
    return output;
}
else if(variable == 4)
{
    let output = 'Special';
    return output;
}

}