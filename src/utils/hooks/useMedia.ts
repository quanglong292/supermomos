export default (name: string, path: "svg" | "png" | "jpeg" | undefined) => {
    let value = null

    if (path === "svg") value = require(`@src/assets/images/icons/${name}.${path}`)
    if (["png", "jpeg"].includes(path)) value = require(`@src/assets/images/${name}.${path}`)
    
    return value
}