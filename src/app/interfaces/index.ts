
export interface LoginDTO {
    password: string;
    email: string;
}

export class TestDTO{
    id! :number;
    title! : string;
    duration! :string;
    marks!: number;

}



export class CourseDTO {
    id!: number;
    coursecode!: number;
    title!: string;
    description!: string;
    duration!: string;
    startDate!: string | Date;
    endDate!: string | Date;
    instructorname!: string;

}

export class AdminRegisterDTO {
    
    id!: number;
    username!: string;
    password!: string;
    firstname!: string;
    lastname!: string;
    email!: string;
    phone!: string;
    
    
    
    
    
   
}

export class StudentRegisterDTO {
    
    id!: number;
    username!: string;
    password!: string;
    firstname!: string;
    lastname!: string;
    email!: string;
    phone!: string;
    
    
    
    
    
   
}

