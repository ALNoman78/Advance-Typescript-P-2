const UserRoles = {
    Admin: 'ADMIN',
    Editor: "EDITOR",
    Viewer: "VIEWER"
} as const;

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else {
        return false;
    }
}


type Area<T> = {
    [key in keyof T]: T[key]
}

const area2: Area<{ width: number; height: string }> = {
    height: "20",
    width: 30,
}  

type Product = {
    id : number,
    name : string,
    price : number,
    stock : number,
    color ?: string,
}

type project1 = Pick<Product, "id" | "name" | "stock">