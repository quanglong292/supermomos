const getFieldToValidate = (schema: any[]) => {
    const mapFlat = schema.map((i) => i.group ? i.inputs : i).flat()
    const filterValidations = mapFlat.filter(i => i.validations)
    return filterValidations.map(i => {
        return {
            field: i.field,
            validations: i.validations
        }
    })
}

const getValidateResult = (data, array: any[]) => {
    let found = {}
    array.forEach(i => {
        const {field, validations} = i
        let msg = []
        
        if (validations.required && !data[field]) msg = [...msg, validations.required.message]

        if (msg.length) found = {...found, [field]: msg}
    })
    
    return Object.entries(found).length ? found : undefined
}

export default (data: any) => (scheme: any[]) => {
    const fieldToValidate = getFieldToValidate(scheme)
    
    const v = getValidateResult(data, fieldToValidate)

    return v
}