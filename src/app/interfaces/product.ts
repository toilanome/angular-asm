

export interface IProduct {
    id?: number | string;
    name: string;
    price?: number;
    description?: string;
    categoryId?: string;
    createdAt?: Date;
    updatedAt?: Date;   
    imageUrl: string
    // categoryId: string;

}
export interface Users {
    success: any;
    name: string,
    email: string,
    password:string,
    confirmPassword : string
  }

