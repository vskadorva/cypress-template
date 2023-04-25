export const hasOperationName = (req, operationName) => {
    return req.body?.operationName === operationName;
}

// Alias query if operationName matches
export const aliasQuery = (req, operationName) => {
    req.alias = hasOperationName(req, operationName) ? `gql${operationName}Query` : req.alias;
}

// Alias mutation if operationName matches
export const aliasMutation = (req, operationName) => {
    req.alias = hasOperationName(req, operationName) ? `gql${operationName}Mutation` : req.alias;
}
