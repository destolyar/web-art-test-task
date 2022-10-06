export const checkLocalstorage = () => {
    const res = localStorage.getItem("user")
    
    if(res) {
        return JSON.parse(res)
    }

    return res
}