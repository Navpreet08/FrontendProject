export interface Course {
    id?: number;
    name: string

}

export interface Batch {
    id?: number;
    name: string;
    courseId: number

}


export interface Teacher {
    id?: number;
    name: string;
    subjectId: number

}


export interface Student {
    id?: number;
    name: string;


}


export interface Subject {
    id?: number;
    name: string;
    courseId: number

}


export  interface  BatchStudent  {
    id?:  number;
    batchId:  number;
    studentId:  number;
}

export interface Lecture {
    id?: number;
    name: string;
    batchId: number;
    subjectId: number;
    teacherId: number

}


