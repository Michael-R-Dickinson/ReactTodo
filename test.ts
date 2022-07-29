const dictionary: Record<string, number> = {}
//keys are strings, values are numbers


function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
    // Checks if object is in an object and allows variables to index objects
    return key in obj
}
