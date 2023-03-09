import { toast } from "react-toastify";

export const deepClone = (obj: any) => JSON.parse(JSON.stringify(obj ?? {}))
export const mapToObject = (array: any[], vPath: string) => {
    let obj = {}
    array.forEach(i => {
        obj = {...obj, [i.field]: i[vPath]}
    })

    return obj
}
export const updateToast = (id: any) => toast.update(id, { render: "Done!", type: "success", isLoading: false, autoClose: 3000, closeButton: true });